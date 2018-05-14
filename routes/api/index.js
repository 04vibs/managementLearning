const route=require('express').Router()

route.use('/courses',require('./course'))
route.use('/students',require('./student'))
route.use('/subjects',require('./subject'))
route.use('/teachers',require('./teacher'))

exports=module.exports={
    route
}