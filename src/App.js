import './App.css';
import { useEffect, useState } from 'react';
import video from "./food.mp4";
import RecipesComponent from './RecipesComponent';

function App() {
	const[search, setSearch] = useState('');
	const [recipes, setRecipes] = useState([]);
	const [wordSubmitted, setWordSubmitted] = useState('salmon')

	useEffect( () => {
		const getRecipe = async() => {
		const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=9f67163b&app_key=6d28a4a9001d2543061d8c3237670662`)
		const data = await response.json();
		setRecipes(data.hits)
	}
		getRecipe()
	}, [wordSubmitted])

	const myRecipeSearch = (e) => {
		setSearch(e.target.value)
	}
	const finalSearch =(e)=> {
		e.preventDefault();
		setWordSubmitted(search);
	}

	return (
		<div className='main'>
			<div className='container'>
				<video autoPlay muted loop>
					<source src={video} type="video/mp4" />
				</video>
			</div>

			<div className='container header'>
			<h1>Find a Recipe</h1>
				<form onSubmit={finalSearch}>
					<input className='search' placeholder='Search...' type="text" onChange={myRecipeSearch} value={search}/>
				</form>
			
				
			</div>

				<div>
					{recipes.map((element, id) => (
					<RecipesComponent key={id} label={element.recipe.label}
						image={element.recipe.image}
						calories={element.recipe.calories}
						ingredients={element.recipe.ingredientLines}
						dietLabels={element.recipe.dietLabels}
						url={element.recipe.url}
					/>
				))}
				</div>
		</div>
	);
}

export default App;