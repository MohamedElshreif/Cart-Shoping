import React from 'react'
import Filter from '../Filter';
import Products from '../products';

import '../../css/Components/Main/Main.css'

const Main = (props) => {
  
  const products = [...props.products]

  return (
    <div className='main'>
        <Products products = {products}/>
        <Filter/>
    </div>
    
  )
}

export default Main