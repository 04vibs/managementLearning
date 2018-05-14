const Student=require('../../db').Student
const SUbscription=require('../../db').subscription
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

route.get('/:id/batches',(req,res)=>{
    console.log("Inside course by id and batches")
    SUbscription.findAll({
    
        where: {
            StudentId:req.params.id
            
        }
    
    }).then((subid)=>{
        console.log(subid)
        res.status(200).send(subid)
    }).catch((err)=>{
        error: "could not find course by batch and id"
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

route.post('/:id/batches',(req,res)=>{
    console.log("Inside sub post")
    console.log(req.body.batchId)
    console.log(req.body.studentid)

    SUbscription.create({
        StudentId:req.params.id,
        BatchId:req.body.batchId

    }).then((subscriptiondata)=>{
        console.log("Inside subscription ")
        res.status(201).send(subscriptiondata)
    }).catch((err)=>{
        res.status(501).send({
            error: "could not add in subscription"
        })
    })
})
exports=module.exports=route