$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var q1 = $("#q1").val();
    var q2 = $("#q2").val();
    var q3 = $("#q3").val();
    var q4 = $("#q4").val();
    var q5 = $("#q5").val();

    if (q1 === "css" && q5 === "css" || q1 === "css" && q2 === "css" || q5 === "css" && q2 === "css" || q5 === "css" && q3 === "css"){
      $("#cssimage, #home").show();
      $("#javaimage, #csharpimage, #quiz").hide();
    } else if (q1 === "java" && q5 === "java" || q1 === "java" && q3 === "java" || q5 === "java" && q2 === "java" || q5 === "java" && q3 === "java"){
      $("#javaimage, #home").show();
      $("#cssimage, #csharpimage, #quiz").hide();
    } else {
      $("#csharpimage, #home").show();
      $("#javaimage, #cssimage, #quiz").hide();
    }
  });
  $("#home").click(function(event){
    event.preventDefault();
    $("#quiz").show();
    $("#javaimage, #csharpimage, #cssimage").hide();
  });
});
