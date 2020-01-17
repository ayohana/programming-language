$(document).ready(function() {
  $("form#questionsList").submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($("input:radio[name=question1radios]:checked").val());
    var answer2 = parseInt($("input:radio[name=question2radios]:checked").val());
    var answer3 = parseInt($("input:radio[name=question3radios]:checked").val());
    var answer4 = parseInt($("input:radio[name=question4radios]:checked").val());
    var answer5 = parseInt($("input:radio[name=question5radios]:checked").val());
    alert(answer1+answer2+answer3+answer4+answer5);


  });
});