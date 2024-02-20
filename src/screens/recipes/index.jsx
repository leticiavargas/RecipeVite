import { useEffect, useState } from 'react';
import { Card } from '../../components';

import './styles.css';

const Recipe = () => {

  const[recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
    .then(response => response.json())
    .then(data => setRecipes(data));
  },[]);

  return(
    <section className="recipeContainer">
      {recipes.map((recipe) => 
        <Card
          key={recipe.id}
          name={recipe.name}
          description={recipe.description}
        />
      )}
      
    </section>
  )
}

export default Recipe;