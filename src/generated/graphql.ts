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
  owner?: Maybe<User>;
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
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['String']>;
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
  bucketId?: InputMaybe<Scalars['String']>;
  logInput?: InputMaybe<Array<InputMaybe<CreateLogInput>>>;
  ordered: Scalars['Boolean'];
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
  addLogToBucket?: Maybe<Log>;
  addLogToSequence?: Maybe<Log>;
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


export type MutationAddLogToBucketArgs = {
  bucketId: Scalars['String'];
  logId: Scalars['String'];
};


export type MutationAddLogToSequenceArgs = {
  logId: Scalars['String'];
  sequenceId: Scalars['String'];
  sequenceOrder?: InputMaybe<Scalars['String']>;
};


export type MutationCancelBucketArgs = {
  bucketId: Scalars['String'];
};


export type MutationCancelSequenceArgs = {
  sequenceId: Scalars['String'];
};


export type MutationCompleteBucketArgs = {
  bucketId: Scalars['String'];
};


export type MutationCompleteSequenceArgs = {
  sequenceId: Scalars['String'];
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
  logId: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationResolveLogArgs = {
  logId: Scalars['String'];
};


export type MutationUnresolveLogArgs = {
  logId: Scalars['String'];
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
  sequences: Array<Sequence>;
};


export type QueryBucketArgs = {
  bucketId: Scalars['String'];
};


export type QueryLogArgs = {
  logId: Scalars['String'];
};


export type QuerySequenceArgs = {
  sequenceId: Scalars['String'];
};

export type Sequence = {
  __typename?: 'Sequence';
  buckets?: Maybe<Array<Maybe<Bucket>>>;
  canceledAt?: Maybe<Scalars['String']>;
  completedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logs?: Maybe<Array<Maybe<Log>>>;
  owner?: Maybe<User>;
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
  bucketId: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<BucketType>;
};

export type UpdateLogInput = {
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['String']>;
  logId: Scalars['String'];
  postNotes?: InputMaybe<Scalars['String']>;
  preNotes?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<LogType>;
};

export type UpdateSequenceInput = {
  ordered: Scalars['Boolean'];
  sequenceId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  birthday?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
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
