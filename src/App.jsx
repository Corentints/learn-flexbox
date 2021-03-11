import { useState } from 'react';
import ButtonsGroup from './components/ButtonsGroup';

function App() {
  const [squareCount, setSquareCount] = useState(2);
  const [squareHeight, setSquareHeight] = useState(24);
  const [squareWidth, setSquareWidth] = useState(24);
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('flex-start');

  const squares = [];

  for (let i = 0; i < squareCount; i += 1) {
    squares.push(<div className={`flex items-center justify-center w-${squareWidth} h-${squareHeight} m-2 mb-2 font-bold text-white bg-indigo-400`}>{i + 1}</div>);
  }

  return (
    <div className="w-full h-screen px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between w-full mt-3">
        <ButtonsGroup
          title="flex-direction"
          color="pink"
          propertiesName={['column', 'row']}
          propertiesClassName={['flex-col', 'flex-row']}
          currentProperty={flexDirection}
          setProperty={setFlexDirection}
        />

        <ButtonsGroup
          title="justify-content"
          color="indigo"
          propertiesName={['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']}
          propertiesClassName={['justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly']}
          currentProperty={justifyContent}
          setProperty={setJustifyContent}
        />

        <ButtonsGroup
          title="align-items"
          color="blue"
          propertiesName={['flex-start', 'flex-end', 'center', 'stretch', 'baseline']}
          propertiesClassName={['items-start', 'items-end', 'items-center', 'items-stretch', 'items-baseline']}
          currentProperty={alignItems}
          setProperty={setAlignItems}
        />
      </div>
      <div className="flex w-full mt-8 space-x-6 h-3/4">
        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            <button type="button" onClick={() => (squareHeight > 24 ? setSquareHeight(squareHeight - 4) : setSquareHeight(24))}>-</button>
            <p>Height</p>
            <button type="button" onClick={() => (squareHeight < 64 ? setSquareHeight(squareHeight + 4) : setSquareHeight(64))}>+</button>
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={() => (squareWidth > 24 ? setSquareWidth(squareWidth - 4) : setSquareWidth(24))}>-</button>
            <p>Width</p>
            <button type="button" onClick={() => (squareWidth < 64 ? setSquareWidth(squareWidth + 4) : setSquareWidth(64))}>+</button>
          </div>

          <button type="button" className="w-24 h-24 mb-2 font-bold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" onClick={() => setSquareCount(1)}>1</button>
          <button type="button" className="w-24 h-24 mb-2 font-bold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" onClick={() => setSquareCount(2)}>2</button>
          <button type="button" className="w-24 h-24 mb-2 font-bold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" onClick={() => setSquareCount(3)}>3</button>
          <button type="button" className="w-24 h-24 mb-2 font-bold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" onClick={() => setSquareCount(4)}>4</button>
        </div>
        <div className={`flex bg-red-100 border-2 w-full border-red-300 p-4 ${flexDirection} ${justifyContent} ${alignItems}`}>
          {squares}
        </div>
      </div>
    </div>
  );
}

export default App;
