  // Set up event listener
  document.addEventListener("DOMContentLoaded", function() {
    const answers = {
        answer1: "murder",
        answer2: "detective",
        answer3: "alibi",
        answer4: "plot twist",
        answer5: "victim",
        answer6: "motive",
        answer7: "evidence",
        answer8: "pernicious",
        answer9: "witness",
        answer10: "interrogation"
    };
    
    function validateAnswers(event) {
        event.preventDefault();
        let numCorrect = 0;
        const form = document.getElementById("answer-form");
        for (let i = 0; i < form.elements.length; i++) {
          const element = form.elements[i];
          if (element.tagName === "INPUT") {
            const userAnswer = element.value.toLowerCase();
            const correctAnswer = answers[element.name].toLowerCase();
            const parentDiv = element.parentNode;
            if (userAnswer === correctAnswer) {
              numCorrect++;
              parentDiv.classList.remove("incorrect");
              parentDiv.classList.add("correct");
              element.classList.remove("incorrect");
              element.classList.add("correct")
              console.log('here')
              console.log()
              
            } else {
              parentDiv.classList.remove("correct");
              parentDiv.classList.add("incorrect");
              element.classList.remove("correct");
              element.classList.add("incorrect");
    
            }
          } 
        }
      }
      
    document.getElementById("validate-button").addEventListener("click", validateAnswers);
   
  });
  document.addEventListener("DOMContentLoaded", function() { 
    function showAnswers(event) {
      event.preventDefault();
      const form = document.getElementById("answer-form");
      var span = document.querySelectorAll('span#span')
      console.log(span)
      for (let i = 0; i < span.length; i++) {
        console.log('hola')
        const span1 = span[i];
        span1.classList.add('show')
        span1.classList.remove('hide') 
        console.log('added ')
      }
    }document.getElementById("show-button").addEventListener("click", showAnswers);
  });