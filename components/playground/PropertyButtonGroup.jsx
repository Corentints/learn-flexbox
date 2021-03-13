import { useState } from 'react';
import Button from './PropertyButton';

const ButtonsGroup = ({
  title, color, propertiesName, currentProperty, setProperty,
}) => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="relative flex flex-col rounded-md">
      <button type="button" onClick={() => setOpened(!opened)} className={`flex items-center justify-between ${currentProperty === 'unset' ? 'opacity-60' : ''}  bg-${color}-600 text-white text-sm font-medium rounded-t-md ${opened ? 'rounded-b-none' : 'rounded-b-md'} p-2`}>
        <code>
          {title}
          {currentProperty !== 'unset' ? ':' : ''}
          {' '}
          {currentProperty !== 'unset' ? `${currentProperty};` : ''}
        </code>
        <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <div className={`${opened ? 'flex' : 'hidden'} origin-top-right absolute right-0 mt-9 z-50 shadow-md w-full flex-col items-center justify-between p-2 truncate bg-white border-b border-l border-r border-gray-200 rounded-b-md`}>
        <Button
          setOpened={setOpened}
          color={color}
          propertyName="unset"
          currentProperty={currentProperty}
          setProperty={setProperty}
        />
        {propertiesName.map((propertyName) => (
          <Button
            setOpened={setOpened}
            color={color}
            propertyName={propertyName}
            currentProperty={currentProperty}
            setProperty={setProperty}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonsGroup;
