import React from 'react';
import styled from 'styled-components';

import { Variables } from 'utils';

export default class StarsContainer extends React.Component {

  render(){
    return(
      <StarsContainerWrapper>
        <List>
          <Header>
            <Title>Name</Title>
            <Title>Movies</Title>
            <Title>Avg. Score</Title>
            <Title>Trending</Title>
          </Header>
          <Content>
          </Content>
        </List>
        <SidebarOuter>
          <Header>
            <Title>Featured Celebrities</Title>
          </Header>
          <Sidebar></Sidebar>
        </SidebarOuter>
      </StarsContainerWrapper>
    )
  }
}


const StarsContainerWrapper = styled.div`
  width: 100%;
  margin: ${Variables.basicPadding*9}px auto 0;
  height:100vh;
  max-width: ${Variables.appWidth}px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 14px;
`;

const List = styled.div`
  width: 100%;
  height:900px;
`;

const Header = styled.div`
  padding: 0 ${Variables.basicPadding}px ${Variables.basicPadding}px;
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 1fr;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  font-size: 12px;
  color: #a6a8ab;
`;

const SidebarOuter = styled.div`
  width: 100%;
  height:300px;

  ${Header} {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  width: inherit;
  height: 500px;
  background-color: white;
  border-radius: ${Variables.basicPadding}px;
  border: 1px solid ${Variables.borderGrey};
`;



const Content = styled.div``;
