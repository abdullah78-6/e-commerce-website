import Navbar from "./components/navbar/navbar"
import {useDispatch, useSelector} from "react-redux"
import { control } from "./store/slice"
import Signin from "./components/signup-page/signup"
import Hero from "./components/hero/hero.jsx"
import Menu from "./components/menulist/menu.jsx"
import Mobileapp from "./components/mobileapp/mobileapp.jsx"
import Display from "./components/productdisplay/productdisplay.jsx"
import Footer from "./components/footer/footer.jsx"
function App() {
  const loginstatus=useSelector(state=>state.main.login)
  return (
    <div>
      <Navbar/>
      
      {loginstatus?<Signin/>:<></>}
      <Hero/>
      <Menu/>
     
      <Display/>
       <Mobileapp/>
      <Footer/>
    </div>
  )

}

export default App
