const { copySync } = require('fs-extra');
const { basename, dirname, join } = require('path');
const { exec } = require('pkg');
const { cleanDirSync }  = require("./lib");

const NODE_ARCH = process.env.NODE_ARCH || 'x64';
const NODE_PLATFORM = process.env.NODE_PLATFORM || 'linux';
const NODE_VERSION = process.env.NODE_VERSION || '8';

const target = `node${NODE_VERSION}-${NODE_PLATFORM}-${NODE_ARCH}`;
const binary = process.env.BINARY || `theia-${target}`;
const output = `./output/pkg/${binary}`;
const input = './package.json';

const copyFiles = ['node_modules/vscode-nsfw/build/Release/nsfw.node'];

const main = async () => {
  console.log('Build target', target, 'to', output)
  await exec([input, '--target', target, '--output', output]);

  copyFiles.forEach(file => {
    copySync(file, join(dirname(output), basename(file)))
  })
};

cleanDirSync(dirname(output));
main();
