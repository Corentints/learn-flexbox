import { useState } from 'react';
import FlexProperties from '../components/playground/FlexProperties';
import FlexPlayGround from '../components/playground/FlexPlayGround';
import ExportCSS from '../components/playground/ExportCSS';

import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';

const PlayGroundPage = () => {
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('flex-start');
  const [flexWrap, setFlexWrap] = useState('wrap');
  const [alignContent, setAlignContent] = useState('flex-start');

  const flexProperties = {
    flexDirection, justifyContent, alignItems, flexWrap, alignContent,
  };

  const squaresConfig = [];
  for (let i = 0; i < 5; i += 1) {
    squaresConfig.push({
      width: 24,
      height: 24,
      order: null,
      visible: true,
    });
  }

  const [squares, setSquares] = useState(squaresConfig);

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
          squares={squares}
          setSquares={setSquares}
        />
        <FlexPlayGround
          flexProperties={flexProperties}
          squares={squares}
          setSquares={setSquares}
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
