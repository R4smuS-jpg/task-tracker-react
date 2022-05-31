import { useMutation } from "@apollo/client";
import getCurrentUser from "../../query/getCurrentUser";
import removeTask from "../removeTask";

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
