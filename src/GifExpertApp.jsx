import { useState } from "react"
import AddCategory from "./components/AddCategory";


const GifExpertApp = () => {

  const [categories,setCategories]=useState(['One Puch']);

  const onAddCategory=(newCategory)=>{
    // setCategories([...categories,'Hello Kitty'])
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])

  }

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory}/>

      <ol>
        {categories.map(item=>(
          <li key={item}>{item}</li>
        ))}
      </ol>
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {/* <AddCategory setCategories={setCategories}/> */}
    </>
  )
}

export default GifExpertApp
