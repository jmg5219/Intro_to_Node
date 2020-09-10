//These are the Core modules that we are 'importing'
const fs = require('fs');//Allows reading of the filesysetem
const path = require('path');//allows us to read the filenames
//These are the inputs we are recieving
var dirName = process.argv[2] 
var fileName = "."+process.argv[3]
//This is how you use the fs.readdir core module, takes the directory and the files in the anonymous callback function
fs.readdir(dirName, function (err, fileExt) {  
    
    for(let i = 0;i<fileExt.length;i++){
        if(path.extname(fileExt[i])==fileName){
            console.log(fileExt[i])
        }
    };
     
})