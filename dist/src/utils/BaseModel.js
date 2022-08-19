"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class BaseQueryBuilder extends objection_1.QueryBuilder {
    getOrCreate(params, where) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = yield this.findOne(where);
            if (instance) {
                return [instance, false];
            }
            try {
                return [yield this.insert(params), true];
            }
            catch (error) {
                throw new Error(`Oops! Error spotted :(`);
            }
        });
    }
}
class BaseModel extends objection_1.Model {
    static get modelPaths() {
        return [__dirname];
    }
    static query(trxOrKnex) {
        const query = super.query(trxOrKnex);
        return query.onError((error) => {
            throw error;
        });
    }
}
BaseModel.QueryBuilder = BaseQueryBuilder;
exports.default = BaseModel;
//# sourceMappingURL=BaseModel.js.map