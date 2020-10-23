$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const answer1 = $("input:radio[name=q1]:checked").val();
    const answer2 = $("input:radio[name=q2]:checked").val();
    const answer3 = $("input:radio[name=q3]:checekd").val();
    const answer4 = $("input:radio[name=q4]:checked").val();
    
    let cSharp = 0;
    let javaScript = 0;
    let go = 0;

    if(answer1 && answer2 && answer3 && answer4) {
      $("#warning").hide();
      
    }

  
    event.preventDefault();
  });
});