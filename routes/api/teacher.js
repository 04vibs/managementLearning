const Teacher=require('../../db').Teacher
const route=require('express').Router();

route.get('/',(req,res)=>{
    console.log("Inside Teacher get")
    Teacher.findAll()
                .then((teachers)=>{
                    res.status(200).send(teachers)
                })
                .catch((err)=>{
                    error: "could not retrieve students"
                })
})

route.get('/:id',(req,res)=>{
    console.log("Inside Teacher by id")
    Teacher.findOne({
    
        where: {
            id:req.params.id
        }
    
    }).then((teacherid)=>{
        console.log(teacherid)
        res.status(200).send(teacherid)
    }).catch((err)=>{
        error: "could not find subject by corresponding id"
    })
})




route.post('/',(req,res)=>{
    console.log("Inside subject post")
    console.log(req.body.name)
    console.log(req.body.subjectId)
    Teacher.create({
        name:req.body.name,
        subjectId:parseInt(req.body.subjectId)
    }).then((teacher)=>{
        console.log("Inside student creation post")
        console.log(req.body.subjectid)
        res.status(201).send(teacher)
    }).catch((err)=>{
        console.log("inside err of subject")
        res.status(501).send({
            error:"could not add"
        })
    })
})


exports=module.exports=route