import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default ProductDetails = () => {

    const params = useParams();
    const[ product, setProduct]= useState([]);

    useEffect(()=>{
        fetchProduct();
    },[])

    const fetchProduct = async() =>{
        const product = await fetch("https://dummyjson.com/products/" + params.id ); 
        const prodjson = await product.json();
        setProduct(prodjson);  
    }


    return(
        <div className="card productcard" >
                        <img src={product.thumbnail} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <div>
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <span className="badge text-bg-secondary">{product.category}</span>
                            </div>
                            <a href="#" className="btn btn-primary">Add to cart</a>
                        </div>
        </div>
    )
}