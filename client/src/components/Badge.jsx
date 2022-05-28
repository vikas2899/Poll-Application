import React from "react";
import styled from 'styled-components'

const Container = styled.div``;
const Wrapper = styled.div`
    border: ${props =>
    props.color === "blue" ? "#4F6CFF" :
        props.color === "green" ? "green" :
            props.color === "red" ? "red" :
                "#FFBF00"};
    padding: 8px;
    border-radius: 5px;
    background: ${props =>
    props.color === "blue" ? "#4F6CFF" :
        props.color === "green" ? "green" :
            props.color === "red" ? "red" :
                "#FFBF00"};
`;
const Text = styled.p`
    text-transform: capitalize;
    color: white;
`;

const Badge = (props) => {
    console.log(props);
    return (
        <Container>
            <Wrapper color={props.color}>
                <Text>{props.text}</Text>
            </Wrapper>
        </Container>
    );
}

export default Badge;