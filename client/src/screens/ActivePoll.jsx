import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ActiveCard from "../components/ActiveCard";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { mobile600 } from "../responsive";

import axios from "axios";

const Container = styled.div`
  height: 100vh;
  width: 80%;
  margin: auto;
  margin-top: 30px;
`;

const Wrapper = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
  ${mobile600({
    flexWrap: "wrap",
  })}
`;

const TimeFilter = styled.div`
  width: 130px;
  margin-right: 15px;
  ${mobile600({
    width: "45%",
    marginBottom: "25px",
  })}
`;
const VisibilityFilter = styled.div`
  width: 130px;
  margin-right: 15px;
  ${mobile600({
    width: "45%",
  })}
`;

const CreatedByFilter = styled.div`
  width: 145px;
  margin-right: 15px;
  ${mobile600({
    width: "45%",
  })}
`;

const ActiveFilter = styled.div`
  width: 125px;
  margin-right: 15px;
  ${mobile600({
    width: "45%",
  })}
`;

const Message = styled.p``;

const ActivePoll = () => {
  const [sortTime, setSortTime] = useState("desc");
  const [sortVisibility, setSortVisibility] = useState("public");
  const [sortCreatedBy, setSortCreatedBy] = useState("all");
  const [sortActive, setSortActive] = useState(true);
  const [loading, setLoading] = useState(true);
  const [pollData, setPollData] = useState([]);

  const currentUserId = useSelector((state) => {
    return state.userLogin.currentUser._id;
  });

  useEffect(() => {
    const getPollData = async () => {
      let searchParams = {};
      if (sortCreatedBy === "all") {
        searchParams = {
          sortTime: sortTime,
          sortVisibility: sortVisibility,
          sortActive: sortActive,
        };
      } else {
        searchParams = {
          sortTime: sortTime,
          sortVisibility: sortVisibility,
          sortActive: sortActive,
          sortCreatedBy: currentUserId,
        };
      }
      try {
        const response = await axios.post("/api/poll/view", searchParams);
        setLoading(false);
        setPollData(response.data);
      } catch (e) {
        setLoading(false);
      }
    };
    getPollData();
  }, [sortTime, sortVisibility, sortCreatedBy, sortActive]);

  return (
    <Container>
      <Wrapper>
        <FilterContainer>
          <TimeFilter>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sort"
                value={sortTime}
                onChange={(e) => setSortTime(e.target.value)}
              >
                <MenuItem value="asc">Time (a-z)</MenuItem>
                <MenuItem value="desc">Time (z-a)</MenuItem>
              </Select>
            </FormControl>
          </TimeFilter>
          <VisibilityFilter>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Type"
                value={sortVisibility}
                onChange={(e) => setSortVisibility(e.target.value)}
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="private">Private</MenuItem>
              </Select>
            </FormControl>
          </VisibilityFilter>
          <CreatedByFilter>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Created By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Created By"
                value={sortCreatedBy}
                onChange={(e) => setSortCreatedBy(e.target.value)}
              >
                <MenuItem value="me">Me</MenuItem>
                <MenuItem value="all">All</MenuItem>
              </Select>
            </FormControl>
          </CreatedByFilter>
          <ActiveFilter>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Active</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Active"
                value={sortActive}
                onChange={(e) => setSortActive(e.target.value)}
              >
                <MenuItem value={true}>True</MenuItem>
                <MenuItem value={false}>False</MenuItem>
              </Select>
            </FormControl>
          </ActiveFilter>
        </FilterContainer>
        {loading === false && pollData.length > 0 ? (
          pollData.map((poll) => {
            return (
              <ActiveCard
                key={poll._id}
                ask={poll.ask}
                visibility={poll.visibility}
                opt1={poll.opt1.value}
                opt2={poll.opt2.value}
                opt3={poll.opt3.value}
                opt4={poll.opt4.value}
                pollId={poll._id}
                active={poll.active}
              />
            );
          })
        ) : (
          <Message>Nothing to display.</Message>
        )}
      </Wrapper>
    </Container>
  );
};

export default ActivePoll;
