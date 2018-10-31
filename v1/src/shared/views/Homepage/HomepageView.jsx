import React from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import { Consumer } from 'context/Context.jsx';

import { ObjectUtil } from 'utils';

import SearchBar from 'components/Search/Search.jsx';
import StarsContainer from 'components/Homepage/StarsContainer.jsx';
import ViewWrapper from 'components/common/ViewWrapper.jsx';

class Homepage extends React.Component{
  state = this.props.state.homepage ?
    this.props.state.homepage :
    this.props.actions.HomepageActions.stateManager.initState();

  async componentWillReceiveProps(nextProps){
    const parentState  = await nextProps.getParentState('homepage');
    const stateChanged = ObjectUtil.compare(this.state, parentState).changed;
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

    const {HomepageActions} = actions;

    if(this.state.celebrities.length === 0){

      const celebrities = await HomepageActions.celebrities.getCelebrities();

      this.setState({
        ...this.state,
        celebrities
      })

      await stateUpdater('homepage', {
        ...this.state,
        celebrities
      });
    }
  }

  render(){
    return (
      <ViewWrapper page="homepage"
        render={true}>
        <Helmet title="Chicago Wedding & Portrait Photographer" />
        <SearchBar />
        <StarsContainer celebrities={this.state.celebrities}/>
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
