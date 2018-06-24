const {defaults} = require('jest-config');
const path = require('path')

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  
  moduleDirectories: [
    "node_modules",
    "./app/*"
  ],
  
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest"
  },

  setupTestFrameworkScriptFile: path.resolve(__dirname, 'enzyme.config.js'),

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",

  globals: {
    "ts-jest": {
      useBabelrc: true
    }
  }
};
