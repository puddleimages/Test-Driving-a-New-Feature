import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = ({ recipes }) => {
  return (
    <div>
      <h1>My Recipes</h1>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>{recipe}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const AddRecipe = ({ onAddRecipe }) => {
  const [recipe, setRecipe] = useState('');

  const handleRecipeChange = (e) => {
    setRecipe(e.target.value);
  };

  const handleAddRecipe = () => {
    onAddRecipe(recipe);
    setRecipe('');
  };

  return (
    <div>
      <h1>Add Recipe</h1>
      <input type="text" value={recipe} onChange={handleRecipeChange} />
      <button onClick={handleAddRecipe}>Add</button>
    </div>
  );
};

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Recipe</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Home recipes={recipes} />
        </Route>
        <Route path="/add">
          <AddRecipe onAddRecipe={handleAddRecipe} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
