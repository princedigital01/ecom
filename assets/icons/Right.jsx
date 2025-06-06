import React from 'react';

const Right = ({
  size = 22,
  className = '',
  color = 'currentColor',
  fill = 'none',
  strokeWidth = 2,
  ...props
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      {...props}
    >
      <path
        d="M21 12H3M21 12L15 6M21 12L15 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Right;
