import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';

const RecipeSearch = () =>  {

    const APP_ID = "be645cb1";
	const APP_KEY = "8deb2d9e6d9de55f55770f014a7aa365";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [ query, setQuery] = useState('')

	useEffect(() =>{
		getRecipes();
	}, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);

	};

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
				 key={recipe.recipe.label}
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
