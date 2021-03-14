/* eslint-disable no-param-reassign */
const SquaresSelector = ({ squares, setSquares }) => {
  const handleToggleSquares = (squareIndex) => {
    squares.forEach((square, i) => {
      if (squareIndex < i) {
        square.visible = false;
      } else {
        square.visible = true;
      }
    });
    setSquares([...squares]);
  };

  let squaresVisibleCount = 0;
  squares.forEach((square) => {
    if (square.visible) squaresVisibleCount += 1;
  });

  return (
    <div className="flex flex-row gap-5">
      {squares.map((square, index) => (
        <button
          type="button"
          className={`flex rounded-md items-center justify-center w-full h-12 sm:h-full font-bold text-white bg-gradient-to-r from-blue-500 to-blue-700 ${index >= squaresVisibleCount ? 'opacity-40' : ''}`}
          onClick={() => handleToggleSquares(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default SquaresSelector;
