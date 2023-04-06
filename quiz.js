var questions = ['In which city did Diana, Princess of Wales, died?',
     'What is the boiling point temperature (water)?',
     'Which fruit is associated with Isaac Newton?', 
     'Which actor played Rocky?', 
     'Which animal is not part of the Chinese zodiac?']
var choice_options = [
     ['London','Edinburgh','NY city','Paris'],
     ['50','100','150','200'],
     ['Apple','Pear','Pineapple','Banana'],
     ['Tony Burton','Sylvester Stallone','Harrison Ford','Jason Statham'],
     ['Horse','Dog', 'Cat','Monkey'],
     ]
var answers = ['Paris','100','Apple','Sylvester Stallone', 'Cat']

$(document).ready(function(){

    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery

     var ques = $("<div>").addClass("question");
     var p = $("<p>").addClass("d").text("Q1. "+questions[0]);
     ques.append(p);
     for (var j = 0; j < 4; j++) {
              var label = $("<label>");
              var input = $('<input type="radio" name="q0" value="'+choice_options[0][j]+'">');
              var option = $('<span>'+choice_options[0][j]+'</span>');

              label.append(input).append(option);    
              ques.append(label);
     }
     quizBox.append(ques);

     var ques1 = $("<div>").addClass("question");
     var p1 = $("<p>").addClass("d").text("Q2. "+questions[1]);
     ques1.append(p1);
     for (var j = 0; j < 4; j++) {
              var label1 = $("<label>");
              var input1 = $('<input type="radio" name="q1" value="'+choice_options[1][j]+'">');
              var option1 = $('<span>'+choice_options[1][j]+'</span>');

              label1.append(input1).append(option1);    
              ques1.append(label1);
     }
     quizBox.append(ques1);

     var ques2 = $("<div>").addClass("question");
     var p2 = $("<p>").addClass("d").text("Q3. "+questions[2]);
     ques2.append(p2);
     for (var j = 0; j < 4; j++) {
              var label2 = $("<label>");
              var input2 = $('<input type="radio" name="q2" value="'+choice_options[2][j]+'">');
              var option2 = $('<span>'+choice_options[2][j]+'</span>');

              label2.append(input2).append(option2);    
              ques2.append(label2);
     }
     quizBox.append(ques2);

     var ques3 = $("<div>").addClass("question");
     var p3 = $("<p>").addClass("d").text("Q4. "+questions[3]);
     ques3.append(p3);
     for (var j = 0; j < 4; j++) {
              var label3 = $("<label>");
              var input3 = $('<input type="radio" name="q3" value="'+choice_options[3][j]+'">');
              var option3 = $('<span>'+choice_options[3][j]+'</span>');

              label3.append(input3).append(option3);    
              ques3.append(label3);
     }
     quizBox.append(ques3);

     var ques4 = $("<div>").addClass("question");
     var p4 = $("<p>").addClass("d").text("Q5. "+questions[4]);
     ques4.append(p4);
     for (var j = 0; j < 4; j++) {
              var label4 = $("<label>");
              var input4 = $('<input type="radio" name="q4" value="'+choice_options[4][j]+'">');
              var option4 = $('<span>'+choice_options[4][j]+'</span>');

              label4.append(input4).append(option4);    
              ques4.append(label4);
     }
     quizBox.append(ques4);

    countCorrect = 0;

    $("button").click (function (event){

          var chosen = [];

          for (var i = 0; i < questions.length; i++) {
                var val = $('input[name="q'+i+'"]:checked').val()
                chosen.push(val);
          }

          for (var i = 0; i < questions.length; i++) {
               if (chosen[i] == answers[i]) {
                    countCorrect++;
               }
          }
     $('#quiz-box').find("h2").remove();
    $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    countCorrect = 0;
    }); 

});