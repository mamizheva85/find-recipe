import checkmark from "./checkmark.png"

const RecipesComponent = ({label, image, calories, ingredients, dietLabels, url}) => {
	return(<div className="card">
	<div className="card-header">
		<h2>{label}</h2>
	</div>
	
	<div className="image-card">
		<img className="tasty" src={image} alt="recipe" width="250" height="250"/>
	</div>
	<div className="colories">
		<p className="par">{calories.toFixed()} calories</p>
		<p className="diet-lables">{dietLabels}</p>
	</div>
	
	<ul className="list">
	<h3> Ingredients</h3>
		{ingredients.map((item, ip) => (
			<li key={ip}><img className="checkmark" src={checkmark} width="20" alt="chekmark"/>
			{item}</li>
		))}
	</ul>
	<div className="buttons">
		<a href={url}> 
			<button className='btn-link'>SHOW RECIPE</button>
		</a>
	</div>
	
	</div>
	);
}

export default RecipesComponent;