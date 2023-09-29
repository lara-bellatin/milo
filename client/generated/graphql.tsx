import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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
  todayLogs?: Maybe<Array<Log>>;
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

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', user?: { __typename?: 'User', id: string, displayName: string, username?: string | null, email: string, status: UserStatus, birthday?: string | null, createdAt?: string | null, updatedAt?: string | null } | null } | null };

export type BucketQueryVariables = Exact<{
  bucketId: Scalars['String'];
}>;


export type BucketQuery = { __typename?: 'Query', bucket?: { __typename?: 'Bucket', id: string, title: string, description?: string | null, type: BucketType, status: BucketStatus, dueDate?: string | null, logs?: Array<{ __typename?: 'Log', id: string, title: string, type: LogType, status: LogStatus, description?: string | null, preNotes?: string | null, postNotes?: string | null, dueDate?: string | null } | null> | null } | null };

export type BucketsQueryVariables = Exact<{ [key: string]: never; }>;


export type BucketsQuery = { __typename?: 'Query', buckets: Array<{ __typename?: 'Bucket', id: string, title: string, description?: string | null, type: BucketType, status: BucketStatus, dueDate?: string | null }> };

export type GetTodayLogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodayLogsQuery = { __typename?: 'Query', todayLogs?: Array<{ __typename?: 'Log', id: string, title: string, description?: string | null, preNotes?: string | null, postNotes?: string | null, type: LogType, status: LogStatus, dueDate?: string | null, bucket?: { __typename?: 'Bucket', id: string, title: string, status: BucketStatus, type: BucketType } | null }> | null };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
      displayName
      username
      email
      status
      birthday
      createdAt
      updatedAt
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const BucketDocument = gql`
    query Bucket($bucketId: String!) {
  bucket(bucketId: $bucketId) {
    id
    title
    description
    type
    status
    dueDate
    logs {
      id
      title
      type
      status
      description
      preNotes
      postNotes
      dueDate
    }
  }
}
    `;

/**
 * __useBucketQuery__
 *
 * To run a query within a React component, call `useBucketQuery` and pass it any options that fit your needs.
 * When your component renders, `useBucketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBucketQuery({
 *   variables: {
 *      bucketId: // value for 'bucketId'
 *   },
 * });
 */
export function useBucketQuery(baseOptions: Apollo.QueryHookOptions<BucketQuery, BucketQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BucketQuery, BucketQueryVariables>(BucketDocument, options);
      }
export function useBucketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BucketQuery, BucketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BucketQuery, BucketQueryVariables>(BucketDocument, options);
        }
export type BucketQueryHookResult = ReturnType<typeof useBucketQuery>;
export type BucketLazyQueryHookResult = ReturnType<typeof useBucketLazyQuery>;
export type BucketQueryResult = Apollo.QueryResult<BucketQuery, BucketQueryVariables>;
export const BucketsDocument = gql`
    query Buckets {
  buckets {
    id
    title
    description
    type
    status
    dueDate
  }
}
    `;

/**
 * __useBucketsQuery__
 *
 * To run a query within a React component, call `useBucketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBucketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBucketsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBucketsQuery(baseOptions?: Apollo.QueryHookOptions<BucketsQuery, BucketsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BucketsQuery, BucketsQueryVariables>(BucketsDocument, options);
      }
export function useBucketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BucketsQuery, BucketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BucketsQuery, BucketsQueryVariables>(BucketsDocument, options);
        }
export type BucketsQueryHookResult = ReturnType<typeof useBucketsQuery>;
export type BucketsLazyQueryHookResult = ReturnType<typeof useBucketsLazyQuery>;
export type BucketsQueryResult = Apollo.QueryResult<BucketsQuery, BucketsQueryVariables>;
export const GetTodayLogsDocument = gql`
    query GetTodayLogs {
  todayLogs {
    id
    title
    description
    preNotes
    postNotes
    type
    status
    dueDate
    bucket {
      id
      title
      status
      type
    }
  }
}
    `;

/**
 * __useGetTodayLogsQuery__
 *
 * To run a query within a React component, call `useGetTodayLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodayLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodayLogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodayLogsQuery(baseOptions?: Apollo.QueryHookOptions<GetTodayLogsQuery, GetTodayLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodayLogsQuery, GetTodayLogsQueryVariables>(GetTodayLogsDocument, options);
      }
export function useGetTodayLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodayLogsQuery, GetTodayLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodayLogsQuery, GetTodayLogsQueryVariables>(GetTodayLogsDocument, options);
        }
export type GetTodayLogsQueryHookResult = ReturnType<typeof useGetTodayLogsQuery>;
export type GetTodayLogsLazyQueryHookResult = ReturnType<typeof useGetTodayLogsLazyQuery>;
export type GetTodayLogsQueryResult = Apollo.QueryResult<GetTodayLogsQuery, GetTodayLogsQueryVariables>;