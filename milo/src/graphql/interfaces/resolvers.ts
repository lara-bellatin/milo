export interface ResolverFn {
  (parent: any, args: Args, context: Context, info: any): Promise<any>;
}

export interface Args {
  [key: string]: any;
}

export interface APIs {
  userAPI: any;
  logsAPI: any;
  bucketsAPI: any;
  sequencesAPI: any;
}

export interface Context {
  auth: any,
  user?: any;
  apis?: APIs;
  origin?: string;
  ipAddress?: string;
}
