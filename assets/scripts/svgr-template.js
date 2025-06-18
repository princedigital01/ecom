function template({ componentName, jsx }, { tpl }) {

 return tpl`
  import React from 'react';

  const ${componentName} = ({
    size = 22,
    className = '',
    color = 'currentColor',
    fill = 'none',
    strokeWidth = 1,
    ...props
  }) => {
    return React.cloneElement(
      React.cloneElement(${jsx}, {
        width: size,
        height: size,
        className,
        fill,
        strokeWidth,
        xmlns: 'http://www.w3.org/2000/svg',
        ...props
      }),
      {},
      React.Children.map(${jsx}.props.children, child =>
        React.cloneElement(child, {
          fill: color
        })
      )
    );
  };

  export default ${componentName};
`;
}

module.exports = template;