const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const db=require('./database/db');
const routes=require('./routes/todos')


// middlewares
app.use(cors());
app.use(express.json());
// middlewares


// routing
app.use('/api',routes);
// routing


const port=8000;
// creating server
app.listen(port,()=>{
    console.log(`express is running at ${port}`);
})