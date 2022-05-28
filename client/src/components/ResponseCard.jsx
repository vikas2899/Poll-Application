import React, {useState} from 'react';
import styled from 'styled-components';
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Container = styled.div`
    margin-bottom: 20px;
`;
const Wrapper = styled.div`
    width: 100%;
    margin: auto;
`;

const InfoContainer = styled.div``;

const Bar = styled.div`
    text-align: center;
    margin-bottom: 8px;
    width: 100%;
    display: flex;
    align-items: center;
`;

const BarTitleContainer = styled.div`
      flex: 7;
      border: 1px solid lightgray;
      padding: 8px;
      background: linear-gradient( to left, #ffffff 0%, #ffffff ${props => props.percent}%, #70D3FF ${props => props.percent}%, #70D3FF 100%);
      border-radius: 5px;
`;

const BarTitle = styled.div``;

const BarPercentageContainer = styled.div`
    flex: 1;
`;

const BarPercentage = styled.div``;

const Info = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InfoTitle = styled.p``;

const Button = styled.button`
    padding: 8px;
    background: black;
    color: white;
    cursor: pointer;
    &:hover {
        background: transparent;
        color: black;
    }
    &:disabled {
        cursor: not-allowed;
    }
`;


const ResponseCard = (props) => {

    const [expanded, setExpanded] = useState("");

    const getPercentage = (num) => {
        let total = props.opt1Count + props.opt2Count + props.opt3Count + props.opt4Count;
        if (total === 0) {
            total = 1;
        }
        return (num / total) * 100;
    }

    return (
        <Container>
            <Wrapper>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>{props.ask}</Typography>
                        <Typography sx={{ color: 'text.secondary', marginLeft: "50%" }}>{ props.visibility }</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <InfoContainer>
                            <Bar>
                                <BarTitleContainer percent={100 - getPercentage(props.opt1Count)}>
                                    <BarTitle>{props.opt1}</BarTitle>
                                </BarTitleContainer>
                                <BarPercentageContainer>
                                    <BarPercentage>{getPercentage(props.opt1Count).toFixed(1)}%</BarPercentage>
                                </BarPercentageContainer>
                            </Bar>

                            <Bar>
                                <BarTitleContainer percent={100 - getPercentage(props.opt2Count)}>
                                    <BarTitle>{props.opt2}</BarTitle>
                                </BarTitleContainer>
                                <BarPercentageContainer>
                                    <BarPercentage>{getPercentage(props.opt2Count).toFixed(1)}%</BarPercentage>
                                </BarPercentageContainer>
                            </Bar>
                            {props.opt3 ?
                                <Bar>
                                    <BarTitleContainer percent={100 - getPercentage(props.opt3Count)}>
                                        <BarTitle>{props.opt3}</BarTitle>
                                    </BarTitleContainer>
                                    <BarPercentageContainer>
                                        <BarPercentage>{getPercentage(props.opt3Count).toFixed(1)}%</BarPercentage>
                                    </BarPercentageContainer>
                                </Bar>
                            : null}
                            
                            {props.opt4 ?
                                <Bar>
                                    <BarTitleContainer percent={100 - getPercentage(props.opt4Count)}>
                                        <BarTitle>{props.opt4}</BarTitle>
                                    </BarTitleContainer>
                                    <BarPercentageContainer>
                                        <BarPercentage>{getPercentage(props.opt4Count).toFixed(1)}%</BarPercentage>
                                    </BarPercentageContainer>
                                </Bar>
                            : null}
                           
                            <Info>
                                <InfoTitle>{`Number of Responses : ${props.opt1Count + props.opt2Count + props.opt3Count + props.opt4Count}`}</InfoTitle>
                                <Button onClick={() => props.handleClosePoll(props.createdBy, props.id)} disabled={props.active ? false : true}>Close Poll</Button>
                            </Info>

                        </InfoContainer>
                    </AccordionDetails>
                </Accordion>
            </Wrapper>
        </Container>
    );
}

export default ResponseCard;