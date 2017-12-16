#!/usr/bin/env node
let Compress = require('./main/index');
let config = {
    currentDirPath: process.cwd(),
    args : process.argv
};

let options = {
    dirPath : config.currentDirPath
};
config.args.map((item,index)=>{
   if(index > 1){
       let ary = item.split('=');
       let key = ary[0];
       let value = ary[1];
       options[key] = value;
   }
});
let compress = new Compress(options);
compress.init();