const { ensureDirSync, removeSync } = require('fs-extra');

const cleanDirSync = dir => {
  // Make sure dir exists so it won't error
  ensureDirSync(dir);
  // Remove it
  removeSync(dir);
  // Recreate it
  ensureDirSync(dir);
};

module.exports = { cleanDirSync };
