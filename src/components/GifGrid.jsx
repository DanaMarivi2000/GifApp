import useFetch from '../hooks/useFetch';
import GifItem from './GifItem'

const GifGrid = ({category}) => {

  const{images, isLoading}=useFetch(category)
  
  return (
    <>
     <h3>{category}</h3>

      {
        isLoading&&(<h2>Cargando...</h2>)
      }

     <div className='card-grid'>{images.map((image)=>(
      <GifItem key={image.id} {...image} />
     ))}</div> 
    </>
  )
  
}

export default GifGrid
