/*authorname Tarun Rana
Student no-300871205
course- COMP125*/


var texts = [
    "Tarun Rana",
    "My name is Tarun Rana I previously studied at B.C.M School in ludhiana.I am a student in the software engineering technician program at centennial college.Previously I studied at B.C.M School in Ludhiana,Punjab,India.I drink a lot of water because they said it is very useful for your body.My preffered brand or mobile devices is Apple",
    "My projects",
    "Project 1: Property sale",
    "I did this project during my last semmester in COMP 213 This was a term project which in our course and is very useful for this course.",
    "Project 2: menu form",
    "I did project during my last semester at Centennial College in COMP213. This project is based on form method which describes the different brands of mobiles and their prices.",
    "Project 3: Banbury tennis club",
    "This project is an application form which will allow people to join the tennis club",
];


(function(){  
    
    var ids = [];
    ids[0] = document.getElementById('firstTitle');
    ids[1] = document.getElementById('content1');
    ids[2] = document.getElementById('title2');
    ids[3] = document.getElementById('Title1');
    ids[4] = document.getElementById('Content1');
    ids[5] = document.getElementById('Title2');
    ids[6] = document.getElementById('Content2');
    ids[7] = document.getElementById('Title3');
    ids[8] = document.getElementById('Content3');
    
    
    for (var i = 0; i < ids.length; i++) {
        if (ids[i]) {
            ids[i].textContent = texts[i];
        }
    }
    
})();


  //create  a link for sending form
   var sendButton = document.getElementById("sendButton");
   
  /* sendButton.addEventListener("click", sendButtonClick);
   
   function sendButtonClick(event) {
       console.log("pressed!");
   }*/
   // creating link to all the field
   var FirstName = document.getElementById("firstName");
   var LastName = document.getElementById("lastName");
   var email = document.getElementById("email");
   var Contact = document.getElementById("contactNumber");
   var Message = document.getElementById("message");

   //a refrence to form
   var contactForm = document.getElementById("Form");
    
    contactForm.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("First Name: " + FirstName.value);
        console.log("Last Name: " + LastName.value);
        console.log("Email: " + email.value);
        console.log("Contact Number: " + Contact.value);
        console.log("Message: " + Message.value);
        contactForm.reset();
    });