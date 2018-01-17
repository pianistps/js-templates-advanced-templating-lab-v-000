function init() {
  //put any page initialization/handlebars initialization here

  // Register a partial called `recipeDetailsPartial` for the 
  // `description` and `ingredients` of the recipe.
  // Create a template with an `id` of `recipe-details-partial` to
  // hold the markup. Use the `each` helper to display the collection
  // of `ingredients`.

  // Handlebars.registerPartial('ingredientsPartial',
  // document.getElementsByName('ingredients').innerHTML)

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
