$(document).ready(function() {
  console.log("test test");
  $( ".textArea" ).keyup(function(key) {
    var tweetlength = key.target.value.length;
    //console.log(tweetlength);
    $(".counter").text (140 - tweetlength);
    if (tweetlength > 140 ) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
  });
});
  