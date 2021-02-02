// RANDOM GAME BUTTON
// On Click Event to launch a random game
// On Click for search button
function randomGame() {

  var settings = {
    "url": "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/",
    "method": "POST",
    "data": `fields name, summary; where id >= [my_random_id]; limit 1;`,
    "timeout": 0,
    "headers": {
      "Client-ID": "wtw0hnai6i7njmhspijabmmom6yyh5",
      "Authorization": "Bearer jpkrnm1ejzzqfhl1c2wu2wtfb11w2w",
      "Accept": "application/json",
      // "Cookie": "__cfduid=d95ef25d3998aca8e5108fbbfb75328e11608079973"
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response)
  });
};


