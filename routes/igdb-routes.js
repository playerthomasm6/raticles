const { response } = require("express");

module.exports = function(app) {


  var settings = {
    "url": "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Client-ID": "wtw0hnai6i7njmhspijabmmom6yyh5",
      "Authorization": "Bearer jpkrnm1ejzzqfhl1c2wu2wtfb11w2w",
      "Content-Type": "text/plain",
      // "Cookie": "__cfduid=d95ef25d3998aca8e5108fbbfb75328e11608079973"
    },
    "data": 'search "Madden"; fields name,age_ratings,aggregated_rating,artworks,franchise,first_release_date,follows,franchises,hypes,involved_companies,parent_game,platforms,rating,release_dates,storyline,summary,videos;',
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}