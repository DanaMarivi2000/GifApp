import { useState } from "react"

const AddCategory = ({onNewCategory}) => {
  
  const[inputValue,setInputValue]=useState('')
  const onInputChange=({target})=>{
        setInputValue(target.value)
  }
  
  const onubmit=(event)=>{
    event.preventDefault();
    if(inputValue.trim().length<=1) return;
   
    onNewCategory(inputValue.trim())
    setInputValue('');
  }


    return (
    <form onSubmit={onubmit} >
      <input 
      type="text"
      placeholder='Buscar gifs' 
      value={inputValue}
      onChange={onInputChange}
      />
    </form>
  )
}

export default AddCategory
