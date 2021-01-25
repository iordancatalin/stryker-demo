/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'karma',
  coverageAnalysis: 'perTest',
  files: ['src/*.js', 'test/*.js', 'karma.conf.cjs'],
  mutate: ['src/*.js'],
  karma: {
    projectType: 'custom',
    configFile: 'karma.conf.cjs',
    config: {},
  },
};
