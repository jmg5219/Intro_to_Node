const fs = require('fs');//Allows reading of the filesysetem
const path = require('path');//allows us to read the filenames

//We want to export one function that takes 3 args
module.exports = function mymodule(directory, extension, callback){
    extension = "."+extension
    fs.readdir(directory, function (error, list) {  
        if(error){
            return callback(error);
        }
        const filteredList = list.filter((file) => {
            if(path.extname(file)===extension){
                return file;
            }
        });
        callback(null,filteredList);
        
    });
}


