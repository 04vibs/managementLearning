const Sequelize=require('sequelize')

const db=new Sequelize('managementLearningdb','test','ngrtest',{

    dialect:'mysql',
    host:'localhost',


})

const Course=db.define('course',{

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

const Batch=db.define('Batches',{
   
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
Batch.belongsTo(Course,{foreignKey: 'courseId'})


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
Subject.belongsTo(Course,{foreignKey:'courseId'})


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

const TeacherSubject=db.define('TeacherSubject',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }
})
TeacherSubject.belongsTo(Teacher,{foreignKey:'TeacherId'})
TeacherSubject.belongsTo(Subject,{foreignKey:'subjectId'})


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


db.sync()
        .then(()=>console.log('Database has been syhnced'))
        .catch((err)=>console.log(err));

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


