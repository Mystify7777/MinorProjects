document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission
      
      // Perform custom validation
      if (validateForm()) {
        // If form is valid, submit the data
        submitForm();
      }
    });
  
    function validateForm() {
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const numberInput = document.getElementById('number');
  
      // Check if email is valid
      if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false;
      }
  
      // Check if age is within range
      if (numberInput.validity.rangeOverflow || numberInput.validity.rangeUnderflow) {
        alert('Please enter a valid age between 18 and 120.');
        return false;
      }
  
      return true;
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function submitForm() {
      // You can submit the form data here using AJAX or any other method
      alert('Form submitted successfully!');
      form.reset(); // Reset the form after submission
    }
  });
  