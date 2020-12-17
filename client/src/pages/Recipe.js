import React from 'react'


const Recipe = ({profile}) => {
	return (
		<div className="createRecipe">
		
		
  
			
		  <form>
				<div class="form-group">
                <label for="recipetitle">Recipe Title</label>
                <input type="text" class="form-control" id="recipetitle"/>
              </div>
			  <div class="form-group">
                <label for="ingredients">Ingredients</label>
                <input type="text" class="form-control" id="ingredients"/>
              </div>

              <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description"/>
              </div>
				</form>
	
		  
		  <a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
		  >
  
		  </a>
	
	  </div>
	)
}

export default Recipe