document.getElementById('copyBtn1').addEventListener('click', function() {

  var emailText = document.getElementById('gmail').innerText;

  navigator.clipboard.writeText(emailText).then(function() {
    alert('Email copied to clipboard!');
  }, function(err) {
    alert('Failed to copy email');
    console.error('Error copying text: ', err);
  });
});

document.getElementById('copyBtn2').addEventListener('click', function() {
    var emailText = document.getElementById('phn').innerText;

    navigator.clipboard.writeText(emailText).then(function() {
      alert('Email copied to clipboard!');
    }, function(err) {
      alert('Failed to copy email');
      console.error('Error copying text: ', err);
    });
  });
  
  // card Animation


function showMarks(pcid, cgpaid,percentage, cgpa) {

  document.getElementById(pcid).innerText = "Percentage: " + percentage+"%";
  if(cgpa > 0) {
    document.getElementById(cgpaid).innerText = "CGPA: " + cgpa;
  }
  else{
    document.getElementById(cgpaid).innerText = "CGPA: Not Available";

  }

}



// project slider
// Get slider elements
const sliderTrack = document.querySelector('.slider-track');
const cards = document.querySelectorAll('.slider-card');
const totalCards = cards.length;
let currentIndex = 0;


function updateSlider() {
  sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.slider-arrow.right').addEventListener('click', () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to first card
  }
  updateSlider();
});

document.querySelector('.slider-arrow.left').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - 1; 
  }
  updateSlider();
});

// edu slide
const wrk_sliderTrack = document.querySelector('.wrk_slider-track');
const wrk_cards = document.querySelectorAll('.wrk_slider');
const wrk_totalCards = wrk_cards.length;
let wrk_currentIndex = 0;


function wrk_updateSlider() {
  wrk_sliderTrack.style.transform = `translateX(-${wrk_currentIndex * 100}%)`;
}

// Right arrow (Next) click event
document.querySelector('.wrk_slider-arrow.wrk_right').addEventListener('click', () => {
  if (wrk_currentIndex < wrk_totalCards - 1) {
    wrk_currentIndex++;
  } else {
    wrk_currentIndex = 0; 
  }
  wrk_updateSlider();
});

// Left arrow (Previous) click event
document.querySelector('.wrk_slider-arrow.wrk_left').addEventListener('click', () => {
  if (wrk_currentIndex > 0) {
    wrk_currentIndex--;
  } else {
    wrk_currentIndex = wrk_totalCards - 1; 
  }
  wrk_updateSlider();
});


// email_service

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  emailjs.sendForm("service_k72vv9s", "template_dbinjtk", this)
    .then(function() {
      alert("Message sent successfully!");
      // Optionally, clear the form here
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", error);
    });
});
