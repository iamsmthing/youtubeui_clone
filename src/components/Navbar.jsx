import React from "react";
import "./navbar.css";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import ChannelImg from "../assets/channelimg.png";

const Container = styled.div`
  top: 0px;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  background-color: ${({ theme }) => theme.bg};
`;

const Search = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.scolor};
`;

const Button = styled.div`
  display: flex;
  color: ${({ theme }) => theme.scolor};
  flex: 40%;
  cursor: pointer;
  padding-right: 5px;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;
const SearchContainer = styled.div`
  flex: 80%;
  gap: 5px;
  color: ${({ theme }) => theme.scolor};
  margin-left: 100px;
  justify-content: center;

  display: flex;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <Search>
            <input className="input" type="text" placeholder="Search" />
            <SearchIcon />
          </Search>
          <MicOutlinedIcon />
        </SearchContainer>
        <Button>
          <AppsOutlinedIcon />
          <NotificationsActiveIcon />
          <Avatar src={ChannelImg} />
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
