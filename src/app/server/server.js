const express=require('express');
const bodyParser=require('body-parser');
const cors =require('cors');

const PORT = 3000;
 
const app=express();

app.use(bosyParser.json());

app.use(cors());

app.get('/',function(req,res){
    res.send('Hello from server')
})

app.listen(PORT, funciton(){
    console.log("server running on localhost:"+PORT);
});