const Subject=require('../../db').Subject
const route=require('express').Router();

route.get('/',(req,res)=>{
    console.log("Inside Student get")
    Subject.findAll()
                .then((subjects)=>{
                    res.status(200).send(subjects)
                })
                .catch((err)=>{
                    error: "could not retrieve students"
                })
})

route.get('/:id',(req,res)=>{
    console.log("Inside subject by id")
    Subject.findOne({
    
        where: {
            id:req.params.id
        }
    
    }).then((subjectid)=>{
        console.log(subjectid)
        res.status(200).send(subjectid)
    }).catch((err)=>{
        error: "could not find subject by corresponding id"
    })
})

route.post('/',(req,res)=>{
    console.log("Inside subject post")
    console.log(req.body.name)
    console.log(req.body.courseId)
    Subject.create({
        name:req.body.name,
        CourseId:req.body.courseId
    }).then((subjects)=>{
        console.log("Inside student creation post")
        console.log(req.body.courseId)
        res.status(201).send(subjects)
    }).catch((err)=>{
        console.log("inside err of subject")
        res.status(501).send({
            error:"could not add"
        })
    })
})


exports=module.exports=route