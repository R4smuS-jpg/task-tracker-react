import { gql } from "@apollo/client";

export default gql`
  mutation destroyTask($id: ID!) {
    destroyTask(taskId: $id)
  }
`;
