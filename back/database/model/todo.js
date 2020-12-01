//schema
const db=require('../db');

const todoScema=db.Schema({
    title:{
        type:String
    },
    isCompleted:{
        type:Boolean
    }
})

const todo=module.exports=db.model('todo',todoScema);

module.exports.todoInsert=(data)=>{
    return data.save();
}

module.exports.getTodo=()=>{
    return todo.find({});
}


module.exports.updatetodo=(id,data)=>{
    return todo.findByIdAndUpdate({_id:id},{$set:data})
}


module.exports.deleteTodo=(id)=>{
    return todo.deleteOne({_id:id})
}