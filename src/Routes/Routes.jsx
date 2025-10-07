import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";
import Hero from "../Components/Hero";
import ProductDetails from "../Pages/ProductDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage/>,
    hydrateFallbackElement:<p>Loading.....</p>,
    children: [
      {
        path: "/",
        element: <Hero/>,
        
      },
      {
        path: "/home",
        element: <Home></Home>,
       
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path:'/wishlist',
        Component:WishList
      },
      {
        path:'/product/:id',
        Component:ProductDetails
      }
    ],
  },
 
]);
