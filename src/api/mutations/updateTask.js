import { gql } from "@apollo/client";

export default gql`
  mutation updateTask($id: ID!, $name: String!, $description: String) {
    updateProject(taskId: $id, name: $name, description: $description) {
      description
      id
      name
    }
  }
`;
