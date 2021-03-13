import ButtonsGroup from './PropertyButtonGroup';

const FlexProperties = ({
  flexDirection, setFlexDirection, flexWrap, setFlexWrap, alignItems, setAlignItems, justifyContent,
  setJustifyContent, alignContent, setAlignContent,
}) => (
  <div className="grid justify-between w-full grid-cols-3 gap-4 mb-4">
    <ButtonsGroup
      title="flex-direction"
      color="pink"
      propertiesName={['column', 'row']}
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
      color="blue"
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
  </div>
);

export default FlexProperties;
