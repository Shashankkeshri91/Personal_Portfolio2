var typed = new Typed('#element', {
  strings: ['Traveller', 'Cricket Player','Cosmos Lover','Web Developer.'],
  typeSpeed: 40
});

function sendEmail() {
  // Get input values from the form
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var number = document.getElementById("Number").value;
  var message = document.getElementById("Message").value;

  // Configure your email settings
  Email.send({
      SecureToken: "d1da592f-3e8c-44e5-9985-3b7cf489d2c1",
      To: "shashankkeshri91109@gmail.com", // Replace with your email address
      From: email,
      Subject: "New Message from Contact Form",
      Body: "Name: " + name + "<br>Email: " + email + "<br>Number: " + number + "<br>Message: " + message
  }).then(function(response) {
      if (response === "OK") {
          alert("Email sent successfully!");
      } else {
          alert("Email failed to send. Please try again later.");
      }
  });
}
sendEmail()

function aboutSlide(){
  
}