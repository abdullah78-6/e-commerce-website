import {useDispatch,useSelector} from "react-redux"
import { manage } from "../../store/products-slice";
const Placeorder=()=>{
    const totalprice=useSelector(state=>state.main2.totalprice);
    return <div className="min-h-screen w-full flex justify-center px-4 py-10 bg-white gap-30 items-center flex-wrap ">
        <div>
    <form className="flex flex-col gap-6 shadow-2xl rounded-3xl p-12 text-gray-800 font-semibold">

    
          <div className="flex items-center gap-6">
            <label className="w-40 text-right">ENTER NAME</label>
            <input className="w-72 border-2 p-2 rounded-3xl" type="text" placeholder="enter name" required />
          </div>

          <div className="flex items-center gap-6">
            <label className="w-40 text-right">ENTER EMAIL</label>
            <input className="w-72 border-2 p-2 rounded-3xl" type="email" placeholder="enter email" required />
          </div>

          <div className="flex items-center gap-6">
            <label className="w-40 text-right">ENTER ADDRESS</label>
            <input className="w-72 border-2 p-2 rounded-3xl" type="text" placeholder="enter address" required />
          </div>

          <div className="flex items-center gap-6">
            <label className="w-40 text-right">ENTER CITY</label>
            <input className="w-72 border-2 p-2 rounded-3xl" type="text" placeholder="enter city" required />
          </div>

          <div className="flex items-center gap-6">
            <label className="w-40 text-right">ENTER PINCODE</label>
            <input className="w-72 border-2 p-2 rounded-3xl" type="number" placeholder="enter pincode" required />
          </div>

          <div className="flex items-center gap-6">
            <label className="w-40 text-right">ENTER LANDMARK</label>
            <input className="w-72 border-2 p-2 rounded-3xl" type="text" placeholder="ex: near xyz store" required />
          </div>

          <div className="text-center">
            <button className="mt-6 bg-pink-700 px-6 py-3 text-xl rounded-full font-semibold text-white hover:bg-pink-900 transition">
              PAYMENT METHODS
            </button>
          </div>

        </form>
        </div>
        <div className="text-gray-800">
            <div className="shadow-2xl rounded-4xl p-20 font-semibold text-center">
            <h1 className="text-pink-800 text-2xl w-90 "> FINAL PRICE DETAILS</h1>
            <h1 className="text-lg capitalize">the total price ₹ {totalprice}</h1>
            <h1 className="text-lg">DELIVERY FEE ₹ {totalprice==0?0:150}</h1>
            <h1 className="text-lg">THE FINAL PRICE ₹ {totalprice==0?0:totalprice+150}</h1>
            </div>
        </div>

    </div>

}
export default Placeorder;