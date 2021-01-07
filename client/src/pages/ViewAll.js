import React, { useEffect, useState } from 'react'
import RecipeCard2 from '../components/RecipeCard2'
import API from '../utils/API'

const ViewAll = props => {
	
	const [recipes, setRecipes] = useState([])
	const [favoriteRecipes, setFavoriteRecipes]=useState([])

	useEffect(() => {
		API.viewRecipe()
			.then(results => {
				setRecipes(curr => [...curr, ...results])
			})
	}, [])
	
	const save=(id)=>{
		console.log(id)	
		
		var favoritesList=[]
		recipes.forEach(element => {
			if (element._id === id) {
				favoritesList.push(element)
				setFavoriteRecipes(favoritesList)
				console.log(favoritesList)
			}
			
		})
				
	
	  }



	return (
		<>
		  <container>
        <h2> View Recipes Shared By All Users </h2>
	<p>	<input type="text" placeholder="Search.." name="search"></input>
		<button type="submit"><i className="fa fa-search">Search</i></button></p>
			
        </container>
		
       
      
			{recipes && recipes.map(recipe=>(
				<RecipeCard2 key= {recipe._id} recipe={recipe} saveRecipe={save}/>
			
			))}
		</>
	)
}

export default ViewAll