module.exports = {
  root: true,
  extends: ['@airteam'],
  rules: {
    'jsx-a11y/no-onchange': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
  settings: {
    'import/resolver': {
      alias: [
        ['~OMS', './src/website/components/OMS'],
        ['~lib', './src/website/lib'],
      ],
    },
  },
};
