const mongoose = require('mongoose');
main().catch(err => console.log(err));

//mongodb+srv://ersinev:<password>@cluster0.ae7qwsr.mongodb.net/?retryWrites=true&w=majority
async function main(){
    await mongoose.connect('mongodb://localhost:27017/myDB',(err)=>{
        if(err){
            console.log('error')
        }
        else{
            console.log('connected')
        }
    })




}

//====================   create schema ===============
const users = new mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    password: String,
    age: Number,
    isAdmin: Boolean
})

//================== compile it to model  =======================
const Users =mongoose.model('Users',users)

//====================  creat record ==================
const user1={
    username:'ersin',
    password:'123456',
    age:18,
    isAdmin:true
}
const _user1 =new Users(user1)
//==============  save it to database
// _user1.save()
// .then(res=>{
//     console.log(res)
// })

//save when username is unique
 Users.findOne({
    username:'root'
})
.then(user=>{
    if(user!==null){
        console.log('username already exist')
    }
    else{
        console.log('username is unique')
        // save user if it is unique
        new Users({
            username:'root',
            password:'3434',
            age:30,
            isAdmin:true
        }).save().then((newUser)=>console.log(newUser))
    }
})


// Users.find({})
// .then(res=>{
//     console.log(res) //all records
// })

//=================  find by id =============
// Users.find({
//     _id:'63285e81ce63f960faaa6603'
// })
// .then(res=>{
//     console.log(res) //all records
// })
//================= Find by name ===============
// Users.find({
//     username:'ersin'
// })
// .then(res=>{
//     console.log(res) //all records
// })


//============== find by id and delete them ============

// Users.findByIdAndDelete('63285b95d532cc9751c57963')
// .then(res=>{
//     console.log(res,'record is deleted')
// })


//=========== delete all records ==========
// Users.deleteMany({},(err)=>{
//     console.log('deleted')
// })