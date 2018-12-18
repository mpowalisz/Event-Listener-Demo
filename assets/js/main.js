$(document).ready(function() {
  // For loop to loop over images
  for (i = 1; i < 5; i++) {
    // Assign a random value
    var random = Math.floor(Math.random() * 11 + 1);
    $("#img-" + i).attr("value", random);
  }

  // On click event listener for class of img
  $("[id^=img-]").on("click", function() {
    console.log($(this));
    var imgVal = $(this).val();
    console.log("The value of the image was " + imgVal);
  });
});
