import { gql } from "@apollo/client";

export const GET_TODAY_LOGS = gql`
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
