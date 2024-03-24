import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetail = () => {

    const { id } = useParams()
    let [products, setProducts] = useState([]);

    console.log("id", { id })
    console.log(typeof ({ id }))
    // const num = {id}

    const getProduct = async () => {
        let url = `https://my-json-server.typicode.com/Rancho1289/hahahaha/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProducts(data);
        console.log("data", data)
    };


    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className='productDetail-section'>
            <div className='productDetail-img'>
                <img src={products?.img} alt="item" width={400} />
            </div>
            <div className='productDetail-text'>
                <div>{products?.title}</div>
                <div>{products?.price}</div>
                <div>{products?.new === true ? "신상" :""}</div>
                <div>{products?.size.map((item)=>(<button>{item}</button>))}</div>
                <div><button>구매하기</button></div>
            </div>
        </div>
    )
}

export default ProductDetail
