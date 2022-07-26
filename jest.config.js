const nextJest = require('next/jest')
// import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './', })

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/', 'src'],
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}','!**/*.d.ts', '!**/node_modules/**'],
  roots: ['src'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    // '^@finder/(.*)$': '<rootDir>/files-manipulation/$1',
    // '^@metadata/(.*)$': '<rootDir>/folder-metadata/$1',
    // '^@logger/(.*)$': '<rootDir>/logging/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig) 
// export default createJestConfig(customJestConfig)