import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './recipe';
import wrote from './component.png';
const App = () => {

  const APP_ID  = '302e2aec';
  const APP_KEY = 'cbc6968000a2c970b6f66c226c6c3b44';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('pasta')
  

  useEffect (() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
const updateSearch = e => {
  setSearch(e.target.value);
};
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
return (
  <div className="App">
      <div>
      <a className="comp" href="./component.png"><img alt="component.png" src={wrote}></img></a>
    </div>
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button  className="search-button" type="submit">Search</button>
    </form>
    <div className="recipes">
    {recipes.map(recipe =>(
      <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        weburl={recipe.recipe.url}
        yielding={recipe.recipe.yield}
        >
        </Recipe>
       
    ))}
    </div>

  </div>
);
}




export default App;
