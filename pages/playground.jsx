import { useState } from 'react';
import FlexProperties from '../components/playground/FlexProperties';
import FlexPlayGround from '../components/playground/FlexPlayGround';
import ExportCSS from '../components/playground/ExportCSS';

import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';

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
    squares.push(<div className="flex items-center justify-center w-24 h-24 m-2 mb-2 font-bold text-white rounded-md bg-gradient-to-r from-blue-500 to-blue-700">{i + 1}</div>);
  }

  return (
    <>
      <Navbar />
      <div className="px-2 mx-auto mt-4 max-w-7xl sm:px-6 lg:px-8">
        <Hero title="Your Flexbox Playground" />
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
          squareCount={squareCount}
          setSquareCount={setSquareCount}
        />
        <FlexPlayGround
          flexProperties={flexProperties}
          squares={squares}
        />
        <div className="flex items-start justify-end py-4">
          <ExportCSS
            flexProperties={flexProperties}
          />
        </div>
      </div>
    </>
  );
};

export default PlayGroundPage;
