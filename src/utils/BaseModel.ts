import {
    Constructor,
    Model,
    Page,
    PartialModelObject,
    QueryBuilder,
    QueryBuilderType,
    TransactionOrKnex,
  } from "objection";
  

  
  class BaseQueryBuilder<M extends Model, R = M[]> extends QueryBuilder<M, R> {
    ArrayQueryBuilderType!: BaseQueryBuilder<M, M[]>;
    SingleQueryBuilderType!: BaseQueryBuilder<M, M>;
    NumberQueryBuilderType!: BaseQueryBuilder<M, number>;
    PageQueryBuilderType!: BaseQueryBuilder<M, Page<M>>;
  
    // Returns the instance and whether or not the instance was created.
    async getOrCreate(params: PartialModelObject<M>, where: PartialModelObject<M>): Promise<[M, boolean]> {
      const instance = await this.findOne(where);
  
      if (instance) {
        // instance is found, return it
        return [instance, false];
      }
  
      try {
        // instance is not found, try to create it
        return [await this.insert(params), true];
      } catch (error) {
        throw new Error(`Oops! Error spotted :(`);
      }
    }
  }
  
  class BaseModel extends Model {
    createdAt!: Date;
    updatedAt!: Date;
  
    // Both of these are needed.
    QueryBuilderType!: BaseQueryBuilder<this>;
    static QueryBuilder = BaseQueryBuilder;
  
    static get modelPaths() {
      return [__dirname];
    }
  
    static query<M extends Model>(this: Constructor<M>, trxOrKnex?: TransactionOrKnex): QueryBuilderType<M> {
      const query = super.query(trxOrKnex) as QueryBuilderType<M>;
  
      return query.onError((error) => {
        throw error;
      });
    }
  }
  
  export default BaseModel;
  