import React from 'react';
import styled from 'styled-components';

import { Variables, ObjectUtil } from 'utils';

import Celebrity from 'components/Homepage/Celebrity.jsx';

export default class StarsContainer extends React.Component {

  shouldComponentUpdate(nextProps){
      const celebritiesUpdated = ObjectUtil.compare(this.props.celebrities, nextProps.celebrities);
      console.warn(celebritiesUpdated);
      if(celebritiesUpdated) {
          return true;
      }
      return false;
  }

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
            {!Object.keys(this.props.celebrities).length ? null : Object.keys(this.props.celebrities).map((celebrity,index) => {
              const celeb = this.props.celebrities[celebrity];
              celeb.name = celebrity;

              return (
                <Celebrity
                  key={`celeb-${index}`}
                  info={celeb}
                />
              )
            })}
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
  padding-bottom: ${Variables.basicPadding*9}px;
  max-width: ${Variables.appWidth}px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 14px;
`;

const List = styled.div`
  width: 100%;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  font-size: 12px;
  color: #a6a8ab;
`;

const Header = styled.div`
  padding: 0 ${Variables.basicPadding}px ${Variables.basicPadding}px;
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 1fr;

  ${Title}:not(:first-of-type) {
    text-align: center;
  }
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
