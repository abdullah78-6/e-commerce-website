import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import estore from './store/store.js'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Display from './components/productdisplay/productdisplay.jsx'
import ShoopingCart from './pages/cart/cart.jsx'
import Hero from './components/hero/hero.jsx'
import Menu from './components/menulist/menu.jsx'
import Mobileapp from './components/mobileapp/mobileapp.jsx'
import Details from './pages/productdetails/details.jsx'
import Placeorder from './pages/placeorder/placeorder.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Order from './pages/orders/order.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App  />,
    children:[
      {
        index:true,
        element:(
          <>
          <Hero/>
          <Menu/>
          <Display/>
          <Mobileapp/>
         
          </>
        )
      },
      {
        path:"/display",
        element:<Details/>
      },
      {
        path:"/cart",
        element:<ShoopingCart/>
      },
      {
        path:"/order",
        element:<Placeorder/>
      },
      {
        path:"/orders",
        element:<Order/>
      }
      

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={estore}>
    <RouterProvider router={router}>
      
    </RouterProvider>
    <ToastContainer  autoClose={3000} pauseOnHover style={{zIndex:9999}}/>
    </Provider>
    
    
  </StrictMode>,
)
