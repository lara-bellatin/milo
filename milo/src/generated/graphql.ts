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
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  user?: Maybe<User>;
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
  owner: User;
  sequences?: Maybe<Array<Maybe<Sequence>>>;
  status: BucketStatus;
  title: Scalars['String'];
  type: BucketType;
  updatedAt?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
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

export type CreateUserInput = {
  displayName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
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
  owner?: Maybe<User>;
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
  userId: Scalars['String'];
};

export enum LogStatus {
  Deleted = 'DELETED',
  Resolved = 'RESOLVED',
  Unresolved = 'UNRESOLVED'
}

export enum LogType {
  Decision = 'DECISION',
  Event = 'EVENT',
  Pin = 'PIN',
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
  createUser?: Maybe<AuthPayload>;
  deleteLog?: Maybe<Log>;
  deleteUser: User;
  login?: Maybe<AuthPayload>;
  logout?: Maybe<Scalars['Boolean']>;
  resolveLog?: Maybe<Log>;
  unresolveLog?: Maybe<Log>;
  updateBucket: Bucket;
  updateLog: Log;
  updateSequence: Sequence;
  updateUser?: Maybe<User>;
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


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteLogArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
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


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  bucket?: Maybe<Bucket>;
  buckets: Array<Bucket>;
  currentUser?: Maybe<User>;
  log?: Maybe<Log>;
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


export type QuerySequenceArgs = {
  id: Scalars['String'];
};


export type QuerySequenceLogsArgs = {
  id: Scalars['String'];
};

export type Sequence = {
  __typename?: 'Sequence';
  buckets?: Maybe<Array<Maybe<Bucket>>>;
  canceledAt?: Maybe<Scalars['String']>;
  completedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logs?: Maybe<Array<Maybe<Log>>>;
  owner: User;
  status: SequenceStatus;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
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

export type UpdateUserInput = {
  birthday?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  birthday?: Maybe<Scalars['String']>;
  buckets?: Maybe<Array<Maybe<Bucket>>>;
  createdAt?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  logs?: Maybe<Array<Maybe<Log>>>;
  password: Scalars['String'];
  sequences?: Maybe<Array<Maybe<Sequence>>>;
  status: UserStatus;
  updatedAt?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export enum UserStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED'
}
