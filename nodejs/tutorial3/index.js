const fs = require('fs') // import fs module

//======== rename file===================
// fs.rename('2.txt','notes.js',(err)=>{
//     if(err) throw err
//     console.log('file renamed')
// })



//====================find files and rename them ================================
// fs.readdir('./',(err,files)=>{
//     console.log(files)
//     let filesNames= files.filter(file=>file.includes('.txt'))
    
//     filesNames.forEach((file,index)=>{
//         console.log(file)
//         //rename all here
        
//         let newName = `tutorial-${index+1}.txt`
//         fs.rename

//     })
// })


//===================== DeleteFile  =========================

// fs.rm('company.txt',(err)=>{
//     console.log('file is deleted')
// })


//====================  Unlink Method  =============================
// fs.unlink('company.txt',(err)=>{
//     console.log('deleted')
// })


//============ Delete a folder ============================
// fs.rmdir('./test1',(err)=>{
//     console.log('folder is deleted')
// })



//=============== If a Folder has a subfolder =================================
// fs.rmdir('./test2',{
//     recursive:true,
//     force:true
// },(err)=>{
//     console.log('folder is deleted')
// })

//====================   exist method ===========
// fs.exists('movies.txt',(result)=>{
//     console.log(result?'file is there':'file is not there')
// })



