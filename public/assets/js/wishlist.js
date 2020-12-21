
$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.Email);
    });
  });
 
 
  
 function wishlist(response) {

    // Grab HTML container for results
    let resultsContainer = $("#wishResults");
    resultsContainer.empty();
   
    // Create For loop to post each result
    for (i = 0; i < response.length; i++) {
      let idName = response[i].name.trim()
      let gameTitle = `<div class="row resultsSection">
  
      <div class="col-sm-2">
          <img src="${response[i].cover.url}" alt="selection ${response[i].name}">
      </div>
  
      <div class="col-sm-3">
          <h3>${response[i].name}</h3>
      </div>
  
       <div class="col-sm-2">
          <button type="submit" class="btn btn-info moreInfo" id="${idName}Info" data-a="${idName}">Info</button>
      </div>
      
      <div class="col-sm-2">
          <button type="submit" class="btn btn-primary removeGame" id="${idName}remove" data-a="${idName}">Remove</button>
      </div>

      <div class="col-sm-2">
          <img src="${response[i].cover.url}" alt="selection ${i}">
      </div>
  
      <div class="col-sm-3">
          <h3>${response[i].name}</h3>
      </div>
  
       <div class="col-sm-2">
          <button type="submit" class="btn btn-info moreInfo" id="${idName}Info" data-a="${idName}">Info</button>
      </div>
      
      <div class="col-sm-2">
          <button type="submit" class="btn btn-primary removeGame" id="${idName}remove" data-a="${idName}">Remove</button>
      </div>

      <div class="col-sm-2">
          <img src="${response[i].cover.url}" alt="selection ${i}">
      </div>
  
      <div class="col-sm-3">
          <h3>${response[i].name}</h3>
      </div>
  
       <div class="col-sm-2">
          <button type="submit" class="btn btn-info moreInfo" id="${idName}Info" data-a="${idName}">Info</button>
      </div>
      
      <div class="col-sm-2">
          <button type="submit" class="btn btn-primary removeGame" id="${idName}remove" data-a="${idName}">-Remove</button>
      </div>

      <div class="col-sm-2">
          <img src="${response[i].cover.url}" alt="selection ${i}">
      </div>
  
      <div class="col-sm-3">
          <h3>${response[i].name}</h3>
      </div>
  
       <div class="col-sm-2">
          <button type="submit" class="btn btn-info moreInfo" id="${idName}Info" data-a="${idName}">Info</button>
      </div>
      
      <div class="col-sm-2">
          <button type="submit" class="btn btn-primary removeGame" id="${idName}remove" data-a="${idName}">Remove</button>
      </div>

  </div>`
      resultsContainer.append(gameTitle);
    }
  };

  function getGameInfo(gameName) {
    console.log("you want more information")
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
    
        console.log("wow look at all this info" + response[0])
    
      });
    };

    $(document).on("click", "button.removeGame", function (event) {
        console.log($(this).data('a'));
        var gameName = $(this).data('a').toLowerCase();
        console.log(gameName);
        removeGame(gameName);
      });

      $(document).on("click", "button.moreInfo", function (event) {
        console.log($(this).data('a'));
        var gameName = $(this).data('a').toLowerCase();
        console.log(gameName);
        getGameInfo(gameName);
      });