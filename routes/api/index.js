const route=require('express').Router()

route.use('/courses',require('./course'))
route.use('/students',require('./student'))

exports=module.exports={
    route
}