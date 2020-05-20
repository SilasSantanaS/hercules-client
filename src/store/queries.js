import { gql } from "apollo-boost";

export const SIGNUP = gql`
  mutation(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $phone: String
  ) {
    signup(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
      phone: $phone
    ) {
      token
    }
  }
`;

export const SIGNIN = gql`
  mutation($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
    }
  }
`;

// Queries

export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      password
      email
      phone
    }
  }
`;
