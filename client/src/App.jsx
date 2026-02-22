import Navbar from "./components/navbar/navbar"
import {useDispatch, useSelector} from "react-redux"
import { control } from "./store/slice"
import Signin from "./components/signup-page/signup"
import Hero from "./components/hero/hero.jsx"
import Menu from "./components/menulist/menu.jsx"
function App() {
  const loginstatus=useSelector(state=>state.main.login)
  return (
    <div>
      <Navbar/>
      
      {loginstatus?<Signin/>:<></>}
      <Hero/>
      <Menu/>
    </div>
  )

}

export default App
