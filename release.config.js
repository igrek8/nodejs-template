module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          {
            type: 'build',
            scppe: 'deps',
            release: 'patch',
          },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', { npmPublish: false, tarballDir: './dist' }],
    ['@semantic-release/github', { assets: './dist/*.tgz' }],
  ],
  branches: ['main'],
};
