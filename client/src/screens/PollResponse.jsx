import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ResponseCard from '../components/ResponseCard';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const Container = styled.div`
    height: 100vh;
`;
const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 25px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 50px;
`;

const TimeFilter = styled.div`
    width: 130px;
    margin-right: 15px;
`;
const VisibilityFilter = styled.div`
    width: 130px;
    margin-right: 15px;
`;

const CreatedByFilter = styled.div`
    width: 145px;
    margin-right: 15px;
`

const ActiveFilter = styled.div`
    width: 125px;
`;

const Message = styled.div``;

const PollResponse = () => {

    const [pollData, setPollData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortTime, setSortTime] = useState("desc");
    const [sortVisibility, setSortVisibility] = useState("public");
    const [sortCreatedBy, setSortCreatedBy] = useState("all");
    const [sortActive, setSortActive] = useState(true);

    const currentUser = useSelector((state) => {
        return state.userLogin.currentUser._id;
    })

    useEffect(() => {
        const getPollData = async () => {
            let searchParams = {}
            if (sortCreatedBy === "all") {
                searchParams = {
                    sortTime: sortTime,
                    sortVisibility: sortVisibility,
                    sortActive: sortActive,
                }
            } else {
                searchParams = {
                    sortTime: sortTime,
                    sortVisibility: sortVisibility,
                    sortActive: sortActive,
                    sortCreatedBy: currentUser
                }
            }
            try {
                const response = await axios.post("http://localhost:5000/api/poll/view", searchParams);
                setLoading(false);
                setPollData(response.data);
            } catch (e) {
                setLoading(false);
            }
        }
        getPollData();
    }, [sortTime, sortVisibility, sortCreatedBy, sortActive]);


    const handleClosePoll = async (createdBy, pollId) => {
        if (createdBy !== currentUser) {
            alert("You cannot close this poll");
        } else {
            try {
                const response = await axios.put(`http://localhost:5000/api/poll/${pollId}/inactive`,
                    {
                        createdBy: createdBy,
                        currentUser: currentUser
                    }
                );
                alert("Poll Closed Successfully");
            } catch (e) {
                alert("You are not allowed to close this poll");
            }
        }
    }

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
                {loading === false && pollData.length > 0 ? pollData.map((poll) => {
                    return (
                        <ResponseCard key={poll._id}
                            ask={poll.ask}
                            visibility={poll.visibility}
                            opt1={poll.opt1.value}
                            opt1Count={poll.opt1.count}
                            opt2={poll.opt2.value}
                            opt2Count={poll.opt2.count}
                            opt3={poll.opt3.value}
                            opt3Count={poll.opt3.count}
                            opt4={poll.opt4.value}
                            opt4Count={poll.opt4.count}
                            pollId={poll._id}
                            handleClosePoll={handleClosePoll}
                            createdBy={poll.createdBy}
                            id={poll._id}
                            active={poll.active}
                        />
                    )
                }) : <Message>Nothing to display.</Message>}
            </Wrapper>
        </Container>
    );
}

export default PollResponse;