import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useApolloClient } from "@apollo/client";

import Header from "../components/Header";
import cat from "../images/giphy.gif";
import useAuthUser from "../api/AuthUser";

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

function Home() {
  const { user, isLoading } = useAuthUser();

  const client = useApolloClient();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isLoading === false && !user) {
      navigate("/sign-in");
    }
  }, [user, isLoading]);

  return (
    <HomeWrap>
      <Header />
      <Title>Welcome to the Task-Tracker =)</Title>
      <Image src={cat}></Image>
    </HomeWrap>
  );
}

export default Home;
