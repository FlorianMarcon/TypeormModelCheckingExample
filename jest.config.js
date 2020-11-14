module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: [
      'src/graphql/resolvers/**/*.resolver.{js,jsx,ts,tsx}',
      'src/database/services/**/*.service.{js,jsx,ts,tsx}',
      'src/graphql/decorators/**/*.{js,jsx,ts,tsx}',
      'src/scheduled-tasks/tasks/**/*.task.{js,jsx,ts,tsx}'
    ],
    setupFiles: [
      "./src/tests-utils/jest-setup.ts"
    ]
  };