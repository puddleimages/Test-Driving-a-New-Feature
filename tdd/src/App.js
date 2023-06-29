import React, { useState } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div>
      <h1>My Recipes</h1>
      <form>
        <input type="text" placeholder="Enter recipe name" />
        <button type="submit">Add Recipe</button>
      </form>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
