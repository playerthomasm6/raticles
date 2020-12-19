// const { json } = require("sequelize/types");
function searchGame() {

var searchGames = $('#search-input').val()
searchGamesString = JSON.stringify(searchGames)
console.log(searchGames)
//GET https://<your-request-url>/games/?search=zelda&fields=id,name

var settings = {
  "url": "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/",
  "method": "POST",
  "data": 'search' + searchGamesString + '; fields name, age_ratings;', 
  "timeout": 0,
  "headers": {
    "Client-ID": "wtw0hnai6i7njmhspijabmmom6yyh5",
    "Authorization": "Bearer jpkrnm1ejzzqfhl1c2wu2wtfb11w2w",
    "Accept": "application/json",
    // "Cookie": "__cfduid=d95ef25d3998aca8e5108fbbfb75328e11608079973"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response[0].age_ratings[0])
  console.log(response);


  
  let newElem1 = ("#search-results");
  let gameResponse = `<p class="game-result"> ${response[0].name} and this is the platform ${response[0].platform} </p>`
  console.log(gameResponse);
  $(newElem1).append(gameResponse);
  
});
}

$("#search-time").on("click", function(event) {
  event.preventDefault();
  searchGame()
});

function gameTitlePoster(response) {
  for (i =0; i < response.length; i++) {
    let newElem1 = ("#search-results");
  let gameResponse = `<p class="game-result"> ${response[i].storyline}</p>`
  console.log(gameResponse);
  $(newElem1).append(gameResponse);
  }
}


//740?fields=id