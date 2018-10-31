import React from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import { Consumer } from 'context/Context.jsx';

import { ObjectUtil } from 'utils';

import ViewWrapper from 'components/common/ViewWrapper.jsx';
import CelebrityContainer from 'components/Celebrity/CelebrityContainer.jsx';

class CelebrityView extends React.Component{
  state = this.props.state.celebrityList || {};

  async componentWillReceiveProps(nextProps){
    const parentState  = await nextProps.getParentState('celebrityList');
    const stateChanged = ObjectUtil.compare(this.state, parentState).changed;

    console.warn(parentState, stateChanged);
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

    console.warn(this.props.state);

    // const {CelebrityActions} = actions;

    // if(this.state.celebrityList.length === 0){
    //
    //   const celebrities = await HomepageActions.celebrities.getCelebrities();
    //
    //   this.setState({
    //     ...this.state,
    //     celebrities
    //   })
    //
    //   await stateUpdater('celebrityList', {
    //     ...this.state,
    //     celebrities
    //   });
    // }
  }

  render(){
    const {
      celebrities
    } = this.state;

    // console.warn(celebrities);

    return (
      <ViewWrapper page="celebrity"
        render={true}>
        <Helmet title="Chicago Wedding & Portrait Photographer" />
        <CelebrityContainer celebrity={{
          // name: celebrities.current,
          // movies: celebrities[celebrities.current].movies
        }}/>
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
