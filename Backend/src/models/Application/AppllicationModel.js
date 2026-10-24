import mongoose from "mongoose";
const ApplicationSchema = new mongoose.Schema({
    course:{
        type:String,
        required : true,
        capitalize : true
    },
    age:{
        type:Number,
        required:true,
        min:18,
        maxim: 36,
    },
    location:{
        type:String,
        required:true
    },
   edu_level:{
    type:String,
    required: true,
   },
   edu_name:{
    type:String,
    required:true
   },
   edu_start:{
    type:Date,
    required: false
   },
   edu_end:{
    type:Date,
    required: false
   },
   subject:{
    type:String,
    required:true,
    lowercase:true
   },
   skills:{
    type:String,
    required:true,
    min:3
   },
exp_skills:{
    type:Number,
    required: true,
    max:5
},
exp:{
    type:String,
    required: false,
    max:5,
  company_name:{
    type:String,
    Capitalized: true,
    required:false,
    verified: false
  },
   pos_tittle:{
    type:String,
    Capitalized: true,
    required:false,
  },
 job_duties:{
    type:String,
    lowercase: true,
    min: char(65),
    max:char(300),
    required:false,
  },
  comments:{
    type:String,
     lowercase: true,
    min: char(65),
    max:char(300),
    required:false,
  }
},
car_goals:{
    types:String,
    required:true,
    expact
}
})