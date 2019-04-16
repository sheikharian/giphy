// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var input= $("#search-term").val();
    $.ajax({
    url: "https://api.giphy.com/v1/gifs/search?q=" + input + "&rating=pg&api_key=dc6zaTOxFJmzC",
    method: "GET",
  success: function(response) {
    var number=Math.floor(Math.random()*response.data.length);
    var pic_url = response.data[number].images.original.url;
    $("#image").append("<img src=" + pic_url + ">")
  },
});



});

