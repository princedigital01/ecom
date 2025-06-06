// svgr.config.js

module.exports = {
  // Use the 'icon' preset to automatically handle dimensions and props.
  // This is the key to making your icons dynamic.
  icon: true,

  // Tell SVGR to use the custom template you're creating.
  template: require('./assets/scripts/svgr-template.js'),

  // (Optional but Recommended) Configure SVGO to intelligently
  // remove dimensions and replace colors with 'currentColor'.
  // The `icon: true` option enables this by default, but it's good to see.
  svgoConfig: {
    plugins: [
      {
        name: 'convertColors',
        params: {
          currentColor: true, // or a specific hex code
        },
      },
      {
        name: 'removeDimensions',
        active: true,
      },
    ],
  },
};