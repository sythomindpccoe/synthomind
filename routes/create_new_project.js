const express = require('express');
const router = express.Router();
const { Member, Project, Task, Doucuments, DailyUpdate} = require('../database/schema');

router.get('/',(req,res)=>{
  const new_member = new Member({ member_id: "M12345",
                                  name: "Jane Doe",
                                  email: "janedoe@example.com",
                                  password: "securehashedpassword", // Typically you store a hashed password
                                  isactive: true,
                                  profile_image: null, // Can be left null if not uploaded yet
                                  image_type: null,
                                  DOB: new Date("1998-07-15"),
                                  phone_number: 9876543210,
                                  Bio: "Full-stack developer with a passion for open source and AI.",
                                  Skills: ["JavaScript", "React", "Node.js", "MongoDB", "Python"],
                                  Github_link: "https://github.com/janedoe",
                                  likedin: "https://linkedin.com/in/janedoe",
                                  Website: "https://janedoe.dev",
                                  Instagram: "https://instagram.com/janedoe",
                                  Whatsapp: "+919876543210",
                                  current_hackathon_id: ["HACK2025"],
                                  Hackathon_id: ["HACK2023", "HACK2024", "HACK2025"],
                                  task_id: ["T123", "T124", "T125"],
                                  daily_update_id: ["DU123", "DU124"]
                                });

  new_member.save().then(() => console.log('User saved'));
  res.render('create_new_project');
});

module.exports = router;