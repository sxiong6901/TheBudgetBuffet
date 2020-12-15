// Creating our Recipe model
module.exports = function(sequelize, DataTypes) {
    const Recipes = sequelize.define("Recipes", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
       
    recipeTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false
    },
     
  description: {
    type: DataTypes.STRING,
    allowNull: false, 
       
      },      
      
   UserId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
});
Recipes.associate = function(models) {
  // We're saying that a Recipe should belong to a User
  // A Recipe can't be created without a User due to the foreign key constraint
  Recipes.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  });
};
   
    return Recipes;
  };