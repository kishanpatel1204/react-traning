 import react from "react";
 import { Link } from "react-router-dom";
 import { useDispatch } from "react-redux";
 import { addItem } from "../utils/cartSlice";
 
 export default Products = (props) => {
     const {id,thumbnail,title, description, category } = props.prod || props.p;
     const { isActive } = props;
     console.log(isActive);
     const dispatch = useDispatch();

     const handleAddtoCart = (e, product) => {
        e.preventDefault();
        dispatch(addItem(product));
        
     }

     return(
         <div className="col">
             <Link className="product-link" to={`/product/`+id}>
                 <div className="card" >
                         <img src={thumbnail} className="card-img-top" alt="..."/>
                         <div className="card-body">
                             <div>
                                 <h5 className="card-title">{title}</h5>
                                 <p className="card-text">{description}</p>
                                 <span className="badge text-bg-secondary">{category}</span>
                             </div>
                             {
                                isActive === true ? <a href="#" onClick={ (e)=> handleAddtoCart(e, props.prod)} className="btn btn-primary">Remove</a> :
                                 <a href="#" onClick={ (e)=> handleAddtoCart(e, props.prod)} className="btn btn-primary">Add to cart</a>
                             }
                         </div>
                 </div>
             </Link>
         </div>
     )
 }
 
 export const DiscountedProduct = (Products) => {
     return(props) => {
         return(
             <>
                 <span class="badge text-bg-secondary">50% </span>
                 <Products {...props} /> 
             </>
         )
     }
 
 }