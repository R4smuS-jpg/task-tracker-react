import { useMutation } from "@apollo/client";
import updateProject from "../updateProject";
import getCurrentUser from "../../query/getCurrentUser";

const useUpdateProject = () => {
  const [mutation, { data }] = useMutation(updateProject, {
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

export default useUpdateProject;
