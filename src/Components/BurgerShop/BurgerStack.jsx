
import Ingredient from "./Ingredient"

const BurgerStack = ({stack, handleRemove}) => {
  return (
    <ul className="burger-stack">
      {stack.map((ingredient, idx) =>
        <Ingredient ingredient={ingredient} handleRemove={handleRemove} key={idx} idx={idx}/>
        )}
    </ul>
  )
}

export default BurgerStack