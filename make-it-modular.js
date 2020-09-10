const mymodule = require('./mymodule');
var directory = process.argv[2]; 
var extension = process.argv[3];

mymodule(directory,extension,function(error,files){
    if(error){
        return console.error(error)
    }
    files.map(file => {
        console.log(file);
    })
});

