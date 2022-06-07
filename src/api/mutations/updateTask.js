import { gql } from "@apollo/client";

export default gql`
  mutation updateTask($id: ID!, $title: String!, $description: String) {
    updateProject(taskId: $id, title: $title, description: $description) {
      id
      title
      description
    }
  }
`;
