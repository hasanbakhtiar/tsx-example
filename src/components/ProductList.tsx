import React, { useState } from 'react'
import ProductItem from './ProductItem'
import productData from '../data/productdata'
import Users from './Users'

const ProductList = () => {
    const [log,setLog] = useState(false);
  return (
    <>
    <div className='row'>
        <ProductItem prodData={productData}/>
        <Users isLoggedIn={log} info='Arthur' messageCount={20}/>
       
    </div>
    <button onClick={()=>{setLog(true)}}>Login</button>
        <button onClick={()=>{setLog(false)}}>Logout</button>
    </>
  )
}

export default ProductList
