import React from 'react';
import styled from 'styled-components';

import {
  debounce,
  Variables
} from 'utils';

export default class SearchBar extends React.Component {
  state = {
    query: ''
  }

  componentWillMount(){
  }

  handleSubmit = async () => {
    const response = await Variables.axios(
      `${Variables.origin}/search?celebrity=${encodeURIComponent(this.state.query)}`
    );
    // reroute if there is a response
    console.warn(response);
  }


  render(){
    return(
      <SearchBarWrapper>
        <SearchBarContainer>
          <Search
            onChange={(ev) => this.setState({query: ev.target.value})}/>
          <SubmitWrapper>
            <Submit
              onClick={this.handleSubmit}
            />
          </SubmitWrapper>
        </SearchBarContainer>
      </SearchBarWrapper>
    )
  }
}


const SearchBarWrapper = styled.div`
  width: 100vw;
  max-height: 75px;
  height:70px;
  position: relative;
  background-color:white;
  border-bottom: 1px solid ${Variables.borderGrey}
`;

const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height:100%;
  max-width: calc(${Variables.appWidth}px - ${Variables.basicPadding*2}px);
  padding: 0 ${Variables.basicPadding}px;
`;


const Search = styled.input.attrs({
  type: "text",
  placeholder: "Search..."
})`
  border: none;
  outline: none;
  height: 96%;
  display: block;
  font-size: 40px;
  width: 100%;
  margin: 0 auto;
  color: ${Variables.borderGreyInverted};

  ::placeholder {
    color: rgba(214,214,214,1);
    font-style: italic;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: rgba(214,214,214,1);
    font-style: italic;
  }

  ::-ms-input-placeholder {
    color: rgba(214,214,214,1);
    font-style: italic;
  }
`;

const SubmitWrapper = styled.div`
  height: inherit;
  width: 70px;
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
  cursor: pointer;
`;

const Submit = styled.div`
  background: url(${Variables.origin}/images/ico_search.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 35px;
  padding-top: 0;
  transition: opacity 250ms ease;
  opacity: 0.15;

  &:hover {
    opacity: 0.65;
  }
`;
