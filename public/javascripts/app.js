$("#get-dish").on("click", function() {
  $.get("/new-recipe.json", function(newDish) {
    $("#get-dish").text(newDish["dish"]);
  });
});
