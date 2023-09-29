import { gql } from "@apollo/client";

export const BUCKET = gql`
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
