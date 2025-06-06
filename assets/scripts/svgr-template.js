// template.js

// The first argument is an object with the variables SVGR provides.
// The second is an object with the template helper, which we destructure to get `tpl`.
function template({ componentName, jsx }, { tpl }) {
  // When using `icon: true`, SVGR automatically prepares the `jsx`
  // to accept props like className, width, height, etc.
  // The `props` variable is also correctly formatted.
  return tpl`
    import React from 'react';

    const ${componentName} = ({
      size = 22,
      className = '',
      color,
      fill,
      strokeWidth,
      ...props
    }) => {
      return React.cloneElement(
        ${jsx},
        {
          className,
          width: size,
          height: size,
          fill: fill || 'none',
          strokeWidth,
          xmlns: 'http://www.w3.org/2000/svg',
          ...props
        },
        React.Children.map(${jsx}.props.children, child =>
          React.cloneElement(child, {
            fill: color || 'currentColor',
          })
        )
      );
    };

    export default ${componentName};
  `;
}

module.exports = template;