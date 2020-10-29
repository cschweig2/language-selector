$(document).ready(function() {
  $("form#quiz").submit(function(event) {

    const answer1 = $("input:radio[name=q1]:checked").val();
    const answer2 = $("input:radio[name=q2]:checked").val();
    const answer3 = $("input:radio[name=q3]:checked").val();
    const answer4 = $("input:radio[name=q4]:checked").val();
    const answer5 = $("input:radio[name=q5]:checked").val();

    let cSharp = 0;
    let javaScript = 0;
    let go = 0;
    
    if (answer1 === "cSharp") {
      cSharp++;
    }
    if (answer1 === "javaScript") {
      javaScript++;
    }
    if (answer1 === "go") {
      go++;
    }
    if (answer2 === "cSharp") {
      cSharp++;
    }
    if (answer2 === "javaScript") {
      javaScript++;
    }
    if (answer2 === "go") {
      go++;
    }
    if (answer3 === "cSharp") {
      cSharp++;
    }
    if (answer3 === "javaScript") {
      javaScript++;
    }
    if (answer3 === "go") {
      go++;
    }
    if (answer4 === "cSharp") {
      cSharp++;
    }
    if (answer4 === "javaScript") {
      javaScript++;
    }
    if (answer4 === "go") {
      go++;
    }
    if (answer5 === "cSharp") {
      cSharp++;
    }
    if (answer5 === "javaScript") {
      javaScript++;
    }
    if (answer5 === "go") {
      go++;
    }

    if ((cSharp + javaScript + go) < 5) {
      $("#result").hide();
      $("#warning").show(200);
    } else {
      if (cSharp >= 3 || ((cSharp === javaScript || cSharp === go) && cSharp > 1)) {
        $("#result").show(200);
        $("#result-text").text("C#");
        $("#warning").hide();
      } else if (javaScript >= 3 || (javaScript === go && javaScript > 1)) {
        $("#result").show(200);
        $("#result-text").text("JavaScript");
        $("#warning").hide();
      } else if (go >= 3) {
        $("#result").show(200);
        $("#result-text").text("Go");
        $("#warning").hide();
      }
    }
    event.preventDefault();
  });
});