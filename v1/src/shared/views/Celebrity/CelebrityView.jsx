import React from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Consumer } from 'context/Context.jsx';

import { ObjectUtil } from 'utils';

import ViewWrapper from 'components/common/ViewWrapper.jsx';
import CelebrityContainer from 'components/Celebrity/CelebrityContainer.jsx';

class CelebrityView extends React.Component{
  state = this.props.state.celebrities || {
    key: 'celebrities',
    current: '',
    celebrityList: {},
  };

  async componentWillReceiveProps(nextProps){
    const parentState  = await nextProps.getParentState('celebrities');
    const stateChanged = ObjectUtil.compare(this.state, parentState).changed;

    // console.warn(parentState, stateChanged);
    if(stateChanged) {
      this.setState({
        ...this.state,
        ...parentState
      });
    }
  }

  async componentDidMount(){
    const {
      actions,
      stateUpdater
    } = this.props;

    const currentCeleb = this.props.match.params.celebrity;

    if(!Object.keys(this.state.celebrityList).length || this.state.current !== currentCeleb){
      const celebrity = await actions.getCelebInfo(currentCeleb);
      const nextState = {
        ...this.state,
        current: currentCeleb,
        celebrityList: {
          ...this.state.celebrityList,
          [currentCeleb]: celebrity
        }
      };

      this.setState(nextState);

      await stateUpdater('celebrities', nextState);
    }
  }

  render(){
    const {
      current,
      celebrityList
    } = this.state;

    return (
      <ViewWrapper page="celebrity"
        render={true}>
        <Helmet title="" />
        <Link to={`/`}>Homepage</Link>
        <CelebrityContainer celebrity={celebrityList[current]}/>
      </ViewWrapper>
    )
  }
}

export default props => (
  <Consumer>
    {context => {
      return <CelebrityView {...props} {...context} />
    }}
  </Consumer>
)
