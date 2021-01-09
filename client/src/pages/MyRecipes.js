import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import API from '../utils/API'


const MyRecipes = props => {
	const [recipes, setRecipes] = useState([])
	const [recipe, setNewRecipe] = useState([])
	const [favoriteRecipes, setFavoriteRecipes]=useState([])
	// useEffect(()=> {
	// 	API.myFavorites()
	// 	.then(results=> {
	// 		setFavoriteRecipes(curr => [...curr, ...results])
	// 	})
	// })

	useEffect(() => {
		API.myRecipes()
			.then(results => {
				setRecipes(curr => [...curr, ...results])
			
			})
	}, [])

	useEffect(() => {
		loadRecipe()
	  }, [])

	  function loadRecipe(id) {
		API.myRecipes()
		  .then(res => 
			setNewRecipe(res.data)
			
		  )
		  .catch(err => console.log(err));
	  };

	const deleteRecipe=(id)=>{
		console.log(id)	
		API.deleteRecipe(id)
      .then(res => loadRecipe(res))
      .catch(err => console.log(err));
		// var newRecipeList = recipes.filter(recipe=>recipe._id !== id)
		
		// setRecipes(newRecipeList)
		// console.log(newRecipeList)
		
						
	  }	 

	  const save=(id)=>{
		console.log(id)	
		
		var favoritesList=[]
		recipes.forEach(element => {
			if (element._id === id) {
				favoritesList.push(element)
				// setFavoriteRecipes(favoritesList)
				// console.log(favoritesList)
			}
			
		})
				
	
	  }
	

	return (
		<>
			<h1>My Recipes</h1>
			
			{recipes && recipes.map( recipe => <RecipeCard key={recipe._id} recipe={recipe} removeRecipe = {deleteRecipe} saveRecipe={save}></RecipeCard>)}
		</>
	)
}

export default MyRecipes