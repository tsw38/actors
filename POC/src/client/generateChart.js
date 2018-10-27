export default function({data}){
  const serverData  = data.filter(movie => !(/[a-zA-Z]/g).test(movie.rating));
  const sortedYears = [...new Set(serverData.map(movie => movie.year))].sort();

  var ctx = document.getElementById("rotten-tomatoes").getContext("2d");
  var mixedChart = new Chart(ctx, {
    type: "bar",
    data: {
      datasets: [
        {
            label: 'Trendline',
            data:[{"x":2018,"y":-234.6550475389237},{"x":2018,"y":-203.36756513344875},{"x":2017,"y":-172.08008272797383},{"x":2016,"y":-140.7926003224989},{"x":2016,"y":-109.50511791702397},{"x":2015,"y":-78.21763551154905},{"x":2015,"y":-46.9301531060741},{"x":2015,"y":-15.642670700599155},{"x":2015,"y":15.644811704875764},{"x":2015,"y":46.93229411035068},{"x":2014,"y":78.2197765158256},{"x":2013,"y":109.50725892130058},{"x":2013,"y":140.7947413267755},{"x":2013,"y":172.0822237322504},{"x":2012,"y":203.3697061377254},{"x":2012,"y":234.6571885432003},{"x":2012,"y":265.94467094867525},{"x":2011,"y":297.2321533541502},{"x":2011,"y":328.5196357596251},{"x":2011,"y":359.80711816510006},{"x":2010,"y":391.0946005705749},{"x":2010,"y":422.3820829760499},{"x":2010,"y":453.6695653815249},{"x":2009,"y":484.95704778699974},{"x":2009,"y":516.2445301924747},{"x":2009,"y":547.5320125979497},{"x":2009,"y":578.8194950034245},{"x":2008,"y":610.1069774088995},{"x":2008,"y":641.3944598143745},{"x":2008,"y":672.6819422198494},{"x":2007,"y":703.9694246253243},{"x":2006,"y":735.2569070307992},{"x":2005,"y":766.5443894362742},{"x":2002,"y":797.8318718417491},{"x":2002,"y":829.1193542472241},{"x":2001,"y":860.4068366526989}],
            type: 'line',
            fill: false
          },
        {
          label: "Line Dataset",
          borderWidth: 4,
          data: serverData.map(movie => {
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
    },
    options: {
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
          title: function(tooltipItem, data) {
            return '';
          },
          label: function(tooltipItem) {
            const movie = serverData[tooltipItem.index];

            return movie.title + ' (' + movie.year + ') [' + movie.rating + '%]';
          }
        }
      },
    }
  });
}
