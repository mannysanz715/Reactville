
const Ingredient = ({ingredient, isList, handleRemove, idx, handleAdd}) => {
	const styleIngredient = {
		backgroundColor: ingredient.color
	}

	return (
		<li style={styleIngredient}>
			{ingredient.name}
			{isList ? <button onClick={()=>handleAdd(ingredient)}>+</button> :
			<button onClick={()=>handleRemove(idx)}>X</button>}
		</li>
	)
}

export default Ingredient