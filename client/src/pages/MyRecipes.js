import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import API from '../utils/API'

const MyRecipes = props => {
	const [recipes, setRecipes] = useState([])
	useEffect(() => {
		API.myRecipes()
			.then(results => {
				setRecipes(curr => [...curr, ...results])
			
			})
	}, [])

	const deleteRecipe=(id)=>{
		console.log(id)
	
		var newRecipeList = recipes.filter(recipe=>recipes.id !== id)
		setRecipes(newRecipeList)
		console.log(newRecipeList)
		
		

		
	  }
	  
	 
	

	return (
		<>
			<h1>My Recipes</h1>
			
			{recipes && recipes.map( recipe => <RecipeCard key={recipe._id} recipe={recipe} removeRecipe = {deleteRecipe}></RecipeCard>)}
		</>
	)
}

export default MyRecipes