import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/cart";


// const heading = "Hello World";
// const root = document.getElementById("root");
// root.append(heading);

// const reactHeading = React.createElement("h1",{},"hello from react");
 const appRoot = ReactDOM.createRoot(root);
//  appRoot.render(reactHeading);

// const JSXheading = <h1 classname="heading"> this is JSX {reactHeading} heading</h1>;

export function App(){

    const [user, setUser] = useState(null);

    useEffect( () => {
        const data = {
            user: "Admin"
        }

        setUser(data.user)
    })

    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{ username : user}}> 
            <Navbar />
            <Outlet />
        </UserContext.Provider>
        </Provider>
    )
    
}

const AppRouter = createBrowserRouter([
     {
        path:"/",
        element:<App />,
        children:[
            {
                path:"/",
                element:(
                    <>
                        
                        <Banner />
                        <Dashboard />
                        
                    </>
                )
            },
            {
                path:"/product/:id",
                element: <ProductDetails />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/cart",
                element: <Cart />
            }
        ],
        errorElement:<Error />,
     },
])

appRoot.render(<RouterProvider router={AppRouter} />);