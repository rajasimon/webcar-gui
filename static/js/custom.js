// We need run this code when all document is loaded
window.onload = function(e) {

  function get_or_post_push(clicked, play) {
    // Used Google Fetch API. In this case I used localhost url 
    var url = '/webcar/mb'
    fetch(url, 
      {
        mode: 'cors',
        method: 'post',
          headers: {  
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
          },
          body: 'clicked='+ clicked + '&play='+ play
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

  
  // touch event handler for media-player
  var mediaElement = document.getElementById('media-player');
  play = true

  // capture click event for media-player
  mediaElement.addEventListener("click", function(event) {
    console.log('Medid player clicked')
    var clicked = "meida"

    if (play) {
      status = "pause"
      play = false
    } else {
      status = "play_arrow"
      play = true
    }

    var new_i_element = document.createElement('i');
    new_i_element.setAttribute('class', 'material-icons md-48 mdl-icon-position md-dark');
    new_i_element.innerHTML = status;

    var replace_i_element = event.target.getElementsByClassName("material-icons")[0];
    replace_i_element.remove();

    event.target.appendChild(new_i_element);

    get_or_post_push(clicked, play);
  }, false);
};
