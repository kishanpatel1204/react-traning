import react from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";




export default Navbar = () => {

    const user = useContext(UserContext);

    


    const items = useSelector( (store) => store.cart.items);

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/about"}>About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={"/contact"}>Contact</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={""}>Pricing</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">{ user.username}</a>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={"/cart"}>Cart ({items.length})</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
