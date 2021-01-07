import React from 'react';


const recipeSearch = () =>  {

    const APP_ID = "be645cb1";
    const APP_KEY = "app8deb2d9e6d9de55f55770f014a7aa365";

    const exampleReq =  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
	}

	
	return (
		
        <> 
            
                <input className="search-bar" placeholder ="" type="text"/>
                <button className="search-button" type="submit">Submit
                </button>
         
        </>
    )
}

export default recipeSearch
