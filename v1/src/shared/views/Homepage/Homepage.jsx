import React from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';
import classNames from 'classnames';

import {
  ViewWrapper
} from '../index';

import {
  Consumer
} from '../../context/Context.jsx';

import { ObjectUtil } from '../../utils';

class Homepage extends React.Component{
  async componentWillReceiveProps(nextProps){
  }


  async componentDidMount(){
  }

  async componentWillUnmount(){
  }

  render(){
    return (
      <ViewWrapper page="homepage"
        render={true}>
        <Helmet title="Chicago Wedding & Portrait Photographer" />
      </ViewWrapper>
    )
  }
}

export default props => (
  <Consumer>
    {context => {
      return <Homepage {...props} {...context} />
    }}
  </Consumer>
)
