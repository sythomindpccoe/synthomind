module.exports = {
  members: [
    {
      member_id: "M001",
      name: "Alice Johnson",
      email: "alice@example.com",
      password: "hashedpassword1",
      isactive: true,
      profile_image: Buffer.from(""),
      image_type: "image/png",
      DOB: new Date("1999-05-21"),
      phone_number: 9876543210,
      Bio: "Full-stack developer with a passion for UI/UX design.",
      Skills: ["React", "Node.js", "MongoDB"],
      Github_link: "https://github.com/alicejohnson",
      likedin: "https://linkedin.com/in/alicejohnson",
      Website: "https://alice.dev",
      Instagram: "https://instagram.com/alicejohnson",
      Whatsapp: "9876543210",
      current_hackathon_id: ["H001"],
      Hackathon_id: ["H001", "H002"],
      task_id: ["T001", "T002"],
      daily_update_id: ["D001"],
      completedhackathon_id: ["CH001"],
      experience_id: ["E001"],
      education_id: ["ED001"]
    },
    {
      member_id: "M002",
      name: "Bob Smith",
      email: "bob@example.com",
      password: "hashedpassword2",
      isactive: true,
      profile_image: Buffer.from(""),
      image_type: "image/jpeg",
      DOB: new Date("1998-03-10"),
      phone_number: 9123456789,
      Bio: "Backend developer and cloud enthusiast.",
      Skills: ["Express", "MongoDB", "AWS"],
      Github_link: "https://github.com/bsmith",
      likedin: "https://linkedin.com/in/bsmith",
      Website: "https://bobsmith.dev",
      Instagram: "https://instagram.com/bsmith",
      Whatsapp: "9123456789",
      current_hackathon_id: ["H002"],
      Hackathon_id: ["H001"],
      task_id: ["T003"],
      daily_update_id: ["D002"],
      completedhackathon_id: ["CH002"],
      experience_id: ["E002"],
      education_id: ["ED002"]
    }
  ],

  projects: [
    {
      Id: "P001",
      name: "SmartFarm",
      Start_date: new Date("2024-01-10"),
      end_date: new Date("2024-01-30"),
      Team_member_Id: ["M001", "M002"],
      Project_Type: "Hackathon",
      Github_repository: "https://github.com/team/smartfarm",
      Project_Idea: "An AI-based crop monitoring system.",
      Key_features: ["Disease detection", "Soil analysis"],
      documents_Id: ["DOC001"],
      Documentation_id: "DOC001",
      task_id: ["T001", "T002"],
      video_link: "https://youtu.be/demo1",
      Short_description: "AI solution for farmers",
      live_demo_link: "https://demo.smartfarm.com",
      Ppt_id: "PPT001",
      submission: true,
      daily_update_id: ["D001", "D002"]
    },
    {
      Id: "P002",
      name: "EcoTrack",
      Start_date: new Date("2024-02-01"),
      end_date: new Date("2024-02-15"),
      Team_member_Id: ["M001"],
      Project_Type: "College Project",
      Github_repository: "https://github.com/team/ecotrack",
      Project_Idea: "Track environmental impact via app.",
      Key_features: ["Carbon calculator", "Eco tips"],
      documents_Id: ["DOC002"],
      Documentation_id: "DOC002",
      task_id: ["T003"],
      video_link: "https://youtu.be/demo2",
      Short_description: "Track your eco impact",
      live_demo_link: "https://demo.ecotrack.com",
      Ppt_id: "PPT002",
      submission: false,
      daily_update_id: ["D002"]
    }
  ],

  tasks: [
    {
      task_id: "T001",
      assign_member_id: "M001",
      project_id: "P001",
      complition_status: true
    },
    {
      task_id: "T002",
      assign_member_id: "M001",
      project_id: "P001",
      complition_status: false
    },
    {
      task_id: "T003",
      assign_member_id: "M002",
      project_id: "P002",
      complition_status: true
    }
  ],

  documents: [
    {
      document_id: "DOC001",
      filename: "SmartFarmDoc.pdf",
      filletype: "pdf",
      data: Buffer.from("PDF content..."),
      contenttype: "application/pdf"
    },
    {
      document_id: "DOC002",
      filename: "EcoTrackDoc.pdf",
      filletype: "pdf",
      data: Buffer.from("PDF content 2..."),
      contenttype: "application/pdf"
    }
  ],

  updates: [
    {
      daily_update_id: "D001",
      member_id: "M001",
      update: "Finished frontend UI",
      document_id: "DOC001",
      updatedate: new Date("2024-01-15")
    },
    {
      daily_update_id: "D002",
      member_id: "M002",
      update: "Set up backend API",
      document_id: "DOC002",
      updatedate: new Date("2024-02-05")
    }
  ],

  chats: [
    {
      chat_id: "C001",
      chat: "Let's deploy today",
      member_id: "M001",
      project_id: "P001"
    },
    {
      chat_id: "C002",
      chat: "We need to fix the login bug",
      member_id: "M002",
      project_id: "P002"
    }
  ],

  completed: [
    {
      completed_hackathon_id: "CH001",
      project_id: "P001",
      member_id: ["M001", "M002"],
      win_staus: "1st Place"
    },
    {
      completed_hackathon_id: "CH002",
      project_id: "P002",
      member_id: ["M002"],
      win_staus: "Participation"
    }
  ],

  experiences: [
    {
      experience_id: "E001",
      experience_name: "Web Developer Intern",
      duration: 6,
      duration_prefix: "months",
      organization_name: "TechSoft",
      discription: "Worked on front-end development"
    },
    {
      experience_id: "E002",
      experience_name: "Backend Developer",
      duration: 1,
      duration_prefix: "year",
      organization_name: "CloudWare",
      discription: "Developed RESTful APIs"
    }
  ],

  educations: [
    {
      education_id: "ED001",
      stream_name: "Computer Engineering",
      start_year: 2019,
      end_year: 2023,
      college_name: "XYZ Institute of Technology",
      discription: "Focused on AI and web technologies"
    },
    {
      education_id: "ED002",
      stream_name: "Information Technology",
      start_year: 2018,
      end_year: 2022,
      college_name: "ABC University",
      discription: "Specialized in Cloud and Networking"
    }
  ]
};

