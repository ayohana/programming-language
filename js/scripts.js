$(document).ready(function() {
  $("form#questionsList").submit(function(event) {
    event.preventDefault();
    var answer1 = $("input:radio[name=question1radios]:checked").val();
    var answer2 = $("input:radio[name=question2radios]:checked").val();
    var answer3 = $("input:radio[name=question3radios]:checked").val();
    alert(answer1 + answer2 + answer3);

    
  });
});