/* eslint-disable no-console */
const { exec } = require('child_process');

const packagejson = require('../package.json');

const proc = exec(`docker build . -t quay.io/roikramer120/${packagejson.name}:${packagejson.version}`);
proc.stdout.on('data', console.log.bind(console));
proc.stderr.on('data', console.error.bind(console));
