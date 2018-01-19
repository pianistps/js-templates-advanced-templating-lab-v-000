function recipeForm() {


  // get main and set template
  // tell submit action what to do (createrecipe)
}



function init() {
  //put any page initialization/handlebars initialization here

  // Register a partial called `recipeDetailsPartial` for the
  // `description` and `ingredients` of the recipe.
  // Create a template with an `id` of `recipe-details-partial` to
  // hold the markup. Use the `each` helper to display the collection
  // of `ingredients`.
  // Handlebars.registerHelper('displayIngredient', function(ingredients) {
  //
  // })

  Handlebars.registerPartial('recipeDetailsPartial',
  document.getElementById('recipe-details-partial').innerHTML)

  Handlebars.registerPartial('recipeFormPartial',
  document.getElementById('recipe-form-partial').innerHTML)
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
  //init form
})
