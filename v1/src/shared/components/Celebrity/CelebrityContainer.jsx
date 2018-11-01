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
    const {
      name,
      movies
    } = this.state;

    const sortedYears = [...new Set(movies.map(movie => movie.year))].sort();
    //
    const ratingsPerYear = movies.reduce((years, movie) => {
      let thisYear = years[movie.year] || {};
      thisYear = {
        ...thisYear,
        ratings: [
          ...(thisYear.ratings ? [...thisYear.ratings, movie.rating] : [movie.rating])
        ]
      }
      years[movie.year] = thisYear;

      return years;
    }, {});

    const avgRatingPerYear = Object.keys(ratingsPerYear).map((year, index) => {
      // console.log(ratingsPerYear[year]);
      return {
        year,
        rating: ratingsPerYear[year].ratings.reduce((avg, rating) => avg += rating, 0)/ratingsPerYear[year].ratings.length
      };
    });

    // console.warn(avgRatingPerYear);

    let trendline = Trendline(avgRatingPerYear.map(({rating}, index) => {
      return {
        x: index,
        y: rating
      };
    })).map((coordinate, index) => {
      return {
        x: sortedYears[coordinate.x],
        y: coordinate.y
      }
    });

    return(
      <CelebrityContainerWrapper>
        <Name>{atob(name)}</Name>
        <ChartWrapper
          render={ObjectUtil.deepFind(this.chartRef, 'current.chartInstance')}>
          <Bar
            ref={this.chartRef}
            data={{
              datasets: [
                {
                  label: 'Trendline',
                  data: trendline,
                  type: 'line',
                  fill: false,
                  pointRadius: 0,
                  backgroundColor: "rgba(255,99,132,1)",
                  borderColor: 'rgba(255,99,132,1)'
                },
                {
                  label: "Line Dataset",
                  borderWidth: 4,
                  data: movies.map(movie => {
                    // console.warn(movie);
                    return {
                      x: movie.year,
                      y: movie.rating,
                      labelString: movie.title
                    }
                  }),
                  showLine: false,
                  // Changes this dataset to become a line
                  type: "line",
                  backgroundColor: "rgb(54, 162, 235)",
                  borderColor: "rgb(54, 162, 235)"
                }
              ],
              labels: sortedYears
            }}
            options={{
              responsive: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      max: 100,
                      min: 0
                    }
                  }
                ]
              },
              tooltips: {
                mode: 'index',
                callbacks: {
                  title: (tooltipItem, data) => {
                    return '';
                  },
                  label: tooltipItem => {
                    // do not do tooltips for the trendline
                    if(tooltipItem.datasetIndex === 1) {
                      const movie = movies[tooltipItem.index];

                      return movie.title + ' (' + movie.year + ') [' + movie.rating + '%]';
                    }
                  }
                }
              },
            }}
          />
        </ChartWrapper>
      </CelebrityContainerWrapper>
    )
  }
}




const CelebrityContainerWrapper = styled.div`
  width: 100%;
  margin: ${Variables.basicPadding*9}px auto 0;
  padding-bottom: ${Variables.basicPadding*9}px;
  max-width: ${Variables.appWidth}px;
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
