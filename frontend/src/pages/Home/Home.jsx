import React, { useState, useContext  } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import { StoreContext } from '../../Context/StoreContext'
import { food_list } from '../../assets/assets'
import HowItWorks from '../../components/HowItWorks/HowItWorks'

const Home = () => {


  const [category,setCategory] = useState("All")
  const context = useContext(StoreContext)

  const limitedList = (context.food_list || []).slice(-10)

  return (
    <>
      <Header/>
      <WhyChooseUs />
      <ExploreMenu setCategory={setCategory} category={category}/>

      <StoreContext.Provider value={{ 
        ...context, // Keep all original values
        food_list: limitedList // Only override this one property
      }}>
      <FoodDisplay category={category}/>

      </StoreContext.Provider>

      <HowItWorks />
      
    </>
  )
}

export default Home
