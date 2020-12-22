
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

    function reloadPage() {
        window.location.replace("/Wishlist.html");
    }
})