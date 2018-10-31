import React from 'react';
import styled from 'styled-components';
import atob from 'atob';
import {Bar} from 'react-chartjs-2';

import { Consumer } from 'context/Context.jsx';

import { Variables, Trendline, ObjectUtil } from 'utils';

class CelebrityContainer extends React.Component {
  state = this.props.celebrity

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

  async componentDidMount() {
    const {
      actions,
      stateUpdater
    } = this.props;
    const {CelebrityActions} = actions;

    // console.warn(this.props);

    if(!Object.keys(this.state).length){
      // console.warn(this.props);
      // const celebrityInfo = await CelebrityActions.getInfo(this.state.celebrity.current);

      // this.setState({
      //   ...this.state,
      //   celebrityInfo
      // })
      //
      // await stateUpdater('celebrities', {
      //   ...this.state,
      //   celebrityInfo
      // });
    }
    //
    // await GlobalActions.page.render(this.props, 'archive');
  }

  async componentWillUnmount() {
    // const {
    //   stateUpdater,
    //   actions
    // } = this.props;
    //
    // await stateUpdater('gallery', {
    //   ...this.state,
    //   albumName: '',
    //   render: false,
    //   activeLightbox: false,
    //   activeIndex: -1
    // });
    //
    // await actions.GlobalActions.page.hide(this.props, 'gallery');
  }

  render(){
    // const {
    //   name,
    //   movies
    // } = this.state;
    //
    // // console.warn(this.state);
    //
    // const sortedYears = [...new Set(movies.map(movie => movie.year))].sort();
    //
    // const ratingsPerYear = movies.reduce((years, movie) => {
    //   let thisYear = years[movie.year] || {};
    //   thisYear = {
    //     ...thisYear,
    //     ratings: [
    //       ...(thisYear.ratings ? [...thisYear.ratings, movie.rating] : [movie.rating])
    //     ]
    //   }
    //   years[movie.year] = thisYear;
    //
    //   return years;
    // }, {});
    //
    // const avgRatingPerYear = Object.keys(ratingsPerYear).map((year, index) => {
    //   // console.log(ratingsPerYear[year]);
    //   return {
    //     year,
    //     rating: ratingsPerYear[year].ratings.reduce((avg, rating) => avg += rating, 0)/ratingsPerYear[year].ratings.length
    //   };
    // });
    //
    // // console.warn(avgRatingPerYear);
    //
    // let trendline = Trendline(avgRatingPerYear.map(({rating}, index) => {
    //   return {
    //     x: index,
    //     y: rating
    //   };
    // })).map((coordinate, index) => {
    //   return {
    //     x: sortedYears[coordinate.x],
    //     y: coordinate.y
    //   }
    // });

    return(
      <CelebrityContainerWrapper>
        <Name>{atob(name)}</Name>
        <ChartWrapper>

        </ChartWrapper>
      </CelebrityContainerWrapper>
    )
  }
}

// <Bar
//   data={{
//     datasets: [
//       {
//         label: 'Trendline',
//         data: trendline,
//         type: 'line',
//         fill: false,
//         pointRadius: 0,
//         backgroundColor: "rgba(255,99,132,1)",
//         borderColor: 'rgba(255,99,132,1)'
//       },
//       {
//         label: "Line Dataset",
//         borderWidth: 4,
//         data: movies.map(movie => {
//           // console.warn(movie);
//           return {
//             x: movie.year,
//             y: movie.rating,
//             labelString: movie.title
//           }
//         }),
//         showLine: false,
//         // Changes this dataset to become a line
//         type: "line",
//         backgroundColor: "rgb(54, 162, 235)",
//         borderColor: "rgb(54, 162, 235)"
//       }
//     ],
//     labels: sortedYears
//   }}
//   options={{
//     responsive: true,
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             max: 100,
//             min: 0
//           }
//         }
//       ]
//     },
//     tooltips: {
//       mode: 'index',
//       callbacks: {
//         title: function(tooltipItem, data) {
//           return '';
//         },
//         label: function(tooltipItem) {
//           const movie = movies[tooltipItem.index];
//
//           return movie.title + ' (' + movie.year + ') [' + movie.rating + '%]';
//         }
//       }
//     },
//   }}
// />

export default props => (
  <Consumer>
    {context => {
      return <CelebrityContainer {...props} {...context} />
    }}
  </Consumer>
)



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
  background-color: white;
`;
