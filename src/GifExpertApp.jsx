import { useState } from "react"
import GifGrid from "./components/GifGrid";
import AddCategory from "./components/AddCategory";


const GifExpertApp = () => {

  const [categories,setCategories]=useState(['One Punch']);

  const onAddCategory=(newCategory)=>{
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])

  }

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory}/>

      
        {categories.map(item=>(
          <GifGrid key={item} category={item}/>
        ))}
    </>
  )
}

export default GifExpertApp
