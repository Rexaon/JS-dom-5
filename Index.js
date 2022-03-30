function Knap() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
/* */

function bildeBytt() {

  if (document.getElementById("klikkBytte").src == "Bilder/images/try_again.png") 
  {
      document.getElementById("klikkBytte").src = "Bilder/images/winner.png";
  }
  else 
  {
      document.getElementById("klikkBytte").src = "Bilder/images/try_again.png";
  }
}
