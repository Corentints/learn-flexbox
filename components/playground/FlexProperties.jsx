import ButtonsGroup from './PropertyButtonGroup';
import SquaresSelector from './SquaresSelector';

const FlexProperties = ({
  flexDirection, setFlexDirection, flexWrap, setFlexWrap, alignItems, setAlignItems, justifyContent,
  setJustifyContent, alignContent, setAlignContent, squares, setSquares,
}) => (
  <div className="grid justify-between w-full grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-3">
    <ButtonsGroup
      title="flex-direction"
      color="blue"
      propertiesName={['row', 'column']}
      currentProperty={flexDirection}
      setProperty={setFlexDirection}
    />

    <ButtonsGroup
      title="flex-wrap"
      color="green"
      propertiesName={['wrap', 'wrap-reverse', 'nowrap']}
      currentProperty={flexWrap}
      setProperty={setFlexWrap}
    />

    <ButtonsGroup
      title="align-items"
      color="pink"
      propertiesName={['flex-start', 'flex-end', 'center', 'stretch', 'baseline']}
      currentProperty={alignItems}
      setProperty={setAlignItems}
    />

    <ButtonsGroup
      title="justify-content"
      color="indigo"
      propertiesName={['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']}
      currentProperty={justifyContent}
      setProperty={setJustifyContent}
    />

    <ButtonsGroup
      title="align-content"
      color="yellow"
      propertiesName={['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']}
      currentProperty={alignContent}
      setProperty={setAlignContent}
    />

    <SquaresSelector
      squares={squares}
      setSquares={setSquares}
    />
  </div>
);

export default FlexProperties;
