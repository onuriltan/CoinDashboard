module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/index.tsx',
    '!<rootDir>/src/serviceWorker.ts',
    '!<rootDir>/src/react-app-env.d.ts',
    '!<rootDir>/src/setupTests.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
}
