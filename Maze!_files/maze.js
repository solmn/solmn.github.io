$(function(){
  $("div#emo").css("display", "none");
  let isStart = false;

  $( "#maze .boundary" ).mouseover(()=> {
    if(isStart) {
      isStart = false;
      $(".boundary").addClass('youlose');
      $("#status").text("You loose!!");
      $("div#emo").css("display", "block");
      $("div#emo #emoji").attr("src","images/fail.png");
    }
  });

  $( ".boundary" ).mouseleave(()=> {
    if (isStart) {
      $("div#emo").css("display", "none");
      $(".boundary").removeClass('youlose');
    }
  });

  $("#start").click(startGame);

  $("#end").mouseover(()=>{
    if (isStart) {
      $("div#emo #emoji").attr("src","images/win.png");
      $("#status").text("You win!:]");
      isStart = false;
      $("div#emo").css("display", "block");
    }
  });

  $("#maze").mouseleave(gameOver);

  function startGame() {
    isStart = true;
    $("#status").text("GOOD LUCK!!!");
    $(".boundary").removeClass('youlose');
    $("div#emo").css("display", "none");
  }
  function gameOver() {
    if(isStart) {
      isStart = false;
      $(".boundary").addClass('youlose');
      $("#status").text("You loose!!");
      $("div#emo").css("display", "block");
      $("div#emo #emoji").attr("src","images/fail.png");
    }
  }

});
