const Course=require('../../db').Course

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

exports=module.exports=route