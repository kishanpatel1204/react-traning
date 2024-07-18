import react from "react";
import Products, { DiscountedProduct } from "./Products";
import { useEffect, useState } from "react";

export default Dashboard = () => {
    const [products, setProducts]= useState([])
    const [categorys, setCategorys] = useState([])
    const [ filterproducts, setfilterProducts] = useState([])
    const [ isfilter, setFilter] = useState(false)

    const DiscProduct = DiscountedProduct(Products);


    useEffect(()=>{
        fetchProducts();  
        fetchCategorys();      
    },[])

    const fetchCategorys = async() =>{
        const categoryslist = await fetch("https://dummyjson.com/products/category-list");
        const categoryslistjson = await categoryslist.json();
        setCategorys(categoryslistjson);

    }

    const fetchProducts = async() =>{
        const productslist = await fetch("https://dummyjson.com/products"); 
        const prodjson = await productslist.json();
        setProducts(prodjson.products);  
    }

    const handleClick = (e) => {
            const filtercategorys = products.filter( (p) => p.category === e.target.textContent );
            setfilterProducts(filtercategorys);
            setFilter(true);
    }

    return(
        <>
        <div className="container text-center product-wrapper">
                <div className="row">
                    { categorys.map( (c, idx) => <button onClick={(e)=> handleClick(e)} key={idx} type="button" className="btn btn-dark categorys">{c}</button> )}
                                        
                </div>
          </div>
          <div className="container text-center product-wrapper">
                <div className="row">
                     { filterproducts.length > 0 ? filterproducts.map( ( p ) => < Products key={p.id} p = { p } /> ) :
                     isfilter ? 'No Product' :
                     products.map( ( prod ) => ( prod.category === 'beauty' ? <DiscProduct key={prod.id}  prod = { prod } /> : 
                     < Products key={prod.id}  prod = { prod } /> ) ) }                     
                </div> 
          </div>
        </>
    )
}