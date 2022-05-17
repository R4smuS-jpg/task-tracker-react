import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useApolloClient } from "@apollo/client";

import Header from "../components/Header";
import useAuthUser from "../api/AuthUser";
import useCreateProject from "../api/mutations/hooks/useCreateProject";
import useRemoveProject from "../api/mutations/hooks/useRemoveProject";
import EntityListWrapper from "../components/entities/EntityListWrapper";
import EntityCard from "../components/entities/EntityCard";
import useCurrentUser from "../api/query/hooks/useCurrentUser";
import Button from "../components/Button";
import useUpdateProject from "../api/mutations/hooks/useUpdateProject";
import CreateEntityBlock from "../components/entities/CreateEntityBlock/CreateEntityBlock";
import { Wrapper } from "components/entities/EntityCard/components";

const Image = styled.img`
  border-radius: 8px;

  display: block;

  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;

  width: 35%;
`;

const Title = styled.h1`
  font-size: 5em;

  padding-top: 15vh;

  text-align: center;
`;

const HomeWrap = styled.div`
  background-color: #5cdb95;
  color: #fffff0;

  min-height: 100vh;
  width: 100vw;

  font-family: "ZCOOL QingKe HuangYou";
`;

const CreateProject = styled(Wrapper)`
  margin-top: 10px;
`;

const INITIAL_FORM_STATE = {
  name: "New task 5",
  description: "desc",
};

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
      navigate("/");
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
