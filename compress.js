#!/usr/bin/env node
let Compress = require('./main/index');
let config = {
    currentDirPath: process.cwd()
};
let options = {
    dirPath : config.currentDirPath
};
let compress = Compress(options);
compress.init();