/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "node_modules/chalk/.+\\.(j|t)sx?$": "ts-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!chalk/.*)"
  ]
};
