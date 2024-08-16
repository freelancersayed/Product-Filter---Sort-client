import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "./Commonent/Product";
import ProductDetails from "./Commonent/ProductDetails";




export const router = createBrowserRouter([
{
    path: "/",
    element: <App></App>,
    children: [
        {
            path: "/",
            element: <Product></Product>,
        },
        {
            path: "/details/:_id",
            element: <ProductDetails></ProductDetails>,
            loader: ()=>fetch('http://localhost:5000/product')
        }

    ]
},
]);