import React from "react";
import styled from "styled-components";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import Shorts from "../assets/youtube-shorts-icon.png";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import StreamIcon from "@mui/icons-material/Stream";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import FeedbackIcon from "@mui/icons-material/Feedback";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import "./menu.css";

const Container = styled.div`
  flex: 1.3;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  position: sticky;
  overflow-x: hidden;
  overflow-y: scroll;
  top: 0;
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #a7a3a3;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #f30303ba;
  }
`;

const Wrapper = styled.div`
  padding: 15px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  /* position: fixed; */
  font-weight: bold;
  margin-bottom: 25px;
  cursor: pointer;
  z-index: 99;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
  cursor: pointer;
  padding: 7.5px 0px;
  :hover {
    background-color: grey;
    border-radius: 4px;
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

function Menu({ darkMode, setDarkMode }) {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <MenuOutlinedIcon />
          <YouTubeIcon className="icon" />
          YouTube<sup className="superscript">IN</sup>
          <Item onClick={() => setDarkMode(!darkMode)}>
            <DarkModeIcon />
          </Item>
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <img src={Shorts} alt="Logo" className="shorts" />
          Shorts
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Item>
          <SlideshowIcon />
          Your Videos
        </Item>
        <Item>
          <ScheduleIcon />
          Watch Later
        </Item>
        <Item>
          <ThumbUpOutlinedIcon />
          Liked Videos
        </Item>
        <Hr />
        <Title>Explore</Title>
        <Item>
          <LocalMoviesIcon />
          Movies
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <StreamIcon />
          Live
        </Item>
        <Item>
          <CheckroomIcon />
          Fashion & Beauty
        </Item>
        <Item>
          <LightbulbOutlinedIcon />
          Learning
        </Item>
        <Item>
          <EmojiEventsIcon />
          Sports
        </Item>
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <OutlinedFlagIcon />
          Report History
        </Item>
        <Item>
          <HelpIcon />
          Help
        </Item>
        <Item>
          <FeedbackIcon />
          Send feedback
        </Item>
      </Wrapper>
    </Container>
  );
}

export default Menu;
