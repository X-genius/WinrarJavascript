//step 1 : to given the paths for some js file using require js file are fs , path , uniqid it is provide unique name of my files.
let fs = require("fs");
let path = require("path");
let unique = require("uniqid");

//Step 2 : given the data of the directories and files and one imp thing using json which hold the allover tree as in tree form
module.exports.unTreeFy = function()
{
    let src = arguments[0];
    let dest = arguments[1];
    let root = {};

    unTreeFy(src , dest , root);
    fs.writeFileSync(path.join(dest , "metadata.json") , JSON.stringify(root));  
    console.log("DATA COPIED");
}

//step 3 : when the data is present it gives true else false
var whetherCheckFileIsCorrect =  function(string_path){
   return  fs.lstatSync(string_path).isFile();
}

//step 4 : in this function basically call children data.
var ChildReader = function(src){
    let children = fs.readdirSync(src);
    return children;
}

//step 5 : In this function to make untreefy logic
var unTreeFy = function(src , dest , root){
    let isFile = whetherCheckFileIsCorrect(src);
    if(isFile == true){
        let newName = unique();
        let oldName = path.basename(src);

        fs.copyFileSync(src , path.join(dest , newName));
        root.newName = newName;
        root.oldName = oldName;
        root.isFile = true;
    }

    else{
        let dirName = path.basename(src);
        root.name = dirName;
        root.isFile = false;
        root.children = [];

        let child = ChildReader(src);

        for(let i = 0; i < child.length; i++)
        {
            let childPath = path.join(src , child[i]);
            let chObj = {};
            unTreeFy(childPath , dest , chObj);
            root.children.push(chObj);//khela khela gya yja pr hmm ChildReader Wala function le rhe hn reason mujhe hr child pr jana hn
        }//awesome cheej;
    }
}


//output : node Winrar.js unTreeFy C:\Users\Aman\OneDrive\Documents\PracticePepWeb\Application\d10 C:\Users\Aman\OneDrive\Documents\PracticePepWeb\Application\Destination

