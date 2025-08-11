import React from "react";
const SvgFacebook = ({
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
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM16 7H14.076C13.461 7 13 7.252 13 7.889V9H16L15.762 12H13V20H10V12H8V9H10V7.077C10 5.055 11.064 4 13.461 4H16V7Z"
          fill="currentColor"
        />
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
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          {...props}
        >
          <path
            d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM16 7H14.076C13.461 7 13 7.252 13 7.889V9H16L15.762 12H13V20H10V12H8V9H10V7.077C10 5.055 11.064 4 13.461 4H16V7Z"
            fill="currentColor"
          />
        </svg>
      ).props.children,
      (child) =>
        React.cloneElement(child, {
          fill: color,
        })
    )
  );
};
export default SvgFacebook;
