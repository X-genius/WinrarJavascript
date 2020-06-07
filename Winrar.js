var view = require("./viewFile.js");
var unTreeFy = require("./untreefyFile.js");
var treeFy = require("./treefyFile.js");
var help = require("./helpFile.js");


var input = process.argv.slice(2);   // process.argv[2]; why this is print wrong command
var cmd = input[0];

switch(cmd)
{
    case "view":
    view.view(input[1] , input[2]);
    break;

    case "unTreeFy":
    unTreeFy.unTreeFy(input[1] , input[2]);
    break;

    case "treeFy":
    treeFy.treeFy(input[1] ,input[2]);
    break;

    case "help":
    help.help()
    break;

    default:
    console.log("Wrong Commands Press");
    break;
}