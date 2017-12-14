function sliders(){

  oninput = function() {
  	$(".Level_min_CP").html("");$(".Level_max_CP").html("");$(".Level_min").html("");$(".Level_max").html("");

    $(".Level_min_CP").html($('.Level_min_CP').html() + document.getElementById("Level_CP").valueLow);
    $(".Level_max_CP").html($('.Level_max_CP').html() + document.getElementById("Level_CP").valueHigh);
    $(".Level_min").html($('.Level_min').html() + document.getElementById("Level").valueLow);
    $(".Level_max").html($('.Level_max').html() + document.getElementById("Level").valueHigh);
  }


}
