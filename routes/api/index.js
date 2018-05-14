const route=require('express').Router()

route.use('/courses',require('./course'))

exports=module.exports={
    route
}