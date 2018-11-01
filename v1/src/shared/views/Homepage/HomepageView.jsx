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
    this.props.state.homepage : {
      key: 'homepage',
      celebrities: {},
      location: '/'
    };

    async componentWillReceiveProps(nextProps){
      const parentState  = await nextProps.getParentState('homepage');
      const stateChanged = ObjectUtil.compare(this.state, parentState).changed;

      console.warn(this.state, {
        ...this.state,
        ...parentState
      });
      // reinitialize state
      // celebrity > homepage is broken
    }

  async componentDidMount(){
    const {
      actions,
      stateUpdater
    } = this.props;

    // console.warn(this.state);

    if(!ObjectUtil.deepFind(this.state, 'homepage')){
      // console.warn('THERE ISNT A HOMEPAGE OBJECT');

      const celebrities = await actions.getAllCelebrities();

      // console.warn(celebrities);

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
