import { gql } from "@apollo/client";

export const BUCKETS = gql`
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
