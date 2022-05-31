import { gql } from "@apollo/client";

export default gql`
  fragment ProjectFragment on Task {
    createdAt
    updatedAt
    creator {
      avatarUrl
      email
      firstName
      id
      lastName
    }
    project {
      createdAt
      updatedAt
      creator
      description
      id
      name
    }
    comments {
      createdAt
      updatedAt
      creator
      id
      task
      text
    }
    description
    name
    id
  }
`;
