const Hero = ({ title }) => (
  <div className="relative my-6">
    <div className="w-full">
      <div className="relative px-6 py-10 overflow-hidden bg-blue-600 shadow-xl rounded-2xl sm:px-12 sm:py-8">
        <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
            <path className="text-blue-500 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
            <path className="text-blue-700 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
          </svg>
        </div>
        <div className="relative">
          <div className="sm:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {title}
              <span className="ml-0.5 text-blue-200 font-bold">.</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
