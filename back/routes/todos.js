// controller
const express=require('express');
const router=express.Router();
const todo=require('../database/model/todo');

router.post('/insert',(req,res)=>{
    const data=new todo(req.body);
    todo.todoInsert(data).then((response)=>{
        res.json(response
        );
    }).catch((err)=>{
        res.json(err)
    })
})

router.get('/display',(req,res)=>{
    todo.getTodo().then((response)=>{
        res.json(response)
    }).catch((err)=>{
        res.json(err)
    })
})

router.put('/updateTodo/:id',(req,res)=>{
    const id=req.params.id;
    const data={
        title:req.body.title,
        isCompleted:req.body.isCompleted
    }
    todo.updatetodo(id,data).then((response)=>{
        // or
    //todo.updatetodo(req.params.id,req.body).then((response)=>{
        res.json(response)
    }).catch((err)=>{
        res.json(err)
    })
})

router.delete('/deleteTodo/:id',(req,res)=>{
    todo.deleteTodo(req.params.id).then((response)=>{
        res.json(response)
    }).catch((err)=>{
        res.json(err)
    })
})
module.exports=router;