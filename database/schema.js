
const mongoose = require('mongoose');

// team member information
const memberSchema = new mongoose.Schema({
  member_id : String,
  name : String,
  email : String,
  password : String,
  isactive : Boolean,
  profile_image : Buffer,
  image_type : String,
  DOB : Date,
  phone_number : Number,
  Bio : String,
  Skills : [String],  
  Github_link : String,
  likedin : String,
  Website : String,
  Instagram : String,
  Whatsapp : String,
  current_hackathon_id : [String],
  Hackathon_id : [String],
  task_id : [String],
  daily_update_id : [String],
  completedhackathon_id : [String],
  experience_id : [String],
  education_id : [String]
});

// Hackathon or project information
const ProjectSchema = new mongoose.Schema({
  Id : String,
  name : String,
  Start_date : Date,
  end_date : Date,
  Team_member_Id : [String],
  Project_Type : String,
  Github_repository : String,
  Project_Idea : String,
  Key_features : [String],
  documents_Id : [String],
  Documentation_id : String,
  task_id : [String],
  video_link : String,
  Short_description : String,
  live_demo_link : String,
  Ppt_id : String,
  submission : Boolean,
  daily_update_id : [String],
});

// Task information
const TaskSchema = new mongoose.Schema({
  task_id : String,
  assign_member_id : String,
  project_id : String,
  complition_status : Boolean,
});

// Documents information
const documentSchema = new mongoose.Schema({
  document_id : String,
  filename : String,
  filletype : String,
  data : Buffer,
  contenttype : String,
});

// Daily updates information
const dailyupdateSchema = new mongoose.Schema({
  daily_update_id : String,
  member_id : String,
  update : String,
  document_id : String,
  updatedate : Date,
});

// chatting schema
const projectchattingSchema = new mongoose.Schema({
  chat_id : String,
  chat : String,
  member_id : String,
  project_id : String,
},{ timestamps: true });

// Complete Hackathon
const completedhackathonSchema = new mongoose.Schema({
  completed_hackathon_id : String,
  project_id : String,
  member_id : [String],
  win_staus : String,
});

// Experience
const experienceSchema = new mongoose.Schema({
  experience_id : String,
  experience_name : String,
  duration : Number,
  duration_prefix : String,  // year, months
  organization_name : String,
  discription : String,
});

// Education 
const educationSchema = new mongoose.Schema({
  education_id : String,
  stream_name : String,
  start_year : Number,
  end_year : Number,
  college_name : String,
  discription : String,
});

const Member = mongoose.model('Member',memberSchema);
const Project = mongoose.model('Project', ProjectSchema);
const Task = mongoose.model('Task',TaskSchema);
const Doucuments = mongoose.model('Documents',documentSchema);
const DailyUpdate = mongoose.model('DailyUpdate',dailyupdateSchema);
const completedhackathon = mongoose.model('completedhackathon',completedhackathonSchema);
const experience = mongoose.model('experience',experienceSchema);
const education = mongoose.model('education',educationSchema);

module.exports = {
  Member,
  Project,
  Task,
  Doucuments,
  DailyUpdate,
  experience, 
  completedhackathon,
  education
};



