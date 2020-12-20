const gameInfo = () =>  {
  
  function gameTitlePoster(response) {
    for (i =0; i < response.length; i++) {
     let newElem1 = ("#search-time");
    let gameResponse = `<p class="game-result"> ${response[0].name}</p>`
    console.log(gameResponse);
    $("#search-results-name").append(gameResponse);
    }
  }
  
  function gamePicture(response) {
    for (i =0; i < response.length; i++) {
      let newElem1 = ("#search-results");
     let gameResponse = `<p class="game-result"> ${response[0].artworks}</p>`
     console.log(gameResponse);
     $("#search-results-name").append(gameResponse);
    }
  }
  
  function gameCover(response) {
    for (i =0; i < response.length; i++) {
      let newElem1 = ("#search-results");
     let gameResponse = `<p class="game-result"> ${response[0].cover}</p>`
     console.log(gameResponse);
     $("#search-results-name").append(gameResponse);
    }
  }
  
  function gamePlatform(response) {
    for (i =0; i < response.length; i++) {
      let newElem1 = ("#search-results");
     let gameResponse = `<p class="game-result"> ${response[0].platforms}</p>`
     console.log(gameResponse);
     $("#search-results-name").append(gameResponse);
    }
  }
  
  
};

module.exports = gameInfo