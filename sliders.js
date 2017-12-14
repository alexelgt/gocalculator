function sliders(){

  oninput = function() {
  	$(".Level_min").html("");$(".Level_max").html("");

  	$(".Level_min").html($('.Level_min').html() + document.getElementById("Level").valueLow);
    $(".Level_max").html($('.Level_max').html() + document.getElementById("Level").valueHigh);
  }


}
