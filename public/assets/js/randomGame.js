// RANDOM GAME BUTTON
// On Click Event to launch a random game
// On Click for search button
function randomGame() {

    var randomID = Math.floor(Math.random() * (135431 + 1 ));

    console.log(randomID)
    var randomNum = randomID;

    randomNumber = JSON.stringify(randomNum)

    var settings = {
      "url": "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/",
      "method": "POST",
      "data": `fields name, genres.name, age_ratings.*, artworks.*, cover.*, platforms, summary; where id >= ${randomNumber}; limit 1;`,
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

    
    
    