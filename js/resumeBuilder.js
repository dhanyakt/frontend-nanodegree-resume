//Create bio object
var bio = {
    "name": "DHANYA T KUTTIKKATT",
    "role": "Web Developer",
    "contacts": {
        "email": "dhanyakt@gmail.com",
        "mobile": "980-989-9097",
        "github": "dhanyakt",
        "loc": "Charlotte,NC",
        "location": "107 Assembly Drive, Mooresville ,NC, 28117"
    },
    "skills": ["java", "javascript", "jquery", "HTML5", "JSON"],
    "welcomeMessage": "Welcome to the world of responsive web development",
    "biopic": "images/dhanya.jpg",
    "display" : function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.loc);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts,#footerContacts").prepend(formattedLocation);
        $("#topContacts,#footerContacts").prepend(formattedGithub);
        $("#topContacts,#footerContacts").prepend(formattedEmail);
        $("#topContacts,#footerContacts").prepend(formattedMobile);
        $("#header").append(formattedPic);
        $("#header").append(formattedMsg);
        $("#header").append(HTMLskillsStart);
        var total_skills = bio.skills.length;
        for (var i = 0; i < total_skills; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};
bio.display();

//Create education object
var education = {
    "schools": [{
        "name": "Nehru College of Engineering and Research Center",
        "dates": "August 2005 - June 2009",
        "degree": "B.Tech",
        "majors": ["Information Technology"],
        "city": "Kerala,India",
        "url": "//ncerc.ac.in",
        "location": "Nila Gardens, Pampady, Thiruvilwamala, Thrissur, Kerala 680597, India"
    }, {
        "name": "Railway Higher Seconday School",
        "dates": "2002 - 2004",
        "degree": "Pre-university course",
        "majors": ["Physics,Chemistry,Maths,Biology"],
        "city": "Kerala,India",
        "url": "//www.education.kerala.gov.in",
        "location": "Puthuppariyaram, Palakkad, Kerala 678009, India"
    }, {
        "name": "M.E.S",
        "dates": "2001 - 2002",
        "degree": "SSLC",
        "majors": ["Science", "Social", "Maths", "English", "Malyalam", "Hindi"],
        "city": "Kerala,India",
        "url": "//www.education.kerala.gov.in",
        "location": "Chunnambuthara, Olavakode, Palakkad, Kerala 678002, India"
    }],
    "onlineCourses": [{
        "title": "Front-end-development",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
        "title": "Python",
        "school": "Codecademy",
        "dates": "2013",
        "url": "http://www.codecademy.com"
    }]
};

//Create work object
/*jshint multistr: true */

var work = {
    "jobs": [{
        "employer": "Lowe's Companies Inc",
        "title": "Software Developer",
        "location": "1000 Lowes Blvd, Mooresville, NC, 28117",
        "textLocation": "Mooresville,NC",
        "dates": "Feb 2014-Aug 2014",
        "description": "Maintenance of DMS application to support the operation" +
            "of released applications by providing post-implementation programming and " +
            "or configuration support for enhancements to new or packaged-based systems " +
            "and applications providing systems incident support as needed"
    }, {
        "employer": "Self Employed",
        "title": "Software Developer",
        "location": "Mooresville,NC",
        "textLocation": "Mooresville,NC",
        "dates": "Aug 2013",
        "description": "Designed,developed an Android application " +
            "and published in Google Play Store."
    }, {
        "employer": "CMC Ltd (A TATA Enterprise)",
        "title": "Android Developer",
        "location": "Bengaluru, Karnataka, India",
        "textLocation": "Karnataka,India",
        "dates": "Jan 2010 - Mar 2012",
        "description": "Maintenance of DMS application to support the operation" +
            "of released applications by providing post-implementation programming and " +
            "or configuration support for enhancements to new or packaged-based systems" +
            "and applications providing systems incident support as needed."
    }]
};

//Create project object using JSON
var projects = {
    "projects": [{
        "title": "Portfolio Sites",
        "dates": "April 2016 - Current",
        "description": "Developed portfolio sites and blog according to the given spec.",
        "images": ["images/logo.png"]
    }, {
        "title": "Resume",
        "dates": "April 2016 - ",
        "description": "Developed online resume.",
        "images": ["images/logo.png"]

    }, {
        "title": "DND Application",
        "dates": "August 2013",
        "description": "Designed and developed an Android application",
        "images": ["images/dnd.webp"]
    }]
};

//Display work object
work.display = function () {
    "use strict";
    //for (var job in work.jobs) {
    var total_jobs = work.jobs.length;
    for (var i = 0; i < total_jobs; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        //var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].textLocation);
        var formattedDatesLocation = formattedDates + formattedLocation;
        $(".work-entry:last").append(formattedDatesLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

//Display project object
projects.display = function () {
    // for (var project in projects.projects) {
  	var total_projects = projects.projects.length;
    for (var j = 0; j < total_projects; j++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[j].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[j].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[j].description);
        $(".project-entry:last").append(formattedDescription);

        //for (image in projects.projects[project].images) {
        var total_images = projects.projects[j].images.length;
            for (var i = 0; i < total_images; i++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[j].images[i]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};
projects.display();

//Display Education

education.display = function () {
    //for (var school in education.schools) {
  	var total_schools = education.schools.length;
    for (var j = 0; j < total_schools; j++) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[j].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[j].degree);
        $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[j].dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[j].city);
        $(".education-entry:last").append(formattedLocation);
        var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[j].majors);
        $(".education-entry:last").append(formattedmajor);
    }
    $("#education").append(HTMLonlineClasses);
    // for (var onlineCourse in education.online) {
    var total_online_courses = education.onlineCourses.length;
    for (var i = 0; i < total_online_courses; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedonlineUrl);
    }
};
education.display();

// Display Map

$("#mapDiv").append(googleMap);

// Display international name button
function inName(name) {
    var newName = name;
    var names = name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    newName = names.join(" ");
    return newName;
}
inName(bio.name);
$("#main").append(internationalizeButton);