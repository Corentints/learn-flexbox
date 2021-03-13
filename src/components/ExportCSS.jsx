/* eslint-disable no-param-reassign */
import { useState } from 'react';

const ExportCSS = ({ flexProperties }) => {
  const [opened, setOpened] = useState(false);

  const camelToSnakeCase = (str) => str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

  const exportedCSSHTML = ['display: flex;'];
  let exportedCSS = 'display: flex;\n';

  Object.entries(flexProperties).forEach(([property, value]) => {
    if (value !== 'unset') {
      const propertyAndValue = `${camelToSnakeCase(property)}: ${value};`;
      exportedCSS += `${propertyAndValue};\n`;
      exportedCSSHTML.push(<span>{propertyAndValue}</span>);
    }
  });

  return (
    <div>
      <button type="button" onClick={() => setOpened(!opened)} className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Export CSS
        {' '}
        <svg className="ml-2 -mr-0.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
      </button>
      {opened
        && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" />
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>

                </div>
                <div className="relative mt-3 text-center sm:mt-5">
                  <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-headline">
                    Your exported CSS
                  </h3>
                  <button
                    type="button"
                    onClick={({ target }) => {
                      navigator.clipboard.writeText(exportedCSS);
                      target.innerText = 'done';
                      window.setTimeout(() => {
                        target.innerText = 'copy';
                      }, 2000);
                    }}
                    className="absolute px-2 py-1 text-sm text-white bg-blue-600 rounded-md top-14 right-4"
                  >
                    copy

                  </button>
                  <div className="p-4 mt-4 bg-gray-200 rounded-md">
                    <code className="text-sm text-left">
                      {exportedCSSHTML.map((css) => (
                        <div>{css}</div>
                      ))}
                    </code>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button onClick={() => setOpened(false)} type="button" className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        )}
    </div>
  );
};

export default ExportCSS;
