
$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page

    $.get("/api/WishList").then(function (data) {
        console.log(data)
        let resultsContainer = $("#wishResults");
        for (i = 0; i < data.length; i++) {
            let idName = data[i].Title;
            let dataId = data[i].id
            let gameTitle = `<div class="row resultsSection">
      
           <div class="col-sm-2">
               <img src="${data[i].CoverUrl}" alt="selection ${data[i].Title}">
           </div>
      
           <div class="col-sm-3">
               <h3>${data[i].Title}</h3>
           </div>
      
            <div class="col-sm-2">
               <button type="submit" class="btn btn-info moreInfo" id="${idName}Info" data-a="${idName}">Info</button>
           </div>
          
           <div class="col-sm-2">
               <button type="submit" class="removeGame btn btn-danger" id="${idName}remove" data-a="${idName}" data-b="${dataId}">Remove</button>
           </div>
       </div>`
            resultsContainer.append(gameTitle);
        }

    });

    

    function deleteResult(event) {
        event.stopPropagation();
        var id = $(this).attr("data-b");
        $.ajax({
            method: "DELETE",
            url: "/api/WishList/" + id
        }).then(reloadPage)

    }

    $(document).on("click", "button.removeGame", function (event) {
        var Gameid = $(this).data("b");
        console.log(Gameid);
        $.ajax({
            method: "DELETE",
            url: "/api/WishList/" + Gameid
        }).then(reloadPage)
    });

    $("button.removeGame").on("click",function() {
        $.ajax({
          method: "DELETE",
          url: "/api/WishList/" + $(this).attr("data-id")
        })
          // On success, run the following code
          .then(function() {
            console.log("Deleted Successfully!");
          });
          location.reload();
      })
    
    
    





    // function getGameInfo(gameName) {
    //     console.log("you want more information")
    //     var searchGames = gameName
    //     searchGamesString = JSON.stringify(searchGames)
    //     console.log(searchGames)
    //     //GET https://<your-request-url>/games/?search=zelda&fields=id,name

    //     var settings = {
    //         "url": "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/",
    //         "method": "POST",
    //         "data": `fields name, genres.name, age_ratings.*, artworks.*, cover.*, platforms.*; search  ${searchGamesString};`,
    //         "timeout": 0,
    //         "headers": {
    //             "Client-ID": "wtw0hnai6i7njmhspijabmmom6yyh5",
    //             "Authorization": "Bearer jpkrnm1ejzzqfhl1c2wu2wtfb11w2w",
    //             "Accept": "application/json",
    //             // "Cookie": "__cfduid=d95ef25d3998aca8e5108fbbfb75328e11608079973"
    //         },
    //     };

    //     $.ajax(settings).done(function (response) {
    //         console.log(response)

    //         console.log("wow look at all this info" + response[0])

    //     });
    // };

    // $(document).on("click", "button.removeGame", function (event) {
    //     console.log($(this).data('a'));
    //     var gameName = $(this).data('a').toLowerCase();
    //     console.log(gameName);
    //     removeGame(gameName);
    // });

    // $(document).on("click", "button.moreInfo", function (event) {
    //     console.log($(this).data('a'));
    //     var gameName = $(this).data('a').toLowerCase();
    //     console.log(gameName);
    //     getGameInfo(gameName);
    // });

});
