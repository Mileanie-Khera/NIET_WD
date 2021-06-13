let fs = require("fs");
let extensions = require("./extensions");

let testFolderPath = "./testFolder";
/*
Steps - 
for loop in contents of testFolderPath:
    sort(content)
sort(content):
    if (file)
        sort(file)
        return
    
    else
        for loop in contents of folder:
                sort(content)
        if (folder.size==0)
            removeFolder;
*/

// fs function which gives content of a directory

let contents = fs.readdirSync(testFolderPath);
console.log("Contents: "+contents);
console.log("testFolderPath: "+testFolderPath);

// sortTestFolder(contents[4],testFolderPath);
for (let i = 0; i < contents.length; i++) {
    sortTestFolder(contents[i],testFolderPath);
}

function sortTestFolder(item,path){
    path=path+'/'+item;
    console.log("path: "+path);
    //for file
    if(!fs.lstatSync(path).isDirectory()){
        console.log("Not a directory");
        sortFile(item,path);
        return;
    }//for folder

    console.log("A directory");
    let folderContent = fs.readdirSync(path);
    console.log("folderContent: "+folderContent);
    for(let i in folderContent){
        sortTestFolder(folderContent[i],path);
    }
    // // if folder becomes empty,remove it
    if(fs.readdirSync(path).length==0){
        console.log("Delete:"+path);
        fs.rmdirSync(path);
        return;
    }

}

 function sortFile(file,sourceFilePath){
    let ext = file.split(".")[1];
    console.log("ext: "+ext);
    let folderName = getFolderName(ext);
    let folderPath = testFolderPath+"/"+folderName;    
    if( !fs.existsSync(folderPath) ){
        // folder doenst exists
        // create folder
        fs.mkdirSync(folderPath);
    }   
    // move file
    // copy file
    let destFilePath = folderPath + "/" + file;
    if(destFilePath != sourceFilePath){
    fs.copyFileSync( sourceFilePath  , destFilePath );
        // delete file
        fs.unlinkSync(sourceFilePath);
    }
    
    //console.log(ext , folderName);    
 }


function getFolderName(ext){
    // ext = "jpg"
    let folderName;
    for( let key in extensions ){
        if( extensions[key].includes(ext)){
            folderName = key;
            return folderName;
        } 
    }
 }


// // Task
// // 1. Think of Recursive code
// // 2. If you are inside a sorted folder then come back dont sort
