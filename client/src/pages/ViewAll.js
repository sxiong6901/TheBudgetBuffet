import React, { useEffect, useState } from 'react'
import RecipeCard2 from '../components/RecipeCard2'
import API from '../utils/API'
// import Searchbox from '../components/Searchbox'

const ViewAll = props => {
	
	const [recipes, setRecipes] = useState([])
	const [favoriteRecipes, setFavoriteRecipes]=useState([])
	// const [search, setSearch] = useState("");
	// const [ query, setQuery] = useState('')

	useEffect(() => {
		API.viewRecipe()
			.then(results => {
				setRecipes(curr => [...curr, ...results])
			})
	}, [])

	// const updateSearch = e => {
	// 	setSearch(e.target.value);
	// }

	// const getSearch = e => {
	// 	e.preventDefault();
	// 	setQuery(search);
	// }
	
	
	const save=(id)=>{
		console.log(id)	
		
		// var favoritesList=[]
		// recipes.forEach(element => {
		// 	if (element._id === id) {
		// 		favoritesList.push(element)
		// 		setFavoriteRecipes(favoritesList)
		// 		console.log(favoritesList)
		// 	}
			
		// })
				
	
	  }



	return (
		<>
		  <container>
        <h2> View Recipes Shared By All Users </h2>
		{/* <form onSubmit={getSearch} className="search-form">
	<p>	<input type="text" placeholder="Search.." name="search" value={search}
				onChange={updateSearch}></input>
		<button type="submit"><i className="fa fa-search">Search</i></button></p>
		</form> */}
			{/* <Searchbox/> */}
        </container>
		
       
      
			{recipes && recipes.map(recipe=>(
				<RecipeCard2 key= {recipe._id} recipe={recipe} saveRecipe={save}/>
			
			))}
		</>
	)
}

export default ViewAll