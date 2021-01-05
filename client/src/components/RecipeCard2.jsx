import React from 'react'

const RecipeCard2 =props => {
    return (

     

        <div className="card"  style={{ "width": "22rem" }}>
            <div className="card-body">
            {/* <span onClick={()=>props.removeRecipe(props.recipe._id)} className="remove">x</span> */}
            
            {/* <span onClick={()=>props.saveRecipe(props._id)} className="save">Save</span> */}
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