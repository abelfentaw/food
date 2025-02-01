import React, { useState }  from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'


const Menu = () => {
     const [category,setCategory] = useState("All")
     
  return (
    <>
     <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
      
    </>
  )
}

export default Menu
