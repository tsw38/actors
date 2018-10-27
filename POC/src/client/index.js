import trendLine from './calculateTrendLine.js';
import generateChart from './generateChart.js';

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
      ${celebrity.length ? (`<a href="/">&lt; Return</a><br /><canvas id="rotten-tomatoes"></canvas>`) : (
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
    		src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js"></script>
      <script>
    		$(() => {
          if(!window.STATE) return;

          $('form').on('submit', e => {
            $('body').append('<div class="loading" style="text-align:center; font-size:50px">Loading</div>');
          })

          if(STATE.status === 200){
            // var serverData    = ;
            // const sortedYears = [...new Set(serverData.map(movie => movie.year))].sort()
            ${generateChart({
              data: fromServer.data.filter(movie => !(/[a-zA-Z]/g).test(movie.rating))
            })}
          }
          else if(STATE.status === 404){
            $('body').append(STATE.data);
          }
    		})
    	</script>
    </html>
    `);
}
