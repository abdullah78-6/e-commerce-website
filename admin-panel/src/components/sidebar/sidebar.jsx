import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { control } from "../../redux/slice";

function Sidebar() {

  const sideclass = useSelector((state) => state.ainfo.class);
  const dispatch = useDispatch();

  return (
    <div className="
    hidden lg:flex flex-col items-center
    bg-pink-400 min-h-screen
    w-56 lg:w-64 xl:w-72
    text-center font-semibold
    overflow-auto py-10
    " >

      <div className="flex flex-col gap-10 w-full items-center">

        <Link
          to="/add"
          onClick={() => dispatch(control.setclass("add"))}
          className={`border rounded-xl px-8 py-2 text-lg lg:text-xl text-white transition hover:bg-orange-300 hover:text-gray-800
          ${sideclass === "add" ? "bg-orange-300 text-gray-800" : ""}`}
        >
          Add Item
        </Link>

        <Link
          to="/list"
          onClick={() => dispatch(control.setclass("list"))}
          className={`border rounded-xl px-8 py-2 text-lg lg:text-xl text-white transition hover:bg-orange-300 hover:text-gray-800
          ${sideclass === "list" ? "bg-orange-300 text-gray-800" : ""}`}
        >
          Item List
        </Link>

        <Link
          to="/order"
          onClick={() => dispatch(control.setclass("order"))}
          className={`border rounded-xl px-8 py-2 text-lg lg:text-xl text-white transition hover:bg-orange-300 hover:text-gray-800
          ${sideclass === "order" ? "bg-orange-300 text-gray-800" : ""}`}
        >
          Orders
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;