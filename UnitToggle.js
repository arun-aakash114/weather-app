import React from 'react';

const UnitToggle = ({ unit, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        id="celsius"
        value="celsius"
        checked={unit === 'celsius'}
        onChange={() => onChange('celsius')}
      />
      <label htmlFor="celsius">Celsius</label>

      <input
        type="radio"
        id="fahrenheit"
        value="fahrenheit"
        checked={unit === 'fahrenheit'}
        onChange={() => onChange('fahrenheit')}
      />
      <label htmlFor="fahrenheit">Fahrenheit</label>
    </div>
  );
};

export default UnitToggle;
