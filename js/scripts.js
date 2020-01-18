$(document).ready(function() {
  $("form#questionsList").submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($("input:radio[name=question1radios]:checked").val());
    var answer2 = parseInt($("input:radio[name=question2radios]:checked").val());
    var answer3 = parseInt($("input:radio[name=question3radios]:checked").val());
    var answer4 = parseInt($("input:radio[name=question4radios]:checked").val());
    var answer5 = parseInt($("input:radio[name=question5radios]:checked").val());
    var score = answer1 + answer2 + answer3 + answer4 + answer5;
    // Activate code below to check the total score:
    // alert(score);

    if (score >= 40) {
      $("#quizResult").text("Javascript");
      $("#resultInvalid").hide();
      $("#resultRuby").hide();
      $("#resultCsharp").hide();
      $("#resultJS").show();
    } else if (score >= 25 && score < 40) {
      $("#quizResult").text("Ruby");
      $("#resultInvalid").hide();
      $("#resultRuby").show();
      $("#resultCsharp").hide();
      $("#resultJS").hide();
    } else if (score < 25) {
      $("#quizResult").text("C#");
      $("#resultInvalid").hide();
      $("#resultRuby").hide();
      $("#resultCsharp").show();
      $("#resultJS").hide();
    } else {
      $("#quizResult").text("who-knows-which");
      $("#resultInvalid").show();
      $("#resultRuby").hide();
      $("#resultCsharp").hide();
      $("#resultJS").hide();
    }
  });
});