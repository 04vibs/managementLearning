const express=require('express');

const app=express();

app.listen(5151,function(){
    console.log("server started on http://localhost:5151");
})