export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type Bucket = {
  __typename?: 'Bucket';
  canceledAt?: Maybe<Scalars['String']>;
  completedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logs?: Maybe<Array<Maybe<Log>>>;
  sequences?: Maybe<Array<Maybe<Sequence>>>;
  status: BucketStatus;
  title: Scalars['String'];
  type: BucketType;
  updatedAt?: Maybe<Scalars['String']>;
};

export enum BucketStatus {
  Archived = 'ARCHIVED',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED',
  Passive = 'PASSIVE',
  Waiting = 'WAITING'
}

export enum BucketType {
  Area = 'AREA',
  Project = 'PROJECT'
}

export type CreateBucketInput = {
  completedAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title: Scalars['String'];
  type: BucketType;
};

export type CreateLogInput = {
  bucketId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['String']>;
  preNotes?: InputMaybe<Scalars['String']>;
  sequenceId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type CreateSequenceInput = {
  completedAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  logInput?: InputMaybe<Array<InputMaybe<CreateLogInput>>>;
  title: Scalars['String'];
};

export type Log = {
  __typename?: 'Log';
  bucket?: Maybe<Bucket>;
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  postNotes?: Maybe<Scalars['String']>;
  preNotes?: Maybe<Scalars['String']>;
  resolvedAt?: Maybe<Scalars['String']>;
  sequence?: Maybe<Sequence>;
  sequenceId?: Maybe<Scalars['String']>;
  sequenceOrder?: Maybe<Scalars['String']>;
  status: LogStatus;
  title: Scalars['String'];
  type: LogType;
  updatedAt?: Maybe<Scalars['String']>;
};

export enum LogStatus {
  Deleted = 'DELETED',
  Resolved = 'RESOLVED',
  Unresolved = 'UNRESOLVED'
}

export enum LogType {
  Decision = 'DECISION',
  Event = 'EVENT',
  Plan = 'PLAN',
  Task = 'TASK',
  Wait = 'WAIT'
}

export type Mutation = {
  __typename?: 'Mutation';
  cancelBucket?: Maybe<Bucket>;
  cancelSequence?: Maybe<Sequence>;
  completeBucket?: Maybe<Bucket>;
  completeSequence?: Maybe<Sequence>;
  createBucket: Bucket;
  createLog: Log;
  createSequence: Sequence;
  deleteLog?: Maybe<Log>;
  resolveLog?: Maybe<Log>;
  unresolveLog?: Maybe<Log>;
  updateBucket: Bucket;
  updateLog: Log;
  updateSequence: Sequence;
};


export type MutationCancelBucketArgs = {
  id: Scalars['String'];
};


export type MutationCancelSequenceArgs = {
  id: Scalars['String'];
};


export type MutationCompleteBucketArgs = {
  id: Scalars['String'];
};


export type MutationCompleteSequenceArgs = {
  id: Scalars['String'];
};


export type MutationCreateBucketArgs = {
  input: CreateBucketInput;
};


export type MutationCreateLogArgs = {
  input: CreateLogInput;
};


export type MutationCreateSequenceArgs = {
  input: CreateSequenceInput;
};


export type MutationDeleteLogArgs = {
  id: Scalars['String'];
};


export type MutationResolveLogArgs = {
  id: Scalars['String'];
};


export type MutationUnresolveLogArgs = {
  id: Scalars['String'];
};


export type MutationUpdateBucketArgs = {
  input: UpdateBucketInput;
};


export type MutationUpdateLogArgs = {
  input: UpdateLogInput;
};


export type MutationUpdateSequenceArgs = {
  input: UpdateSequenceInput;
};

export type Query = {
  __typename?: 'Query';
  bucket?: Maybe<Bucket>;
  buckets: Array<Bucket>;
  log?: Maybe<Log>;
  login?: Maybe<Scalars['Boolean']>;
  logout?: Maybe<Scalars['Boolean']>;
  logs: Array<Log>;
  sequence?: Maybe<Sequence>;
  sequenceLogs: Array<Log>;
  sequences: Array<Sequence>;
};


export type QueryBucketArgs = {
  id: Scalars['String'];
};


export type QueryLogArgs = {
  id: Scalars['String'];
};


export type QueryLoginArgs = {
  password: Scalars['String'];
};


export type QuerySequenceArgs = {
  id: Scalars['String'];
};


export type QuerySequenceLogsArgs = {
  id: Scalars['String'];
};

export type Sequence = {
  __typename?: 'Sequence';
  canceledAt?: Maybe<Scalars['String']>;
  completedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logs?: Maybe<Array<Maybe<Log>>>;
  sequences?: Maybe<Array<Maybe<Sequence>>>;
  status: SequenceStatus;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export enum SequenceStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED'
}

export type UpdateBucketInput = {
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<BucketType>;
};

export type UpdateLogInput = {
  bucketId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  postNotes?: InputMaybe<Scalars['String']>;
  preNotes?: InputMaybe<Scalars['String']>;
  sequenceId?: InputMaybe<Scalars['String']>;
  sequenceOrder?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<LogType>;
};

export type UpdateSequenceInput = {
  deletedLogs?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  logInput?: InputMaybe<Array<InputMaybe<CreateLogInput>>>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<BucketType>;
};
