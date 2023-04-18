
      window.addEventListener("scroll", reveal);

      function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;

          if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

      function submitForm() {
        // Change button color
        var button = document.getElementById("submit-btn");
        button.style.backgroundColor = "#CD395D";

        // Change button text
        button.value = "This movie fails the test";
      }

      function submitForm2() {
        var button = document.getElementById("submit-btn2");
        button.style.backgroundColor = "#FBC24C";

        // Change button text
        button.value = "This movie partially passes the test";
      }

      function submitForm3() {
        var button = document.getElementById("submit-btn3");
        button.style.backgroundColor = "#477C6C";

        // Change button text
        button.value = "This movie fully passes the test";
      }

      function checkAnswers() {
        // Get all the questions
        var questions = document.querySelectorAll("form > div");
        var numCorrect = 0;

        // Loop through each question
        questions.forEach(function (question) {
          // Get the selected answer
          var selectedAnswer = question.querySelector("input:checked");
          // Get the correct answer
          var correctAnswer = question.querySelector(".correct-answer");
          // Get the images for each answer
          var images = question.querySelectorAll("img");

          // Add a class to the selected image based on whether it's correct or not
          if (
            selectedAnswer.value === "yes" &&
            selectedAnswer.nextSibling === correctAnswer
          ) {
            selectedAnswer.nextSibling.classList.add("correct");
            numCorrect++;
          } else if (
            selectedAnswer.value === "no" &&
            selectedAnswer.previousSibling === correctAnswer
          ) {
            selectedAnswer.previousSibling.classList.add("correct");
            numCorrect++;
          } else {
            images.forEach(function (image) {
              if (image !== correctAnswer) {
                image.classList.add("incorrect");
              }
            });
          }
        });

        // Display the total number of correct answers
        var totalCorrect = document.querySelector("#total-correct");
        totalCorrect.textContent = "Total correct: " + numCorrect;
      }
    