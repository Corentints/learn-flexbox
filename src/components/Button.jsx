const Button = ({
  color, propertyName, propertyClassName, currentProperty, setProperty,
}) => (
  <button type="button" onClick={() => setProperty(propertyClassName)} className={`${currentProperty === propertyClassName ? `border-b-2 border-${color}-600 ` : ''}relative inline-flex items-center px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-${color}-600`}>
    <span tabIndex="-1" className="focus:outline-none">{propertyName}</span>
  </button>
);

export default Button;
