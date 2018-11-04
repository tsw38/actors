import React from 'react';

import styled from 'styled-components';

export default class ViewWrapper extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Page>
          <PageContainer
            className={this.props.page || ''}>
            {this.props.children}
          </PageContainer>
        </Page>
      </React.Fragment>
    )
  }
}

const Page = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const PageContainer = styled.div`
  height: inherit;
  width: inherit;
  position:relative;
`;
