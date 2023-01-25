import Ingredient from "./Ingredient"

const IngredientList = ({list, handleAdd}) => {
	return (
		<ul>
			{list.map(ingredient =>
				<Ingredient ingredient={ingredient} key={ingredient.name}handleAdd={handleAdd} isList={true}/>
				)}
		</ul>
	)
}

export default IngredientList