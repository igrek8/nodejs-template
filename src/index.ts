/* eslint-disable @typescript-eslint/no-var-requires */
export * from './sum';

const cp = require('child_process');
const path = require('path');

export function cleanupTemp() {
  const cmd = 'rm -rf ' + path.join(__dirname, 'temp');
  cp.execSync(cmd); // BAD
}
