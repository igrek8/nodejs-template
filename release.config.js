module.exports = {
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', { npmPublish: false, tarballDir: './dist' }],
    ['@semantic-release/github', { assets: './dist/*.tgz' }],
  ],
  branches: ['main'],
};
