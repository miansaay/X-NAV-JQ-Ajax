
$(document).ready(function() {

  p1 = $.ajax({
            type:"GET",
            url: "texto1.txt",
            cache: false});

  p1.done(function(text) {
      $("#texto1").html(text);
  });
 
  $("#button").click(function(){  
    p2= $.ajax({
            type:"GET",
            url: "texto2.txt",
            cache: false});
    p2.done(function(text) {
      $("#texto2").html(text);
    })

  });
  


});






