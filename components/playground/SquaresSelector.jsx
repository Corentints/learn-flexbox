const SquaresSelector = ({ squareCount, setSquareCount, squareNumber }) => {
  const squares = [];
  for (let index = 1; index <= squareNumber; index += 1) {
    squares.push(<button type="button" className={`flex rounded-md items-center justify-center w-full h-12 sm:h-full font-bold text-white bg-gradient-to-r from-blue-500 to-blue-700 ${squareCount < index ? 'opacity-40' : ''}`} onClick={() => setSquareCount(index)}>{index}</button>);
  }
  return (
    <div className="flex flex-row gap-5">
      {squares}
    </div>
  );
};

export default SquaresSelector;
