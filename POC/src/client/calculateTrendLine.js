// let yearsToY = [...new Set(STATE.data.map(movie => movie.year))];
// const maxYear = Math.max.apply(Math, yearsToY);
// const minYear = Math.min.apply(Math, yearsToY);
//
// yearsToY = Array(maxYear - minYear + 1).fill().map((elem, index) => String(minYear + index))
//
// const dataPoints = STATE.data.map(movie => {
// 	return {
// 		x: yearsToY.indexOf(String(movie.year)) + 1,
// 		y: movie.rating
// 	};
// });

export default function(coordinateArray, options = {}){
	const a = coordinateArray.length * coordinateArray.reduce((multiple, coordinate) => {
	  multiple += coordinate.x*coordinate.y;
	  return multiple;
	}, 0);

	const b = coordinateArray.reduce((sums, coordinate) => {
	  sums[0] += coordinate.x;
	  sums[1] += coordinate.y;
	  return sums;
		}, [0,0]).reduce((finalSum, elem) => {
	  finalSum *= elem;
	  return finalSum;
	}, 1);

	const c = coordinateArray.length * coordinateArray.reduce((sumSquared, coordinate) => {
	  sumSquared += Math.pow(coordinate.x, 2);
	  return sumSquared;
	}, 0);

	const d = Math.pow(coordinateArray.reduce((sum, coordinate) => {
	  sum += coordinate.x;
	  return sum;
	}, 0), 2);

	const m = (a-b)/(c-d);

	if (options.onlySlope) {
		return m;
	}

	const e = coordinateArray.reduce((sum, coordinate) => {
	  sum += coordinate.y;
	  return sum;
	}, 0);

	const f = m * coordinateArray.reduce((xSum, coordinate) => {
	  xSum += coordinate.x;
	  return xSum;
	},0);

	const intercept = Math.floor(((e-f)/coordinateArray.length)*100)/100;

	return Array(coordinateArray.length).fill().map((elem, index) => {
		return {
			x: index,
			y: (m * index) + intercept
		}
	});
}
