import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

const useFetch = (category) => {
    
  const [images, setImages]=useState([]);
  const [isLoading, setIsLoading]=useState(true);  


  const getImages=async()=>{
    const newImages=await getGifs(category);
    setImages(newImages)
    setIsLoading(false)
  }

  useEffect(()=>{
    getImages()}
    ,[])
    
  
  
  
    return {
        images,
        isLoading
  }
}

export default useFetch
