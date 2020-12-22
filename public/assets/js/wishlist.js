
$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page

    $.get("/api/WishList").then(function (data) {
        console.log(data)
        let resultsContainer = $("#wishResults");
        for (i = 0; i < data.length; i++) {
            console.log(data[i], "Checking data");
            let idName = data[i].Title;
            let dataId = data[i].id;
            let gameId = data[i].GameId;
            let gameTitle = `<div class="row resultsSection">
      
           <div class="col-sm-2">
               <img src="${data[i].CoverUrl}" alt="selection ${data[i].Title}">
           </div>
      
           <div class="col-sm-3">
               <h3>${data[i].Title}</h3>
           </div>
      
            <div class="col-sm-2">
               <button type="submit" class="btn btn-info moreInfo" id="${idName}Info" data-a="${idName}" data-b="${gameId}" >Info</button>
           </div>
          
           <div class="col-sm-2">
               <button type="submit" class="removeGame btn btn-danger" id="${idName}remove" data-a="${idName}" data-b="${dataId}" >Remove</button>
           </div>
       </div>`
            resultsContainer.append(gameTitle);
        }

    });


    // -------------------------------
    //  ON CLICK for GAME INFO BUTTON
    // -------------------------------
    $(document).on("click", "button.moreInfo", function (event) {
        //$.get("/assets/js/gameinfo.js");
        let Gameid = event.target.dataset["b"];
        var settings = {
            "url": "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/",
            "method": "POST",
            "data": `fields name, genres.name, age_ratings.*, artworks.*, cover.*, platforms.*, summary, storyline, genres.*, screenshots.*; search  ${searchGamesString};`,
            "timeout": 0,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Client-ID": "wtw0hnai6i7njmhspijabmmom6yyh5",
                "Authorization": "Bearer jpkrnm1ejzzqfhl1c2wu2wtfb11w2w",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:8080",
                // "Cookie": "__cfduid=d95ef25d3998aca8e5108fbbfb75328e11608079973"
            },
        };


        console.log(event.target);
        $.ajax({
            method: "POST",
            url: "/api/Gameinfo/" + Gameid
        }).then(reloadPage)
    });

    function reloadPage() {
        window.location.replace("/gameinfo.html");
    }
    // ------------------------------
    //   ON CLICK for DELETE BUTTON
    // ------------------------------

    $(document).on("click", "button.removeGame", function (event) {
        var Gameid = $(this).data("b");
        console.log(Gameid);
        $.ajax({
            method: "DELETE",
            url: "/api/WishList/" + Gameid
        }).then(reloadPage)
    });

    function reloadPage() {
        window.location.replace("/wishlist.html");

    }

});
