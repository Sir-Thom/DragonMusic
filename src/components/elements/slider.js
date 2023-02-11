import React, { useState } from 'react';
import  "./Searchbar.css";
const Slider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex  mb-2 text-sm font-medium text-gray-900 dark:text-white items-center mt-10">
      <input
        type="range"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        value={value}
        onChange={handleChange}
        style={{
          background: `linear-gradient(to right, #3182ce 0%, #3182ce ${value}%, #fff ${value}%, #fff 100%)`,
          backgroundSize: `${value}% 100%`,
        }}
      />
      <div className="ml-3 font-medium">{value}</div>
    </div>
  );
};

export default Slider;
