import { gql } from "@apollo/client";

export const LOGIN = gql`
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
