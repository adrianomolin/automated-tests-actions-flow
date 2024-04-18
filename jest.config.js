module.exports = {
  testMatch: ['**/__tests__/**/*test.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/__tests__/**'],
  clearMocks: true,
  resetMocks: true,
  resetModules: true,
};
