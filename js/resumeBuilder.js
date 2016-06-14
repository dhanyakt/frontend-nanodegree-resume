/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*
  $("#main").append(["Dhanya"]);
  var awesomeThoughts = ("I am Dhanya and I am AWESOME!");
  var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
  console.log(awesomeThoughts);
  console.log(funThoughts);
  $("#main").append(funThoughts);
  */
  var formattedName = HTMLheaderName.replace("%data%","DHANYA T KUTTIKKATT");
  var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

// Object literal notation
  var bio = {
    "name": "Dhanya",
    "role": "Web Developer",
    "contacts":{
        email:"dhanyakt@gmail.com",
        mobile:"980-989-9097",
        github:"dhanyakt",
        location:"Charlotte,NC"
    },
    "skills":["programming","java","javascript","HTML5","XML"],
    "welcomeMsg":"Welcome to the responsive web development",
    "bioPic":"images/dhanya.jpg"
  };

  var contactGeneric = HTMLcontactGeneric.replace("%data%",contactGeneric);
  var email = HTMLemail.replace("%data%",bio.contacts.email);
  var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var github = HTMLgithub.replace("%data%",bio.contacts.github);
  var loc = HTMLlocation.replace("%data%",bio.contacts.location);

/************** Adding h3 and skills *********************/
  var skillsStart = HTMLskillsStart.replace("%data%",skillsStart);
  var skills = HTMLskills.replace("%data%",bio.skills);

/********* Profile pic and welcome message ****************/
  var bioPic = HTMLbioPic.replace("%data%",bio.bioPic);
  var welcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);

/************* Append the object properties to the header ************/
  $("#topContacts").append(email);
  $("#topContacts").append(mobile);
  $("#topContacts").append(github);
  $("#topContacts").append(loc);

/********* Adding skills section to the header ****************/
  $("#header").append(skillsStart);
  $("#skills-h3").append(skills);

/************ Adding profile pic and welcome-msg ************/
  $("#header").append(welcomeMsg);
  $("#header").prepend(bioPic);

<!-- Create work object -->

/*  var work = {};
  work.employer = "Lowe's Companies Inc";
  work.position = "Software Dveloper";
  work.location = "Mooresville,NC";
  var employer = HTMLworkEmployer.replace("%data%",work.employer);
  var title = HTMLworkTitle.replace("%data%",work.position);*/

<!-- Create work object using JSON -->
  var work = {
    "jobs" : [
        {
            "employer": "Udacity",
            "dates" : "April 2016 - Current",
            "title" : "Student",
            "worklocation" : "Charlotte, NC"
            "description" : "Developing web pages by responsive webpages"
        },
        {
            "employer" : "Lowe's Companies Inc",
            "dates" : "Feb 2014 - August 2014",
            "title" : "Associate Software Developer",
            "worklocation" : "Mooresville, NC"
            "description" : ""
        },
        {
            "employer" : "Independent ",
            "dates" : "Dec 2013",
            "title" : "Android Developer",
            "worklocation" : "Mooresville, NC",
            "description" : "Designing and developing Android applications"
        },
        {
            "employer" : "CMC Ltd, (A TATA Enterprise)",
            "dates" : "March-2012",
            "title" : "Developer",
            "worklocation" : "Bangalore,India",
            "description" : ""
        }
    ]
  }

<!-- Create project object using JSON -->

  var projects = {
    "projects" : [
        {
            "title" : "Fron",
            "dates" : "August",
            "description" : "",
            "images" : [""]
        },
        {
            "title" : "DND Application",
            "dates" : "",
            "description" :"",
            "images" :""
        }
    ]
  }


<!-- Create education object using JSON -->

  var education = {
    "schools" : [
        {
            "name":"Nehru College of Engineering and Research Center",
            "dates":"August 2005 - June 2009",
            "degree": "B.Tech",
            "major":"Information Technology",
            "city":"Thiruvillamala,Thrissur,Kerala,India",
            "url" : ""
        },
        {
            "name":"Railway Higher Seconday School",
            "degree":"Plus two certificate",
            "major":["Physics,Chemistry,Maths,Biology"],
            "city":"Palakkad,Kerala,India",
            "url" : ""
        },
        {
            "name":"M.E.S",
            "degree":"SSLC",
            "major":["Science","Social","Maths","English","Malyalam","Hindi"],
            "city" : "Palakkad,Kerala,India",
            "url" : ""
        }
    ],
    "online" : [
        {
            "name" : "Udacity",
            "title" : "Front-end-development",
            "dates" : "April 2016 - Current",
            "major" :["HTML5","CSS3","javascript","JSON","jquery"],
            "city" : "",
            "url" :
        },
        {
            "name" : "Codecademy",
            "title" : "Python",
            "dates" : "",
            "major" : "Python",
            "city" : "",
            "url" :
        }
    ]
  }



























