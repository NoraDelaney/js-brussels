$("#get-dish").on("click", function() {
  $.get("/new-recipe.json", function(newDish) {
    alert(newDish["recipe"]);
  });
});
