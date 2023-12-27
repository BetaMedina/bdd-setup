module.exports = {
  testEnvironment: 'node',
  collectCoverage: false,
  verbose: true,
  setupFiles: [
    '<rootDir>/tests/setup.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js']
};