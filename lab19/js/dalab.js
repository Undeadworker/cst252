// Pick an URL from the numbers API: http://numbersapi.com/
var url = "http://numbersapi.com/random/trivia";
// When a user clicks the button
$("#press").click(getAjax);
// use a jQuery AJAX call to fetch output from the numbers API
function getAjax(){
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request
      url: url,
      // The data to send (will be converted to a query string)
      // data: { id: 123},
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      // dataType : "json",
  })
  // If the request succeeds
  .done(function( data ) {
      //alert("Success!");
      console.log(data);
      // Insert the output in the output div
      $("#output").prepend("<p>" + data);
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
  });
}
