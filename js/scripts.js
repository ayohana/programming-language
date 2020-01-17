$(document).ready(function() {
  $("form#questionsList").submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($("input:radio[name=question1radios]:checked").val());
    var answer2 = parseInt($("input:radio[name=question2radios]:checked").val());
    var answer3 = parseInt($("input:radio[name=question3radios]:checked").val());
    var answer4 = parseInt($("input:radio[name=question4radios]:checked").val());
    var answer5 = parseInt($("input:radio[name=question5radios]:checked").val());
    var score = answer1 + answer2 + answer3 + answer4 + answer5;
    alert(score);

    if (score >= 40) {
      alert("JS");
    } else if (score >= 25 && score < 40) {
      alert("Ruby");
    } else if (score <= 15) {
      alert("C#");
    } else {
      alert("please retry");
    }


  });
});