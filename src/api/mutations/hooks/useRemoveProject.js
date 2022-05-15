import { useMutation } from "@apollo/client";
import removeProject from "../removeProject";
import getCurrentUser from "../../query/getCurrentUser";

const useRemoveProject = () => {
  const [mutation, { data }] = useMutation(removeProject, {
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

export default useRemoveProject;
