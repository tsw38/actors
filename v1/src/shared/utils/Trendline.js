export default function (coordinateArr, options = {}){
  const meanOfX = coordinateArr.reduce((sum, coordinate) => {
    return sum += coordinate.x;
  }, 0)/coordinateArr.length;

  const meanOfY = coordinateArr.reduce((sum, coordinate) => {
    return sum += coordinate.y;
  }, 0)/coordinateArr.length;

  const XiMeanOfX = coordinateArr.map(coordinate => coordinate.x-=meanOfX);

  const YiMeanOfY = coordinateArr.map(coordinate => coordinate.y-=meanOfY);

  const XiYiProduct = XiMeanOfX.map((val, index) => val *= YiMeanOfY[index]);

  const XiMeanOfXSquared = XiMeanOfX.map(val => Math.pow(val,2));

  const XiYiProductSum = XiYiProduct.reduce((sum, val) => sum+=val, 0);

  const XiMeanOfXSquaredSum = XiMeanOfXSquared.reduce((sum, val) => sum+=val, 0);

  const slope = XiYiProductSum/XiMeanOfXSquaredSum;

  if (options.onlySlope) {
    return slope;
  }

  const yIntercept = meanOfY - (slope*meanOfX);

	return Array(coordinateArr.length).fill().map((elem, index) => {
		return {
			x: index,
			y: (slope * index) + yIntercept
		}
	});
}
