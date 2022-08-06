import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ThumbNail from "../assets/thumbnail.png";
import ChannelImg from "../assets/channelimg.png";
const Container = styled.div`
  width: 322px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  border-radius: 8px;
  background-color: grey;
`;
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  gap: 12px;
`;
const Texts = styled.div``;
const Title = styled.h1`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`;
const Info = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.text};
`;

function Card() {
  return (
    <Container>
      <Image src={ThumbNail} />
      <Details>
        <Avatar src={ChannelImg} />
        <Texts>
          <Title>
            L14. Maximum Depth in Binary Tree | Height of Binary Tree | C++ |
            Java
          </Title>
          <ChannelName>TakeUForward</ChannelName>
          <Info>66,179 views . Premiered Aug 22, 2021</Info>
        </Texts>
      </Details>
    </Container>
  );
}

export default Card;
