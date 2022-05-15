import { useMutation } from "@apollo/client";
import createProject from "../createProject";
import getCurrentUser from "../../query/getCurrentUser";

const useCreateProject = () => {
  const [mutation, { data }] = useMutation(createProject, {
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

export default useCreateProject;
