import React from 'react';
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Container = styled.div`
    height: 100vh;
`;

const Welcome = styled.p`
    margin-top: 6%;
    margin-left: 8%;
    font-size: 20px;
    margin-bottom: 100px;
`
const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;
const Card = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 2px 5px 10px #888888;
    transition: transform 0.3s ease;
    cursor: pointer;
    &:hover {
       transform: translateY(-10px);
    }
`;

const CardTitle = styled.div`
    font-size: 1rem;
`

const Menu = () => {

    const currentLocation = useLocation();

    const user = useSelector(state => {
        return state.userLogin.currentUser;
    })

    const firstName = user.username.split(" ")[0];

    return (
        <Container>
            <Welcome>{`Welcome, ${firstName}`}</Welcome>
            <CardContainer>
                <Link to={`${currentLocation.pathname}/create`} style={{ textDecoration: "none", color: "black" }}>
                    <Card>
                        <CardTitle>
                         Create Poll
                        </CardTitle>
                    </Card>
                </Link>
                 <Link to={`${currentLocation.pathname}/view`} style={{ textDecoration: "none", color: "black" }}>
                    <Card>
                        <CardTitle>
                         All Polls
                        </CardTitle>
                    </Card>
                </Link>
                <Link to={`${currentLocation.pathname}/response`} style={{ textDecoration: "none", color: "black" }}>
                    <Card>
                        <CardTitle>
                         Poll's Responses
                        </CardTitle>
                    </Card>
                </Link>
            </CardContainer>
        </Container>
    )
}

export default Menu