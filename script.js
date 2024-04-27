//file system
const fs = require('node:fs');

// # browser m search krne k liye -  ctrl+f

// node ke docs k file system k file system k callback api copy and paste
//[,optional hota hai]

//--- CREATE

//fs.writeFile(file, data[, options], callback)

fs.writeFile('a1.txt',"helo",function(err){
    if(err) console.log(err)
    else console.log("done")
})

//--- READ

//fs.readFile(path[, options], callback)

fs.readFile('a1.txt','utf-8',function(err , data){
    if(err) console.log(err)
    else console.log(data)
})

//--- APPEND

//fs.appendFile(path, data[, options], callback)

fs.appendFile("a1.txt","appended", function(err){
    if(err) console.log(err)
    else console.log("appended")
})


//--- DELETE

fs.unlink('a.txt',function(err){
    if(err) throw err;
    else console.log('done')
})
