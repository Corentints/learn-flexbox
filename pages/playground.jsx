import { useState } from 'react';
import FlexProperties from '../components/playground/FlexProperties';
import FlexPlayGround from '../components/playground/FlexPlayGround';
import SquaresSelector from '../components/playground/SquaresSelector';
import ExportCSS from '../components/playground/ExportCSS';

const PlayGroundPage = () => {
  const [squareCount, setSquareCount] = useState(2);

  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('flex-start');
  const [flexWrap, setFlexWrap] = useState('wrap');
  const [alignContent, setAlignContent] = useState('flex-start');

  const flexProperties = {
    flexDirection, justifyContent, alignItems, flexWrap, alignContent,
  };

  const squares = [];

  for (let i = 0; i < squareCount; i += 1) {
    squares.push(<div className="flex items-center justify-center w-24 h-24 m-2 mb-2 font-bold text-white bg-blue-500 rounded-md">{i + 1}</div>);
  }

  return (
    <div className="w-full max-w-6xl px-4 py-4 mx-auto h-max-screen sm:px-6 lg:px-8">
      <FlexProperties
        flexDirection={flexDirection}
        setFlexDirection={setFlexDirection}
        justifyContent={justifyContent}
        setJustifyContent={setJustifyContent}
        alignItems={alignItems}
        setAlignItems={setAlignItems}
        flexWrap={flexWrap}
        setFlexWrap={setFlexWrap}
        alignContent={alignContent}
        setAlignContent={setAlignContent}
      />
      <FlexPlayGround
        flexProperties={flexProperties}
        squares={squares}
      />
      <div className="flex items-start justify-between py-4">
        <SquaresSelector
          squareCount={squareCount}
          setSquareCount={setSquareCount}
          squareNumber="5"
        />
        <ExportCSS
          flexProperties={flexProperties}
        />
      </div>
    </div>
  );
};

export default PlayGroundPage;
