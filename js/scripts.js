
$(document).ready(function(){
  $("form#quiz").submit(function(evemt){
    event.preventDefault();

    var q1 = $("#q1").val();
    var q5 = $("#q5").val();

    if(q1 === "css" && q5 === "css" || q1 === "css" && q2 === "css" || q5 === "css" && q2 === "css" || q5 === "css" && q3 === "css"){
      alert("css");
    }else if (q1 === "java" && q5 === "java" || q1 === "java" && q3 === "java" || q5 === "java" && q2 === "java" || q5 === "java" && q3 === "java") {
      alert("java");
    }
    else {
      alert("C#");
    }
  })
});
