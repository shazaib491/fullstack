//database
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todo',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=>{
    console.log('connected to server');
}).catch((err)=>{
    console.log(err);
})

module.exports=mongoose;