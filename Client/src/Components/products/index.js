import React from 'react'
import Product from '../product';
import '../../css/Components/products/products.css';

const Products = (props) => {
  console.log(props.products)
  return (
      <div className='products'>
        {props.products.map((product) => (
          <Product key = {product.id} product = {product}/>
        ))}
      </div>
  )
}

export default Products