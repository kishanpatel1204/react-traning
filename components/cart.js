import react from "react";
import { useSelector , useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import Products from "./Products";

export default cart = () => {
    
    const items = useSelector( (store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return(

        <div className="container text-center product-wrapper">
                <div className="row">
                        {/* {items.map( (p)=> <li>{p.title} </li>)} */}
                        {items.map( (p)=> < Products key={p.id} p = { p } isActive={true} /> )}
                            <a href="#" onClick={ handleClearCart} className="btn btn-primary">Clear</a>                    
                </div> 
        </div>

        
        
    )
}