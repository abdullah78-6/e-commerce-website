import Navbar from "./components/navbar/navbar"
import {useDispatch, useSelector} from "react-redux"
import { control } from "./store/slice"
import Signin from "./components/signup-page/signup"
import Hero from "./components/hero/hero.jsx"
import Menu from "./components/menulist/menu.jsx"
import Mobileapp from "./components/mobileapp/mobileapp.jsx"
import Display from "./components/productdisplay/productdisplay.jsx"
import Footer from "./components/footer/footer.jsx"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Inner(){
  const loginstatus=useSelector(state=>state.main.login)
  return <div>
    <ToastContainer  autoClose={3000}/>
  <Navbar/>
    {loginstatus?<Signin/>:<></>}
    <Outlet/>
    <Footer/>


  </div>
}
function App() {
  
  return (
    <div>
     <Inner/>
      

    </div>
  )

}

export default App
