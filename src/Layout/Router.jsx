import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "./Commonent/Product";




export const router = createBrowserRouter([
{
    path: "/",
    element: <App></App>,
    children: [
        {
            path: "/",
            element: <Product></Product>
        }
    ]
},
]);