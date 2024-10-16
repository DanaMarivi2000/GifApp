import React from 'react'

const GifItem = ({title, url}) => {
 
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default GifItem
