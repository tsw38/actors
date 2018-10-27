import React from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import { Consumer } from 'context/Context.jsx';

import SearchBar from 'components/Search/Search.jsx';
import ViewWrapper from 'components/common/ViewWrapper.jsx';

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
        <SearchBar />
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
