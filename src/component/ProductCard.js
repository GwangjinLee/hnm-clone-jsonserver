import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/products/${item.id}`);
    };
  return (
    <div className='card' onClick={showDetail}>
        <img  src={item?.img}></img>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new == true ? "NEW":""}</div>
    </div>
  )
}

export default ProductCard