import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Button from './PropertyButton';

const ButtonsGroup = ({
  title, color, propertiesName, currentProperty, setProperty,
}) => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="relative flex flex-col rounded-md">
      <Menu>
        {({ open }) => (
          <>
            <span className="rounded-md shadow-sm">
              <Menu.Button className={`w-full flex items-center justify-between ${currentProperty === 'unset' ? 'opacity-60' : ''}  bg-${color}-600 text-white text-sm font-medium rounded-t-md ${opened ? 'rounded-b-none' : 'rounded-b-md'} p-2`}>
                <code>
                  {title}
                  {currentProperty !== 'unset' ? ':' : ''}
                  {' '}
                  {currentProperty !== 'unset' ? `${currentProperty};` : ''}
                </code>
                <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Menu.Button>
            </span>

            <Transition
              show={open}
              enter="z-50 transition ease-out duration-100"
              enterFrom="z-50 transform opacity-0 scale-95"
              enterTo="z-50 transform opacity-100 scale-100"
              leave="z-50 transition ease-in duration-75"
              leaveFrom="z-50 transform opacity-100 scale-100"
              leaveTo="z-50 transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 z-50 w-56 w-full mt-1 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              >
                {propertiesName.map((propertyName) => (
                  <Menu.Item className="border-none">
                    <div>
                      <Button
                        setOpened={setOpened}
                        color={color}
                        propertyName={propertyName}
                        currentProperty={currentProperty}
                        setProperty={setProperty}
                      />
                    </div>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default ButtonsGroup;
