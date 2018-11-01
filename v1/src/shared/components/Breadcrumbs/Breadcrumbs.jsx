import React from 'react';
import styled from 'styled-components';
import atob from 'atob';
import {Bar} from 'react-chartjs-2';

import { Variables, Trendline, ObjectUtil } from 'utils';

export default class CelebrityContainer extends React.Component {
  state = this.props.celebrity || {
    name: '',
    movies: []
  };

  chartRef = React.createRef();

  componentDidMount() {
    console.warn();
  }

  componentWillReceiveProps(nextProps) {
    const stateChanged = ObjectUtil.compare(this.state, nextProps.celebrity).changed;
    console.warn(stateChanged, nextProps, this.chartRef)
    // console.warn(parentState, stateChanged);
    if(stateChanged) {
      this.setState({
        ...this.state,
        ...nextProps.celebrity
      });
    }
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

const Name = styled.h1`
  font-size:50px;
  font-weight: bold;
  display: block;
  color: ${Variables.borderGreyInverted};
`;

const ChartWrapper = styled.div`
  display:block;
  width:100%;
  margin-top: ${Variables.basicPadding*3}px;
  border-radius: ${Variables.basicPadding}px;
  border: 1px solid ${Variables.borderGrey};
  display: ${props => props.render ? 'block' : 'none'}
  background-color: white;
`;
