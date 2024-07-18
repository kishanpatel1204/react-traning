 import react from "react";
 import { Link } from "react-router-dom";
 import { useDispatch } from "react-redux";
 import { addItem,removeItem } from "../utils/cartSlice";
 
 export default Products = (props) => {
     const {id,thumbnail,title, description, category ,price,discountPercentage} = props.prod || props.p ;
     const { isActive } = props;
     const {isActived} = props;

     const dispatch = useDispatch();

     const handleAddtoCart = (e, product) => {
        e.preventDefault();
        dispatch(addItem(product));
        
     }

     const handleRemoveItem = (e, r ) =>{
        console.log('pr',r)
        e.preventDefault();
        dispatch(removeItem(idx, r));
     }

     return(
         <div className="col">
             <Link className="product-link" to={`/product/`+id}>
                 <div className="card" >
                    {isActived === true ? <span class="badge text-bg-danger bdg">{discountPercentage}% <br></br>Sale </span> :
                     ''
                    }
                 
                         <img src={thumbnail} className="card-img-top" alt="..."/>
                         <div className="card-body">
                             
                                 <h5 className="card-title">{title}</h5>
                                 <p className="card-text">{description}</p>
                                 <p className="card-text">Price : {price}</p>
                                 <span className="badge text-bg-secondary">{category}</span>
                             <br></br>
                             <br></br>
                             {
                                isActive === true ? <a href="#" onClick={ (e) => handleRemoveItem(e, props.p.id)} className="btn btn-primary">Remove</a> :
                                 <a href="" onClick={ (e)=> handleAddtoCart(e, props.prod)} className="btn btn-primary">Add to cart</a>
                             }
                         </div>
                 </div>
             </Link>
         </div>
     )
 }
 
 export const DiscountedProduct = (Products) => {
     return(pr) => {
         return(
             <>
                 <Products {...pr} isActived={true} /> 
             </>
         )
     }
 
 }