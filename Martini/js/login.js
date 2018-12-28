
(function(){
  "use strict";

  var closeBtn = document.querySelector(".close");
  var modal = document.querySelector(".modal");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var submit = document.querySelector(".submit");
  var title = document.querySelector(".title")
  var register = document.querySelector(".icon-user");
  var body = document.querySelector("body");


  register.addEventListener("click", function(){
    modal.style.display = "block";
    register.style.display = "none"
    body.style.background = "rgba(0,0,0,0.5)";
    title.classList.add("bounce");
   ;
  });

  closeBtn.addEventListener("click", function(){
    reset();
    title.classList.remove("bounce");

  })

  submit.addEventListener("click", function(e){
    e.preventDefault();
    reset();
  })


  function reset(){
    modal.style.display = "none";
    body.style.background = "#fff";
    name.value = "";
    email.value = "";
    register.style.display = "block"
  }

})();
