

$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page

    $.get("/api/Gameinfo").then(function (data) {
        console.log(data)
        let resultsContainer = $("#gameInfo");
        for (i = 0; i < data.length; i++) {
            let idName = data[i].Title;
            let dataId = data[i].id;
            let infoId = data[i].Gamesum;
            let gameTitle = `<div class="row resultsSection">
      
           <div class="col-sm-2">
               <img src="${data[i].CoverUrl}" alt="selection ${data[i].Title}">
           </div>
      
           <div class="col-sm-3">
               <h3>${data[i].Title}</h3>
           </div>
      
            <div class="col-sm-2">
               <h3>${data[i].summary};
           </div>
          
           <div class="col-sm-2">
               <button type="submit" class="removeGame btn btn-danger" id="${idName}remove" data-a="${idName}" data-b="${dataId}" data-c="${infoId}">Remove</button>
           </div>
       </div>`
            resultsContainer.append(gameTitle);

        }

    });
});

$(document).on("click", "button.removeGame", function (event) {
    var Gameid = $(this).data("b");
    console.log(Gameid);
    $.ajax({
        method: "POST",
        url: "/api/Gameinfo/" + Gameid
    }).then(reloadPage)
});

function reloadPage() {
    window.location.replace("/Wishlist.html");
}