const route=require('express').Router()

route.use('/courses',require('./course'))
route.use('/students',require('./student'))
route.use('/subjects',require('./subject'))

exports=module.exports={
    route
}