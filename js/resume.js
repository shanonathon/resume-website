
$("#ssbutton").on("click", function(){
  $("#t2info").hide()
  $("#t1info").hide()
  $("#geniusinfo").hide()
  $("#ssinfo").fadeToggle();                 // .fadeToggle() // .slideToggle()
});

$("#t2button").on("click", function(){
  $("#ssinfo").hide()
  $("#t1info").hide()
  $("#geniusinfo").hide()
  $("#t2info").fadeToggle();                 // .fadeToggle() // .slideToggle()
});

$("#t1button").on("click", function(){
  $("#ssinfo").hide()
  $("#t2info").hide()
  $("#geniusinfo").hide()
  $("#t1info").fadeToggle();                 // .fadeToggle() // .slideToggle()
});

$("#applebutton").on("click", function(){
    $("#showjob").fadeToggle()
    $("#ssinfo").hide()
$("#geniusinfo").hide()
  $("#t2info").hide()
  $("#t1info").hide();

$("#geniusbutton").on("click", function(){
  $("#ssinfo").hide()
  $("#t1info").hide()
  $("#t2info").hide()
  $("#geniusinfo").fadeToggle();                 // .fadeToggle() // .slideToggle()
});

                     // .fadeToggle() // .slideToggle()
});
