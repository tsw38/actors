import React from 'react';
import styled from 'styled-components';
import atob from 'atob';
import {Bar} from 'react-chartjs-2';

import { Variables, Trendline, ObjectUtil } from 'utils';

export default class Breadcrumbs extends React.Component {

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render(){
    return(
      <BreadcrumbsWrapper>
      // for each route, define the route and display it as > Route from root (Home)
      // ex: Home > Bradley Cooper
      </BreakcrumbsWrapper>
    )
  }
}


const BreadcrumbsWrapper = styled.div`
`;
