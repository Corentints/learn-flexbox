const Button = ({
  color, propertyName, currentProperty, setProperty, setOpened,
}) => (
  <button type="button" onClick={() => { setProperty(propertyName); setOpened(false); }} className={`${currentProperty === propertyName ? `bg-${color}-100` : ''} hover:bg-${color}-100 relative w-full inline-flex items-center px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-${color}-600`}>
    <span tabIndex="-1" className="mx-auto focus:outline-none">{propertyName}</span>
  </button>
);

export default Button;
