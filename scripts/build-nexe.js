const { compile } = require('nexe');
const { dirname } = require('path');
const { cleanDirSync }  = require("./lib");

const NODE_ARCH = process.env.NODE_ARCH || 'x64';
const NODE_PLATFORM = process.env.NODE_PLATFORM || 'alpine';
const NODE_VERSION = process.env.NODE_VERSION || '8.15.0';

const target = [NODE_PLATFORM, NODE_ARCH, NODE_VERSION].join('-');
const binary = process.env.BINARY || `theia-${target}`;
const output = `./output/nexe/${binary}`;
const input = './browser-app/src-gen/backend/main.js';

const main = async () => {
  await compile({
    input,
    output,
    targets: [target],
    resources: ['./browser-app/srg-gen/']
  });
};

cleanDirSync(dirname(output));
main();
