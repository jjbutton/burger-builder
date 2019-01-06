import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { CLIENT_RENEG_WINDOW } from 'tls';

interface TAProps {
  grow?: number;
}

const Body = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 2rem;
  background-color: #af2;
`;

const H1 = styled.h1`
  color: #555;
  border: 5px dotted red;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Textarea = styled.textarea`
  background-color: salmon;
  resize: none;
  width: 10vw;
  /* flex-grow: ${(props: TAProps) => props.grow}; */
`;

const GrowTextarea = styled(Textarea)`
  flex-grow: 1;
`;

const Button = styled.button`
  padding: 12px 48px;
  color: white;
  background-color: royalblue;
  border-radius: 4px;
  border: none;
  transition: 200ms all;
  :hover {
    background-color: crimson;
  }
`;

export default () => (
  <Body>
    <H1>JB</H1>
    Hello
    <Flex>
      <GrowTextarea>jeff is</GrowTextarea>
      <Textarea>a guy</Textarea>
      <Textarea>more tests</Textarea>
      <Textarea>and again</Textarea>
    </Flex>
    <Button>Sign up </Button>
    <Button>Learn More</Button>
  </Body>
);
