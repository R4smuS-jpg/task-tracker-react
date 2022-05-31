import { useMutation } from "@apollo/client";
import getCurrentUser from "../../query/getCurrentUser";
import updateTask from "../updateTask";

const useUpdateTask = () => {
  const [mutation, { data }] = useMutation(updateTask, {
    refetchQueries: [{ query: getCurrentUser }],
  });

  const update = async (id, name, description) => {
    await mutation({ variables: { id, name, description } });
  };

  return {
    update,
    data,
  };
};

export default useUpdateTask;
