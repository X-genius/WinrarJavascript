//step 1 : To giving a js file which is present in node
let fs = require("fs");
let path = require("path");

//step 2 : To provide the two views 1st is tree view which help to create the directories and files in Tree form
//and 2nd is to create the flat view which provide the directories and files in flat surfaces
module.exports.view = function(){
   var src = arguments[0];
   var mode =arguments[1];
   
   if(mode == "-t")
   {
       viewTree(src , " ");
   }
   else
   {
       viewFile(src);
   }
}

//Step 3 : when the file is present it gives true not present it gives false
var checkWhetherIsPresent = function(path_string){
    return fs.lstatSync(path_string).isFile();
}

//step 4 : In this function when we got the children in the main directory so it is read when not present leave it
var childReader = function(src){
    let Children = fs.readdirSync(src);
    return Children;
}

//step 5 : To create a flat view 
var viewFile = function(src){
    let isFile = checkWhetherIsPresent(src);
    if(isFile == true)
    {
        console.log(src + "*");
    }

    else
    {
        console.log(src);

    let child = childReader(src);
    for(var i = 0; i < child.length; i++)
    {
        var childPath = path.join(src , child[i]);
        viewFile(childPath);
    } 
    }
}

//step 6 : To create a Tree View
var viewTree = function(src , indent){
  var isFile = checkWhetherIsPresent(src)
  if(isFile == true)
  {
      console.log(indent + path.basename(src) + "*");
  }
  else
  {
  console.log(indent + path.basename(src));

  let child = childReader(src);
  for(var i = 0; i < child.length; i++)
  {
      var childPath = path.join(src , child[i]);
      viewTree(childPath , indent +"\t");
  } 
  }
}

//output : for Tree View : node Winrar.js view C:\Users\Aman\OneDrive\Documents\PracticePepWeb\Application\d10 -t
//for Flat View : node Winrar.js view C:\Users\Aman\OneDrive\Documents\PracticePepWeb\Application\d10 -f