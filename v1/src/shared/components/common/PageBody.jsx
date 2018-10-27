import React from 'react';

import styled from 'styled-components';

import {Variables} from 'utils';

export default class PageBody extends React.Component {
  render(){
    return (
      <React.Fragment>
        <PageBodyWrapper>{this.props.children}</PageBodyWrapper>
      </React.Fragment>
    )
  }
}

const PageBodyWrapper = styled.div`
  width: 100vw;
  max-width: calc(${Variables.appWidth}px - ${Variables.basicPadding*2}px);
`;
