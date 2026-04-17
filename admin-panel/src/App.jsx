import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/sidebar"
import {Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Add from "./pages/add/add";
import List from "./pages/list/list";
import Order from "./pages/order/order";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/loginpopup/loginpopup";
function App() {
    const dispatch=useDispatch();
    const login=useSelector(state=>state.ainfo.login);
    const url="https://e-commerce-website-main-server.onrender.com"
    return <div>
        {/* <ToastContainer/> */}
        <Navbar/>
        {login?<Login/>:<></>}
        <hr/>
        <div className="flex">
        <Sidebar/>
        <Routes>
            <Route path="/" element={<Add url={url}/>}></Route>
            <Route path="/add" element={<Add url={url}/>}></Route>
            <Route path="/list" element={<List url={url}/>}></Route>
            <Route path="/order" element={<Order url={url}/>}></Route>

        </Routes>
        </div>
    </div>
}

export default App
