import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProductById } from '../features/productApiSlice';

const ProductSelectById = () => {
    const {id}=useParams()
    
  const product = useSelector((state) => selectProductById(state, id));
useEffect(() => {
    console.log(product,id)
}, []);
  return (
    <div className='z-20'>ProductSelectById</div>
  )
}

export default ProductSelectById