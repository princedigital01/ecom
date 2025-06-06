import React from 'react';

const Star = ({
  size = 19,
  active = true,
  activeColor = '#FFC633',
  inactiveColor = 'transparent',
  strokeColor = '#FFC633',
  className = '',
  ...props
}) => {
  const height = (size * 17) / 19;

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 19 17"
      fill={active ? activeColor : inactiveColor}
      stroke={active ? 'none' : strokeColor}
      strokeWidth={active ? 0 : 2}
      xmlns="http://www.w3.org/2000/svg"
      className={`star-icon ${className}`}
      {...props}
      style={{ cursor: 'pointer', transition: 'transform 0.3s ease, fill 0.3s ease' }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.2)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" />
    </svg>
  );
};

export default Star;
