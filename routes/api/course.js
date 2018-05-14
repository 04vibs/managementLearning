const Course=require('../../db').Course
const Batch=require('../../db').Batch
const Lecture=require('../../db').Lecture


const route=require('express').Router()

route.get('/',(req,res)=>{
    //all courses
    console.log("Inside courses get")

    Course.findAll()
            .then((courses)=>{
                res.status(200).send(courses)
            }).catch((err)=>{
                res.status(500).send({
                    error:"could not retrieve courses"
                })
            })
   

})

route.get('/:id',(req,res)=>{
    console.log("Inside course by id")
    Course.findOne({
    
        where: {
            id:req.params.id
        }
    
    }).then((courseid)=>{
        console.log(courseid)
        res.status(200).send(courseid)
    }).catch((err)=>{
        error: "could not find course by corresponding id"
    })
})


route.get('/:id/batches',(req,res)=>{
    console.log("Inside course by id and batches")
    Batch.findAll({
    
        where: {
            courseId:req.params.id
            
        }
    
    }).then((batch)=>{
        console.log(batch)
        res.status(200).send(batch)
    }).catch((err)=>{
        error: "could not find course by batch and id"
    })
})


route.get('/:courseId/batches/:batchId',(req,res)=>{ 
        Batch.findOne({ where: { 
                id:req.params.batchId, 
                courseId:req.params.courseId    
            } 
        }).then((batch)=>{
             res.status(200).send(batch)
             }).catch((err)=>{
                res.status(400).send("Batch not found")
        }) 
    }) 



route.post('/',(req,res)=>{
    console.log("Inside courses post")
    console.log(req.body.name)

    Course.create({
        name:req.body.name
    }).then((courses)=>{
        console.log("Inside post create course ")
        res.status(201).send(courses)
    }).catch((err)=>{
        console.log("Inside error of course")
        res.status(501).send({
            error:" could not add"
        })
    })

})

route.post('/:courseId/batches/:batchId/lectures',(req,res)=>{
    Lecture.create({
        name:req.body.name,
        batchId:req.params.batchId,
        teacherId:req.body.teacherId,
        subjectId:req.body.subjectId

    }).then((lectures)=>{
        console.log("Inside lecture post on course")
        res.status(201).send(lectures)
    }).catch((err)=>{
        console.log("Inside error of lectures")
        res.status(err).send({
            error:" could not post lecture"
        })
    })
})


route.post('/:id/batches',(req,res)=>{
    Batch.create({
        name:req.body.name,
        courseId:req.params.id
    }).then((batches)=>{
        console.log("Inside course batches of id/batches/")
        res.status(201).send(batches)
    }).catch((err)=>{
        console.log("Cannot post course batch id")
        res.status(err).send({
            
            error:"could not post course via id batches"
        })
    })
    
})



exports=module.exports=route