module.exports = {
  endpoint: 'https://api.bitbucket.org/',
  token: '',
  platform: 'bitbucket',
  onboardingConfig: {
    extends: ['config:recommended', 'bitbucket>leonardocardozoferreira/renovate-config'],
  },
  repositories: ['leonardocardozoferreira/jhipsterapp'],
};
