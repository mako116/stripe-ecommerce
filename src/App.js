import React, { children } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import{
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom'
import Cart from './pages/cart';
import { productsData } from './api/Api';
import Product from './components/product';
import Login from './pages/Login';

const Layout=()=>{
  return(
    <div>
      <Header/>
      <ScrollRestoration />
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>,
        loader:productsData,
      },
      {
        path:"/product/:id",
        element:<Product/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/login",
        element:<Login/>,
      },
    ]}
  
])
function App() {
  return (
    <div className='font-bodyFont'>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
