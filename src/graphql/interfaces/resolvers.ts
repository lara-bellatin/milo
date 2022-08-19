export interface ResolverFn {
  (parent: any, args: Args, context: Context, info: any): Promise<any>;
}

export interface Args {
  [key: string]: any;
}

export interface APIs {
  logsAPI: any;
  sequencesAPI: any;
  bucketsAPI: any;
}

export interface Context {
  loginPassword?: string;
  apis?: APIs;
}
