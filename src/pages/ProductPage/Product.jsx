import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'
import Navbar from '../../Components/Navbar/Navbar'
import './Product.scss'

const Product = () => {
    const [products, setProducts] = useState([])
    const {id}= useParams()

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then((data)=>{
            console.log(data)
            setProducts(data)
        });
    
    },[])
  return (
    <div className="product-container">
        <Navbar/>
    <div className='product'>
        <div className="product-info">
            <div className="images">
                <img src={products&&products.thumbnail} alt="" />
            </div>
            <div className="product-content">
                <h2>{products&&products.title}</h2>
                <h2>{products&&products.brand}</h2>
                <h1>$ {products&&products.price}</h1>
                <h2>Discount {products&&products.discountPercentage}%</h2>
                <h2> Rating: {products&&products.rating}</h2>
                <h2>{products&&products.category}</h2>
                <p> <h3>Product details</h3><br />{products&&products.description}</p>
                <button><AiOutlinePlus className='icon'/>Add to cart</button>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Product