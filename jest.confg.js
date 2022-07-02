import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = { 
    moduleDirectories: ['node_modules', '<rootDir>/', 'src'],
    testEnvironment: 'jest-environmnet-jsdom',
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}','!**/*.d.ts', '!**/node_modules/**'],
    roots: ['src'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}

export default createJestConfig(customJestConfig)