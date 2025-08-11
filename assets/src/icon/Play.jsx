import React from "react";
const SvgPlay = ({
  size = 22,
  className = "",
  color = "currentColor",
  fill = "none",
  strokeWidth = 1,
  ...props
}) => {
  return React.cloneElement(
    React.cloneElement(
      <svg
        viewBox="0 0 44 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          d="M1.375 49.0942L1.375 1.54834L42.5508 25.3208L1.375 49.0942Z"
          fill="currentColor"
          stroke="currentColor"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_469"
            x1={39.4864}
            y1={42.9333}
            x2={-7.93105}
            y2={7.25729}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor" />
            <stop offset={1} stopColor="currentColor" />
          </linearGradient>
        </defs>
      </svg>,
      {
        width: size,
        height: size,
        className,
        fill,
        strokeWidth,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
      }
    ),
    {},
    React.Children.map(
      (
        <svg
          viewBox="0 0 44 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          {...props}
        >
          <path
            d="M1.375 49.0942L1.375 1.54834L42.5508 25.3208L1.375 49.0942Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_469"
              x1={39.4864}
              y1={42.9333}
              x2={-7.93105}
              y2={7.25729}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" />
              <stop offset={1} stopColor="currentColor" />
            </linearGradient>
          </defs>
        </svg>
      ).props.children,
      (child) =>
        React.cloneElement(child, {
          fill: color,
        })
    )
  );
};
export default SvgPlay;
