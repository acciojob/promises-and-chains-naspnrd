//your JS code here. If required.
// Add event listener to the button with id "btn"
document.getElementById("btn").addEventListener("click", function() {
 // Get form inputs
 const ageInput = document.getElementById("age");
 const nameInput = document.getElementById("name");


 // Get values from inputs
 const age = ageInput.value; // Convert age input value to integer
 const name = nameInput.value; // Get name input value


 // Validate inputs
 if (!age || !name) { // Check if age or name is empty
   alert("Please enter valid details"); // Show alert if any field is empty
   return; // Stop further execution if validation fails
 }


 // Create a promise for form submission handling
 const submissionPromise = new Promise((resolve, reject) => {
   // Simulate asynchronous processing with setTimeout
   setTimeout(() => {
     if (age >= 18) { // Check if age is 18 or above
       // Resolve the promise if age is 18 or above
       resolve(`Welcome, ${name}. You can vote.`);
     } else {
       // Reject the promise if age is below 18
       reject(`Oh sorry ${name}. You aren't old enough.`);
     }
   }, 4000); // Simulating 4 seconds delay
 });


 // Handling promise resolution
 submissionPromise
   .then(message => {
     // Show success message in alert
     alert(message);
   })
   .catch(error => {
     // Show error message in alert
     alert(error);
   });
});
