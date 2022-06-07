import { useMutation } from "@apollo/client";
import getCurrentUser from "api/query/getCurrentUser";
import createTask from "api/mutations/createTask";

const useCreateTask = () => {
  const [mutation, { data }] = useMutation(createTask, {
    refetchQueries: [{ query: getCurrentUser }],
  });

  const create = async ( title, description, status, projectId) => {
    await mutation({ variables: { title, description, status, projectId } });
  };

  return {
    create,
    data,
  };
};

export default useCreateTask;
