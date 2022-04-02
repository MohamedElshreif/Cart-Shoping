import React from 'react'
import '../../css/Components/product/product.css';

const Product = (props) => {
  console.log(props.product)
  const {tilte , image_Url , price} = {...props.product}
  return (
    <div className='Product_wrapper'>
      <div className='Image_box'>
        <img  src= {image_Url} alt = {tilte} />
      </div>
      <div className='desc'>
        <p>{tilte}</p>
        <span>{price}</span>
      </div>
      <button className = 'btn'>add to cart</button>
    </div>
  )
}

export default Product