module.exports = {
    verbose: true,
    roots: [
        './src/'
    ],
    preset: 'ts-jest',
    moduleNameMapper: {
        '^@app/(.*)$': '<rootDir>/src/$1',
        '^@assets/(.*)$': '<rootDir>/src/assets/$1'
    },
    setupFilesAfterEnv: [
        '<rootDir>/setupTests.ts'
    ]
};
