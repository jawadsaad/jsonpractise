var myRequest = new XMLHttpRequest();
loadQuiz();
    
function loadQuiz() {
    myRequest.open("GET", "https://raw.githubusercontent.com/jawadsaad/jsonpractise/master/quizSimple.json", true);
    
    myRequest.onload = function() {
        if(this.readyState == 4 && this.status == 200) {
            var myData = JSON.parse(this.responseText);
            
            for (var i = 1; i < 4; i++) {
                document.getElementById('q' + i).innerHTML = myData.question[i-1];
                
                document.getElementById('q' + i + "AnswerList").innerHTML = "<li>" + myData.choices[i-1][0] + "</li>" + "<li>" + myData.choices[i-1][1] + "</li>" + "<li>" + myData.choices[i-1][2] + "</li>" + "<li>" + myData.choices[i-1][3] + "</li>";
            }
        }
    }
    
    myRequest.send();
}

function submitQuiz(a1, a2, a3) {
    myRequest.open("GET", "https://raw.githubusercontent.com/jawadsaad/jsonpractise/master/quizSimple.json", true);
    
    myRequest.onload = function() {
        if(this.readyState == 4 && this.status == 200) {
            var myData = JSON.parse(this.responseText);
            
            document.getElementById('youranswers').innerHTML = "Your answer for each question was: " + "<br /><br />" + "Question 1: " + myData.choices[0][a1 - 1] + "<br />" + "Question 2: " + myData.choices[1][a2 - 1] + "<br />" + "Question 3: " + myData.choices[2][a3 - 1] + "<br /><br /><br />";
            
            document.getElementById('actualanswers').innerHTML = "The correct answer for each question was: " + "<br /><br />" +"Question 1: " + myData.answer[0] + "<br />" + "Question 2: " + myData.answer[1] + "<br />" + "Question 3: " + myData.answer[2] + "<br /><br /><br />";
            
            var score = 0;
            
            if (myData.answer[0] === myData.choices[0][a1 - 1]) {
                score += 33.3;
            }
            
            if (myData.answer[1] === myData.choices[1][a2 - 1]) {
                score += 33.3;
            }
            
            if (myData.answer[2] === myData.choices[2][a3 - 1]) {
                score += 33.3;
            }
            
            document.getElementById('result').innerHTML = "You scored " + Math.round(score) + "%";
        }
    }
    
    myRequest.send();
}

function startNewQuiz() {
    document.getElementById('q1').value = '';
    document.getElementById('youranswers').innerHTML = '';
    document.getElementById('actualanswers').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}

/* THIS IS HOW I INTENDED TO START THIS QUIZ BEFORE CHANGING MY MIND AND DECIDING TO USE A JSON */

//function Quiz(question, choices, answer, score) {
//    this.question = question,
//    this.choices = choices,
//    this.answer = answer,
//    this.score = score
//};