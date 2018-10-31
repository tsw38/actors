import React from 'react';
import styled, {css} from 'styled-components';

import { Variables, DateHelper, Trendline } from 'utils';

export default class Celebrity extends React.Component {

  render(){
    const {
      name,
      lastUpdated,
      movies,
      ratings
    } = this.props.info;

    const avgScore = ratings.reduce((sum, rating) => sum+=rating, 0);

    const trending = Trendline(ratings.map((rating, index) => {
      return {
        x: index,
        y: rating
      };
    }), {onlySlope: true});

    return(
      <CelebrityWrapper>
        <Label className="label--name">
          <Row>{name}</Row>
          <Row className="bold">Updated on {DateHelper.datetimeToReadable(lastUpdated)}</Row>
        </Label>
        <Label className="label--movie">{movies.length}</Label>
        <Label className="label--score">{Math.floor(avgScore/ratings.length)}%</Label>
        <Label className="label--trending">
          <StyledSVG height="24" width="24" viewBox="0 0 24 24"
            trend={trending}>
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
          </StyledSVG>
        </Label>
      </CelebrityWrapper>
    )
  }
}


const CelebrityWrapper = styled.div`
  width: calc(100% - ${Variables.basicPadding*2}px);
  max-height:50px;
  height: calc(50px - ${Variables.basicPadding*2}px);
  background-color: white;
  border-radius: ${Variables.basicPadding}px;
  border: 1px solid ${Variables.borderGrey};
  padding: ${Variables.basicPadding}px;
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 1fr;

  &:not(:last-of-type) {
    margin-bottom: ${Variables.basicPadding}px;
  }
`;

const Row = styled.div`
  display: block;
  width: 100%;
`;

const Label = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;

  &:not(:first-of-type) {
    justify-content:center;
  }

  &.label {
    &--name {
      flex-direction:column;
      color: ${Variables.accentRed};
    }

    &--movie, &--score, &--trending {
      color: rgba(104,104,104,1);
      text-align: center;
    }
  }

  ${Row}:first-of-type {
    margin-bottom: ${Variables.basicPadding}px;
  }

  ${Row}:last-of-type {
    font-size: 12px;
    color: ${Variables.borderGrey};
  }
`;

const StyledSVG = styled.svg`
  fill: ${Variables.accentRed};
  width:20px;

  ${props => (props.trend >= 0) && css`
    fill: ${Variables.accentGreen};
    transform: rotate(180deg);
  `}
`;
