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
  userAPI: any;
}

export interface Context {
  unauthenticatedAPIs: {
    passport: any;
    userAPI: any;
  }
  loginUser?: any;
  user?: any;
  apis?: APIs;
}
