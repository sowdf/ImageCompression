const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');


const fs = require('fs');
class Compress{
    constructor(options){
        this.dirPath = options.dirPath;
        this.fileCount = 0;
        this.output = options.output || options.dirPath + '/output';
        this.extAry = ['png','jpg'];
    }
    doneCallback(){  // 压缩完成 回调

    }
    init(){
        imagemin([`${this.dirPath}/*.{jpg,png}`], `${this.output}`, {
            plugins: [
                imageminJpegtran(),
                imageminPngquant({quality: '66'})
            ]
        }).then(files => {
            console.log('文件压缩完成......');
        setTimeout(()=>{
            this.doneCallback();
    },500);
        return false;
        //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
    });
    }
    calculateTheFileNumber(){ // 计算jpg 和 png 图片有多少张
        let data = readdirSync(this.dirPath);
        data.forEach((item,index)=>{
            if(item.split('.')[1] && this.extAry.includes(item.split('.')[1])){
            this.fileCount++;
        }
    });
    }

}
let options = {
    dirPath : '/Users/caozhihui/code/uploadImage-cli/images',
};


module.exports = Compress;
