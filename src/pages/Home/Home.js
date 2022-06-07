import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useApolloClient } from "@apollo/client";

import Header from "components/Header/Header";
import useAuthUser from "api/AuthUser";
import useCreateProject from "api/mutations/hooks/useCreateProject";
import useRemoveProject from "api/mutations/hooks/useRemoveProject";
import EntityListWrapper from "components/entities/EntityListWrapper";
import EntityCard from "components/entities/EntityCard";
import useUpdateProject from "api/mutations/hooks/useUpdateProject";
import CreateEntityBlock from "components/entities/CreateEntityBlock/CreateEntityBlock";

import { HomeWrap } from "pages/Home/components";

function Home() {
  const { user, isLoading } = useAuthUser();

  const client = useApolloClient();
  const navigate = useNavigate();
  const handleLogoutClick = async () => {
    localStorage.clear();
    await client.clearStore();
    navigate("/sign-in");
  };

  const { create, loading, error } = useCreateProject();
  const { remove } = useRemoveProject();
  const { update } = useUpdateProject();

  useEffect(() => {
    if (isLoading === false && !user) {
      navigate("/sign-in");
    }
  }, [user, isLoading]);

  return (
    <HomeWrap>
      <Header />
      <CreateEntityBlock entity="project" handleLogoutClick={handleLogoutClick} createRequest={create} isLoading={loading} error={error} />
      <EntityListWrapper>
        {user?.projects?.map(({ id, name, description }) => (
          <EntityCard
            key={id}
            id={id}
            title="Project"
            name={name}
            description={description}
            onRemoveClick={remove}
            onUpdateClick={update}
          />
        ))}
      </EntityListWrapper>
    </HomeWrap>
  );
}

export default Home;
