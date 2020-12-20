const { response } = require("express");

$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.Email);
    });
  });
 
 
  
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