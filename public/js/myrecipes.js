//render all gigs specific to the recruiter that posted the gig
const init =()=>{
    $.get("/api/myrecipes")
    .then(res=>{
        console.log(res)
    for (var i = 0; i < res.length; i++) {
        $(".container3").append(`
          <div class="card">
            <div class="card-body">
          
              <h4 class="card-title">JobTitle: ${res[i].recipeTitle}</h4>
              <h5 class="card-text">${res[i].description}</h5>
              <hr>
               </div>
          </div>
          `)
      }
    })
}
init()

  
