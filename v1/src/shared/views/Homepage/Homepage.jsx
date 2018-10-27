import React from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import { Consumer } from 'context/Context.jsx';

import SearchBar from 'components/Search/Search.jsx';
import StarsContainer from 'components/Stars/StarsContainer.jsx';
import ViewWrapper from 'components/common/ViewWrapper.jsx';

class Homepage extends React.Component{
  render(){
    return (
      <ViewWrapper page="homepage"
        render={true}>
        <Helmet title="Chicago Wedding & Portrait Photographer" />
        <SearchBar />
        <StarsContainer />
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
