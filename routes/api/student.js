const Student=require('../../db').Student
const route=require('express').Router();

route.get('/',(req,res)=>{
    console.log("Inside Student get")
    Student.findAll()
                .then((students)=>{
                    res.status(200).send(students)
                })
                .catch((err)=>{
                    error: "could not retrieve students"
                })
})

route.get('/:id',(req,res)=>{
    console.log("Inside student by id")
    Student.findOne({
    
        where: {
            id:req.params.id
        }
    
    }).then((studentid)=>{
        console.log(studentid)
        res.status(200).send(studentid)
    }).catch((err)=>{
        error: "could not find student by corresponding id"
    })
})

route.post('/',(req,res)=>{
    console.log("Inside student post")
    console.log(req.body.name)
    console.log(req.body.id)
    Student.create({
        name:req.body.name,
        batchId :req.body.id
    }).then((students)=>{
        console.log("Inside student creation post")
        res.status(201).send(students)
    }).catch((err)=>{
        console.log("inside err of student")
        res.status(501).send({
            error:"could not add"
        })
    })
})


exports=module.exports=route