import { gql } from "@apollo/client";

export default gql`
  mutation createTask($title: String!, $description: String!, $status: TaskStatus!, $project: Project!) {
    createTask(title: $title, description: $description, status: $status, project: $project) {
      title
      description
      status
      project
    }
  }
`;
