$(document).ready(() => {
  
    var recipeInput = $("#recipetitle");
    var ingredientInput = $("#ingredients");
   
    var descriptionInput = $("#description");

   
  
    $.get("/api/user_data").then(data => {
      $(".member-name").text(data.email);
    });
  
   
  
    //When the create recipe button is clicked, capture the user input and call the upsertGigs function
    $("#recipebtn").on("click", function () {
      event.stopPropagation();
      

      upsertRecipe({
        recipeTitle: recipeInput.val().trim(),
       ingredients: ingredientInput.val().trim(),
        description: descriptionInput.val().trim(),

      })
    });

    //update the recipe db with input
    function upsertRecipe(data) {
      $.post("/api/createRecipe", data)
      .then(res=>{
        if(res === "OK"){
          window.location = "/myrecipes"
        }
      })
   
      }

       


        

     

       
});