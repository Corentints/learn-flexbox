import Button from './Button';

const ButtonsGroup = ({
  title, color, propertiesName, propertiesClassName, currentProperty, setProperty,
}) => (
  <div className="flex mb-4 rounded-md shadow-sm">
    <div className={`flex items-center justify-center bg-${color}-600 text-white text-sm font-medium rounded-l-md p-2`}>
      <code>
        {title}
        :
      </code>
    </div>
    <div className="flex items-center justify-between p-2 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md">
      {propertiesName.map((propertyName, i) => (
        <div className="relative">
          <Button
            color={color}
            propertyName={propertyName}
            propertyClassName={propertiesClassName[i]}
            currentProperty={currentProperty}
            setProperty={setProperty}
          />
        </div>
      ))}
    </div>
  </div>
);

export default ButtonsGroup;
