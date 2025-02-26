// components/CheckboxSlide.tsx

import React from 'react';

interface CheckboxSlideProps {
  id: string;
  name: string;
  value: string;
  imageUrl: string;
  label: string;
}

const CheckboxSlide: React.FC<CheckboxSlideProps> = ({ id, name, value, imageUrl, label }) => {
  return (
    <div role="listitem" className="swiper-slide checkbox-slide w-dyn-item">
      
        <li>
          <input
            type="checkbox"
            id={id}
            name={name}
            value={value}
            className="hidden peer"
            required
          />
          <label
            htmlFor={id}
            className="inline-flex items-center flex flex-col justify-between w-55 h-55 p-1 text-gray-500 
            bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300
            dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 
            hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 
            dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col justify-center items-center p-1">
            <img src={imageUrl} alt={label} className="w-35 h-35 mb-1" />
            <span className="text-sm font-bold ">{ label}</span>
            </div>
          </label>
        </li>
    </div>
  );
};

export default CheckboxSlide;
