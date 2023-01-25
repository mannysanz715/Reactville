import '../../styles/burger.css'
import { useState } from 'react'
import { ingredients } from '../../data/burger-data'
import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'


const BurgerShop = () => {
  const [stack, setStack] = useState([])

  function handleAddIngredient(item){
    setStack([item, ...stack])
  }

  function handleRemoveIngredient(idx){
    setStack(stack.filter((el, i )=> i !== idx))
  }
  function handleClear(){
    setStack([])
    console.log('click')
  }

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={()=>handleClear()}>Clear Order</button>
      </nav>
      <section>
        <IngredientList list={ingredients} handleAdd={handleAddIngredient} />
        <BurgerStack stack={stack} handleRemove={handleRemoveIngredient}/>
      </section>
    </div>
  )
}

export default BurgerShop