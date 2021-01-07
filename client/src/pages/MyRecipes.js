import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import API from '../utils/API'

const MyRecipes = props => {
	const [recipes, setRecipes] = useState([])
	const [favoriteRecipes, setFavoriteRecipes]=useState([])
	useEffect(() => {
		API.myRecipes()
			.then(results => {
				setRecipes(curr => [...curr, ...results])
			
			})
	}, [])

	const deleteRecipe=(id)=>{
		console.log(id)	
		var newRecipeList = recipes.filter(recipe=>recipe._id !== id)
		
		setRecipes(newRecipeList)
						
	  }	 

	  const save=(id)=>{
		console.log(id)	
		
		var favoritesList = favoriteRecipes.map(recipe=>recipe._id !== id)
		setFavoriteRecipes(favoritesList)
		console.log(favoritesList)
		
	
	  }
	

	return (
		<>
			<h1>My Recipes</h1>
			
			{recipes && recipes.map( recipe => <RecipeCard key={recipe._id} recipe={recipe} removeRecipe = {deleteRecipe} saveRecipe={save}></RecipeCard>)}
		</>
	)
}

export default MyRecipes