import React, {useState} from 'react'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled.div`
    text-align: center;
    padding: 10px;
    display: ${props => props.isClosed ? "none" : "block"};
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.p`
    flex: 2;
`;

const Button = styled.span`
    display: absolute;
`;

const Announcement = () => {

  const [isClosed, setClose] = useState(false)

  return (
      <Container isClosed={isClosed}>
        <Wrapper>
            <Text>Voting Made Easy. Register Now</Text>
            <Button onClick={() => setClose(true)}>
              <CloseIcon />
            </Button>
        </Wrapper>
    </Container>
  )
}

export default Announcement;
