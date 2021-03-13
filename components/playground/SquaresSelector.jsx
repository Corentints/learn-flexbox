const SquaresSelector = ({ squareCount, setSquareCount, squareNumber }) => {
  const squares = [];
  for (let index = 1; index <= squareNumber; index += 1) {
    squares.push(<button type="button" className={`flex rounded-md items-center justify-center w-24 h-24 font-bold text-white bg-blue-500 ${squareCount < index ? 'opacity-50' : ''}`} onClick={() => setSquareCount(index)}>{index}</button>);
  }
  return (
    <div className="flex flex-row gap-5">
      {squares}
    </div>
  );
};

export default SquaresSelector;
