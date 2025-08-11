import React from "react";
const SvgLocationCopy = ({
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
        viewBox="0 0 14 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          d="M6.13594 18.5731C4.23281 16.1845 0 10.3953 0 7.14349C0 3.1982 3.13396 0 7 0C10.8646 0 14 3.1982 14 7.14349C14 10.3953 9.73438 16.1845 7.86406 18.5731C7.41562 19.1423 6.58437 19.1423 6.13594 18.5731ZM7 9.52465C8.28698 9.52465 9.33333 8.45685 9.33333 7.14349C9.33333 5.83013 8.28698 4.76232 7 4.76232C5.71302 4.76232 4.66667 5.83013 4.66667 7.14349C4.66667 8.45685 5.71302 9.52465 7 9.52465Z"
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
          viewBox="0 0 14 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          {...props}
        >
          <path
            d="M6.13594 18.5731C4.23281 16.1845 0 10.3953 0 7.14349C0 3.1982 3.13396 0 7 0C10.8646 0 14 3.1982 14 7.14349C14 10.3953 9.73438 16.1845 7.86406 18.5731C7.41562 19.1423 6.58437 19.1423 6.13594 18.5731ZM7 9.52465C8.28698 9.52465 9.33333 8.45685 9.33333 7.14349C9.33333 5.83013 8.28698 4.76232 7 4.76232C5.71302 4.76232 4.66667 5.83013 4.66667 7.14349C4.66667 8.45685 5.71302 9.52465 7 9.52465Z"
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
export default SvgLocationCopy;
