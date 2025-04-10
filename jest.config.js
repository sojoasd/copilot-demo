module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // 加入這行
  testMatch: ['**/*.test.ts'],
};