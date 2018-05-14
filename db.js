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
Lecture.belongsTo(Subject,{foreignKey:'subjectId'})
Lecture.belongsTo(Teacher,{foreignKey:'TeacherId'})

const BatchTeacherLecture=db.define('batchTeacherLecture',{
   
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

})
BatchTeacherLecture.belongsTo(Teacher,{foreignKey:'TeacherId'})
BatchTeacherLecture.belongsTo(Batch,{foreignKey:'BatchId'})
BatchTeacherLecture.belongsTo(Lecture,{foreignKey:'LectureId'})

const BatchStudent=db.define('BatchStudent',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
})
BatchStudent.belongsTo(Student,{foreignKey:'StudentId'})


db.sync()
        .then(()=>console.log('Database has been syhnced'))
        .catch((err)=>console.log(err));


