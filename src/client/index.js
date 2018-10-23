export default (req,res,next) => ({celebrity = '', fromServer={}} = {}) => {
  celebrity = celebrity.trim().split(' ')
    .map(name => name.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''))
    .map(name => name.charAt(0).toUpperCase() + name.substr(1, name.length))
    .join(' ');
  fromServer.celebrity = celebrity;

  res.send(`
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="UTF-8">
    		<title>${celebrity ? celebrity + ' ' : ''}Rating Over Time</title>
        <script>window.STATE = ${JSON.stringify(fromServer)};</script>
    	</head>
    	<body>
      ${celebrity.length ? (`<a href="/">&lt; Return</a><div id="chart-container"></div>`) : (
        `<form method="GET" action="/search">
    			Celebrity or Director:<br>
    			<input type="text" name="celebrity"><br>
    			<input type="submit" value="Submit">
    		</form>`
      )}
    	</body>
    	<script
    		src="https://code.jquery.com/jquery-2.2.4.min.js"
    		integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
    		crossorigin="anonymous"></script>
    	<script
    		type="text/javascript"
    		src="https://www.gstatic.com/charts/loader.js"></script>
      <script>
    		$(() => {
          if(!window.STATE) return;

          $('form').on('submit', e => {
            $('body').append('<div class="loading" style="text-align:center; font-size:50px">Loading</div>');
          })

          if(STATE.status === 200){
            var serverData = STATE.data
              .filter(movie => !(/[a-zA-Z]/g).test(movie.rating))
              .map(movie => [movie.year, Number(movie.rating), movie.title + ' (' + movie.year + ') ' + '['+ movie.rating +'%]']);

            // Load the Visualization API and the corechart package.
            google.charts.load('current', {'packages':['corechart']});

            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(drawChart);

            // Callback that creates and populates a data table,
            // instantiates the pie chart, passes in the data and
            // draws it.
            function drawChart() {
              // Create the data table.
              var data = new google.visualization.arrayToDataTable([['Year', 'Rating', {type: 'string', role: 'tooltip'}], ...serverData]);

              // Set chart options
              var options = {
                title: STATE.celebrity + ' RT Over Time',
                hAxis: {title: 'Year', format: '0000'},
                vAxis: {title: 'Rating', minValue: 0, maxValue: 100},
                width: 1000,
                height: 500,
                legend: 'none',
                trendlines: { 0: {} }    // Draw a trendline for data series 0.
              };

              // Instantiate and draw our chart, passing in some options.
              var chart = new google.visualization.ScatterChart(document.getElementById('chart-container'));
              chart.draw(data, options);
            }
          }
          else if(STATE.status === 404){
            $('body').append(STATE.data);
          }
    		})
    	</script>
    </html>
    `);
}
