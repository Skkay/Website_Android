function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);

  rgb1 = Math.floor(Math.random() * (max - min)) + min;
  rgb2 = Math.floor(Math.random() * (max - min)) + min;
  rgb3 = Math.floor(Math.random() * (max - min)) + min;

  color = "rgb("+rgb1+","+rgb2+","+rgb3+")";

  $("#JQcolor").css("color", color)
}

$(function() {


});
