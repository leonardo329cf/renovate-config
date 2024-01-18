module.exports = {
  endpoint: 'https://api.bitbucket.org/',
  token: '',
  platform: 'bitbucket',
  onboardingConfig: {
    extends: ['config:recommended', 'github>leonardo329cf/renovate-config'],
  },
  repositories: ['leonardocardozoferreira/jhipsterapp'],
};
