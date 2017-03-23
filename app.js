$(document).ready(function(){

document.getElementById("btnPass").addEventListener("click", function(e){
  var pass = document.getElementById("pass");
  if((pass.getAttribute("type")) == "password"){
      $(this).text("Hide password");
      pass.setAttribute("type", "text");
  } else{
      $(this).text("Show password");
      pass.setAttribute("type", "password");
  }
});

document.getElementById("btnPassConf").addEventListener("click", function(e){
  var passConf = document.getElementById("passConf");
  if((passConf.getAttribute("type")) == "password"){
      $(this).text("Hide password");
      passConf.setAttribute("type", "text");
  } else{
      $(this).text("Show password");
      passConf.setAttribute("type", "password");
  }
});

});
