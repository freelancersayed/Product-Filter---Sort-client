import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "./Commonent/Product";
import ProductDetails from "./Commonent/ProductDetails";
import Register from "./Commonent/Register";
import Login from "./Commonent/Login";
import Payment from "./Commonent/Payment";
import PrivetRout from "../firebase/provider/PrivetRout";




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
            element: <PrivetRout><ProductDetails></ProductDetails></PrivetRout>,
            loader: ()=>fetch('https://server-side-nine-inky.vercel.app/product')
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: "/payment",
            element: <PrivetRout><Payment></Payment></PrivetRout>,
        }

    ]
},
]);