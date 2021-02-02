
$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page

    $.get("/api/WishList").then(function (data) {
        let resultsContainer = $("#wishResults");
        for (i = 0; i < data.length; i++) {
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
            "data": `fields name, genres.name, age_ratings.*, artworks.*, cover.*, platforms.*, summary, storyline, genres.*, screenshots.*; where game = ${Gameid};`,
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
        $.ajax(settings).then(function(data) {
            let gameData = data[0];
            window.location.replace("/game-info");
            console.log(data[0]);
            populateGameInfo(gameData);
    }).catch(window.location.replace("/game-info"));
})

function populateGameInfo(gameData) {
    let gameId = data[0].id;
    let idName = response[i].name.trim()
    let gameTitle = `<div class="row resultsSection">
    <div class="col-sm-2">
        <img src="${response[i].cover.url}" alt="selection ${response[i].name}">
    </div>
    <div class="col-sm-3">
        <h3>${response[i].name}</h3>
    </div>
    <div class="col-sm-2">
        <button type="submit" class="btn btn-primary addLibrary" id="${idName}Library" data-a="${idName}" data-cover="${response[i].cover.url}">+ Library</button>
    </div>
    <div class="col-sm-2">
        <button type="submit" class="btn btn-success addWishList" id="${idName}Wish" data-a="${idName}" data-cover="${response[i].cover.url}" data-b="${gameId}">+ Wishlist</button>
    </div>
    <div class="col-sm-2">
        <button type="submit" class="btn btn-info moreInfo" id="${idName}Info" data-a="${idName}" data-cover="${response[i].cover.url}">Info</button>
    </div>
</div>`
    resultsContainer.append(gameTitle);
}

    // ------------------------------
    //   ON CLICK for DELETE BUTTON
    // ------------------------------

    $(document).on("click", "button.removeGame", function (event) {
        event.stopPropagation();
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
