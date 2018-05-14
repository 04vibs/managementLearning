const Sequelize=require('sequelize')

const db=new Sequelize('managementLearningdb','test','ngrtest',{

    dialect:'mysql',
    host:'localhost',


})

const Course=db.define('courses',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    }

})

const Batch=db.define('batches',{
   
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    }

})

const Subject=db.define('Subjects',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    }

})

const Teacher=db.define('Teachers',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    }

})

const Student=db.define('Students',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    }
})

const Lecture=db.define('Lectures',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    }
})
const subscription =db.define('subscriptions',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

})


Batch.belongsTo(Course,{foreignKey: 'courseId'})
Subject.belongsTo(Course,{foreignKey:'courseId'})
Teacher.belongsTo(Subject,{foreignKey:'subjectId'})
Lecture.belongsTo(Batch,{foreignKey:'batchId'})
Lecture.belongsTo(Subject,{foreignKey:'subjectId'})
Lecture.belongsTo(Teacher,{foreignKey:'TeacherId'})
subscription.belongsTo(Student,{foreignKey:'StudentId'})
subscription.belongsTo(Batch,{foreignKey:'BatchId'})


db.sync()
        .then(()=>console.log('Database has been synced'))
        .catch((err)=>console.log(err));

module.exports={
    Batch,Course,Teacher,Subject,Lecture,Student,subscription
}


