import React, { useState } from 'react';

export default function Card(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 ease-in-out ${
        isHovered ? 'scale-105' : 'scale-100'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={props.link}>
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={props.imageSrc}
          alt={props.title}
        />
      </a>
      <div className="p-5">
        <a href={props.link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
      </div>
    </div>
  );
}
