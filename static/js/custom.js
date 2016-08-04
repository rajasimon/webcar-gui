// We need run this code when all document is loaded
window.onload = function(e) {

  function get_or_post_push(clicked) {
    // Used Google Fetch API. In this case I used localhost url 
    var url = '/webcar/mb'
    fetch(url, 
      {
        mode: 'cors',
        method: 'post',
          headers: {  
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
          },
          body: 'clicked='+ clicked
      }
    )
    // If the request is fine and server response is OK
    .then(function(response) {
      return response.json()
    })
    // If request is fine and print the parsed json
    .then(function(json) {
      console.log('parsed json', json)
    })
    // if request is fine and error in parsing
    .catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }
    
    // for debugging and error handling we need console
    console.log("window loaded");

    // Get all elements here
  
  // touch event handler for media-player
  var mediaElement = document.getElementById('media-player');

  // write remaining here

  // capture click event for media-player
  mediaElement.addEventListener("click", function(event) {
    console.log('Medid player clicked')
    var clicked = "meida"
    get_or_post_push(clicked)
  }, false);
};
