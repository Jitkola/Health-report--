document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Access form values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var email = document.getElementById("email").value;
    var report = document.getElementById("report").files[0];
  
    // Perform further validation or processing if needed
  
    // Display the submitted data (example)
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Weight: " + weight);
    console.log("Email: " + email);
    console.log("Report File: " + report.name);
    console.log("Report File Type: " + report.type);
  });
  