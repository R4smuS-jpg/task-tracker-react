import { useMutation } from "@apollo/client";
import getCurrentUser from "api/query/getCurrentUser";
import removeTask from "api/mutations/removeTask";

const useRemoveTask = () => {
  const [mutation, { data }] = useMutation(removeTask, {
    refetchQueries: [{ query: getCurrentUser }],
  });

  const remove = async (id) => {
    await mutation({ variables: { id } });
  };

  return {
    remove,
    data,
  };
};

export default useRemoveTask;
