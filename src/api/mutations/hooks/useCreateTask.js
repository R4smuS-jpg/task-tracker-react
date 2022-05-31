import { useMutation } from "@apollo/client";
import getCurrentUser from "../../query/getCurrentUser";
import createTask from "../createTask";

const useCreateTask = () => {
  const [mutation, { data }] = useMutation(createTask, {
    refetchQueries: [{ query: getCurrentUser }],
  });

  const create = async (name, description) => {
    await mutation({ variables: { name, description } });
  };

  return {
    create,
    data,
  };
};

export default useCreateTask;
