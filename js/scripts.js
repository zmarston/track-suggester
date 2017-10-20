$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var q1 = $("#q1").val();
    var q2 = $("#q2").val();
    var q3 = $("#q3").val();
    var q4 = $("#q4").val();
    var q5 = $("#q5").val();
    var name = $("#name").val();

    if (name === ""){
      $("input#name").addClass("is-invalid");
      $(".invalid-feedback").show();
    } else if (q1 === "css" && q5 === "css" || q1 === "css" && q2 === "css" || q5 === "css" && q2 === "css" || q5 === "css" && q3 === "css"){
      $("#cssimage, #adviceCss").fadeIn(2000);
      $("#javaimage, #csharpimage, #quiz").hide();
      $(".name").text(name);
    } else if (q1 === "java" && q5 === "java" || q1 === "java" && q3 === "java" || q5 === "java" && q2 === "java" || q5 === "java" && q3 === "java"){
      $("#javaimage, #adviceJava").fadeIn(2000);
      $("#cssimage, #csharpimage, #quiz").hide();
      $(".name").text(name);
    } else {
      $("#csharpimage, #adviceCsharp").fadeIn(2000);
      $("#javaimage, #cssimage, #quiz").hide();
      $(".name").text(name);
    }


  });
  $("#home").click(function(event){
    event.preventDefault();
    $("#quiz").fadeIn(1000);
    $("#javaimage, #csharpimage, #cssimage, #adviceCss, #adviceJava, #adviceCsharp").hide();
  });
});
