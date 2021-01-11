import React from 'react'

<<<<<<< HEAD

=======
>>>>>>> cdbe3cd89ad8fa306af327f52c660a1e9b15867f
const RecipeCard2 =props => {
    return (

     

        <div className="card"  style={{ "width": "22rem" }}>
            <div className="card-body">
<<<<<<< HEAD
            {/* <span onClick={()=>props.saveRecipe(props.recipe._id)} className="save">Save To Favorites</span> */}
           
=======
            <span onClick={()=>props.saveRecipe(props.recipe._id)} className="save">Save To Favorites</span>
            
>>>>>>> cdbe3cd89ad8fa306af327f52c660a1e9b15867f
                <h4 className="card-title">{props.recipe.title}</h4>
                <h5 className="card-subtitle mb-2 text-muted">Ingredients:</h5>
                <ul>
                    {props.recipe.ingrediants.split(",").map((ingrediant, index) => (<li key={index}>{ingrediant}</li>))}
                </ul>
                <h5>Instructions:</h5>
                <p className="card-text">{props.recipe.instructions}</p>

            </div>
        </div>
    )
}

export default RecipeCard2