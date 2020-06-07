//step 1 : Give the path of inbuilt js File
let fs = require("fs");
let path = require("path");

//step 2 : Give treeFy path create src , dest , node
module.exports.treeFy = function()
{
    src = arguments[0];
    dest = arguments[1];
    node = require(path.join(src , "metadata.json"));
    treeFy(src , dest , node);
}

//step 3 : When TreeFy is true gives the detail of unTreeFy file.txt and false gives Detail directories 
var treeFy = function(src , dest , node){
    if(node.isFile == true){
    let srcPath = path.join(src , node.newName);
    let destPath = path.join(dest , node.oldName);
    fs.copyFileSync(srcPath , destPath);
    }

    else{
        let dirPath = path.join(dest , node.name);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);        //if file is not exist and also not   present in the code so it will help to make the file
        }

       for(var i = 0; i < node.children.length; i++)
       {
           let child = node.children[i];
           let pPath = dirPath;
           treeFy(src , pPath , child);
       }
    }
}
