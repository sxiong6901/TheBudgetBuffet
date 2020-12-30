import React, { useState } from 'react';
import API from '../utils/API';


const Recipe = ({profile}) => {
	const [title, setTitle] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [directions, setDirections]= useState("");
	const formSubmit =event=>{
		event.preventDefault();
		const newRecipe={title:title , ingrediants:ingredients, instructions: directions}
		API.addRecipe(newRecipe)
		.then(res=>console.log(res))
		console.log(title, ingredients, directions)
	}
	return (
		
		
		<div className="createRecipe">
		

		  <form onSubmit={formSubmit}>
				<div class="form-group">
                <label for="recipetitle">Recipe Title</label>
                <input type="text" class="form-control" id="recipetitle" value={title} onChange={e=>setTitle(e.target.value)}/>
              </div>
			  <div class="form-group">
                <label for="ingredients">Ingredients</label>
                <input type="text" class="form-control" id="ingredients" value={ingredients} onChange={e=>setIngredients(e.target.value)}/>
              </div>

              <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description" value={directions} onChange={e=>setDirections(e.target.value)}/>
              </div>
			  <button  type="submit">Add Recipe</button>
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