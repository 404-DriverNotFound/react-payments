const path = require('path');

module.exports = {
  'stories': [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components');
    config.resolve.alias['@constant'] = path.resolve(__dirname, '../src/constant');
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/utils');
    return config;
  },
};