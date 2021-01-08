import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import Recipes from './Recipes';

const RecipeSearch = () =>  {

 

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [ query, setQuery] = useState('')

	useEffect(() =>{
		const getRecipes = async () => {
			if(!query) return
			// const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
			// const data = await response.json();
			const data = await API.getRecipes()
			// console.log(data )
			setRecipes(data.hits);
			console.log(data.hits);
	
		};
		getRecipes();
	}, [query]);


	const updateSearch = e => {
		setSearch(e.target.value);
	}

	const getSearch = e => {
		e.preventDefault();
		setQuery(search);
	}
	
	return (

		<div className="recipeSearch">
			<form onSubmit={getSearch} className="search-form">
				<input 
				className="search-bar"
				type="text"
				value={search}
				onChange={updateSearch}
				/>
                <button className="search-button" type="submit">
					Search
                </button>
         	</form>
			 {recipes.map(recipe => (
				 <Recipes
				 key={recipe.recipe.uri}
				 title={recipe.recipe.label}
				 ingredients={recipe.recipe.ingredients}
			 />
			 ))}

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

export default RecipeSearch
