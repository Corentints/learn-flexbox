/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { Transition } from '@headlessui/react';

const Square = ({
  name, square, squares, setSquares,
}) => {
  const [configIsOpen, setConfigIsOpen] = useState(false);

  const incrementSquareProperty = (property) => {
    if (square[property] < 64) {
      square[property] += 4;
    } else {
      square[property] = 'full';
    }
    setSquares([...squares]);
  };

  const decrementSquareProperty = (property) => {
    if (square[property] === 'full') {
      square[property] = 64;
    } else if (square[property] > 24) {
      square[property] -= 4;
    }
    setSquares([...squares]);
  };

  return (
    <>
      <div style={{ maxHeight: '484px' }} className={`flex m-2 items-center relative justify-center w-${square.width} h-${square.height} ${square.order ? `order-${square.order}` : ''} font-bold text-white rounded-md bg-gradient-to-r from-blue-500 to-blue-700`}>
        {name}
        <button type="button" className="absolute top-2 right-2" onClick={() => setConfigIsOpen(!configIsOpen)}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        {configIsOpen
        && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Transition
              show={configIsOpen}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75" />
              </div>
            </Transition>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-headline">
                    Edit square
                    {' '}
                    {name}
                  </h3>
                  <div className="mt-2 text-black">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="px-2 text-sm text-gray-500 bg-white">
                          Width
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <button
                        type="button"
                        className="p-4 py-2 text-white bg-blue-400 rounded-full"
                        onClick={() => decrementSquareProperty('width')}
                      >
                        -
                      </button>
                      <p className="mx-4">{square.width === 'full' ? '100%' : square.width}</p>
                      <button
                        type="button"
                        className="p-4 py-2 text-white bg-blue-400 rounded-full"
                        onClick={() => incrementSquareProperty('width')}
                      >
                        +
                      </button>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="px-2 text-sm text-gray-500 bg-white">
                          Height
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <button
                        type="button"
                        className="p-4 py-2 text-white bg-blue-400 rounded-full"
                        onClick={() => decrementSquareProperty('height')}
                      >
                        -
                      </button>
                      <p className="mx-4">{square.height === 'full' ? '100%' : square.height}</p>
                      <button
                        type="button"
                        className="p-4 py-2 text-white bg-blue-400 rounded-full"
                        onClick={() => incrementSquareProperty('height')}
                      >
                        +
                      </button>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="px-2 text-sm text-gray-500 bg-white">
                          Flex order
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <button
                        type="button"
                        className="p-4 py-2 text-white bg-blue-400 rounded-full"
                        onClick={() => {
                          square.order = square.order > 1 ? square.order -= 1 : null;
                          setSquares([...squares]);
                        }}
                      >
                        -
                      </button>
                      <p className="mx-4">{square.order ?? 'unset'}</p>
                      <button
                        type="button"
                        className="p-4 py-2 text-white bg-blue-400 rounded-full"
                        onClick={() => {
                          if (square.order < 5) {
                            square.order += 1;
                          }
                          setSquares([...squares]);
                        }}
                      >
                        +
                      </button>
                    </div>

                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button type="button" onClick={() => setConfigIsOpen(!configIsOpen)} className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                  Save
                </button>
              </div>
            </div>

          </div>
        </div>
        )}
      </div>
    </>
  );
};

export default Square;
