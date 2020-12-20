
function searchGame() {

  var searchGames = $("#search-input").val()
  searchGamesString = JSON.stringify(searchGames)
  console.log(searchGames)
  //GET https://<your-request-url>/games/?search=zelda&fields=id,name

  var settings = {
    "url": "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/",
    "method": "POST",
    "data": `fields name, genres.name, age_ratings.*, artworks.*, cover.*, platforms.*; search  ${searchGamesString};`,
    "timeout": 0,
    "headers": {
      "Client-ID": "wtw0hnai6i7njmhspijabmmom6yyh5",
      "Authorization": "Bearer jpkrnm1ejzzqfhl1c2wu2wtfb11w2w",
      "Accept": "application/json",
      // "Cookie": "__cfduid=d95ef25d3998aca8e5108fbbfb75328e11608079973"
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    gameTitlePoster(response);

  });
};

// Function which grabs the response and posts game titles and cover art to html
function gameTitlePoster(response) {

  // Grab HTML container for results
  let resultsContainer = $("#search-results-name");
  resultsContainer.empty();

  // Create For loop to post each result
  for (i = 0; i < response.length; i++) {
    let idName = response[i].name.trim()
    let gameTitle = `<div class="row resultsSection">

    <div class="col-sm-2">
        <img src="${response[i].cover.url}" alt="selection ${i}">
    </div>

    <div class="col-sm-3">
        <h3>${response[i].name}</h3>
    </div>

    <div class="col-sm-2">
        <button type="submit" class="btn btn-primary addLibrary" id="${idName}Library" data-a="${idName}">+ Library</button>
    </div>

    <div class="col-sm-2">
        <button type="submit" class="btn btn-success addWishList" id="${idName}Wish" data-a="${idName}">+ Wishlist</button>
    </div>

    <div class="col-sm-2">
        <button type="submit" class="btn btn-info moreInfo" id="${idName}Info" data-a="${idName}">Info</button>
    </div>

</div>`
    resultsContainer.append(gameTitle);
  }
};

function addLibrary(gameName) {
  var searchGames = gameName
  searchGamesString = JSON.stringify(searchGames)
  console.log(searchGames)
  //GET https://<your-request-url>/games/?search=zelda&fields=id,name

  var settings = {
    "url": "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/",
    "method": "POST",
    "data": `fields name, genres.name, age_ratings.*, artworks.*, cover.*, platforms.*; search  ${searchGamesString};`,
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

    gameTitlePoster(response);

  });
}

function addWishList(gameName) {
  console.log("you added a game to with list")
};

function getGameInfo(gameName) {
  console.log("you want more information")
  var searchGames = gameName
  searchGamesString = JSON.stringify(searchGames)
  console.log(searchGames)
  //GET https://<your-request-url>/games/?search=zelda&fields=id,name

  var settings = {
    "url": "https://limitless-tor-79246.herokuapp.com/cors/https://api.igdb.com/v4/games/",
    "method": "POST",
    "data": `fields name, genres.name, age_ratings.*, artworks.*, cover.*, platforms.*; search  ${searchGamesString};`,
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
    
    console.log("wow look at all this info" + response[0])

  });
};


// On Click for search button
$("#search-time").on("click", function (event) {
  event.preventDefault();
  
  searchGame();
});

// LIBRARY
// On click event to add game to library
$(document).on("click", "button.addLibrary", function (event) {
  console.log($(this).data('a'));
  var gameName = $(this).data('a').toLowerCase();
  console.log(gameName);
  addLibrary(gameName);
});


// WISHLIST
// On click event to add game to wishlist
$(document).on("click", "button.addWishList", function (event) {
  console.log($(this).data('a'));
  var gameName = $(this).data('a').toLowerCase();
  console.log(gameName);
  addWishList(gameName);
});


// INFO
// On click event to get more game info
$(document).on("click", "button.moreInfo", function (event) {
  console.log($(this).data('a'));
  var gameName = $(this).data('a').toLowerCase();
  console.log(gameName);
  getGameInfo(gameName);
});