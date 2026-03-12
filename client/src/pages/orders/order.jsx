import { IoBag } from "react-icons/io5";

function Order() {
  const orders = [
    {
      name: "T SHIRT",
      category: "MENS COLLECTIONS",
      address: "daliganj lucknow",
      pincode: 226020,
      phone: 9956337354,
      status: "processing",
      city: "lucknow",
      landmark: "al noor sweets",
    },
    {
      name: "BOOTS",
      category: "KIDS COLLECTIONS",
      address: "DELHI",
      pincode: 226026,
      phone: 9415546150,
      status: "out of delivery",
      city: "delhi",
      landmark: "jama masjid",
    },
    ,
    {
      name: "BOOTS",
      category: "KIDS COLLECTIONS",
      address: "DELHI",
      pincode: 226026,
      phone: 9415546150,
      status: "out of delivery",
      city: "delhi",
      landmark: "jama masjid",
    }

  ];

  return (
    <div className="h-screen font-semibold capitalize flex flex-col items-center mt-10 px-4">

      <h1 className="text-3xl mb-6 text-pink-800">My Orders</h1>

    
      <div className="w-full max-w-7xl overflow-x-auto border rounded-lg">

    
        <div className="flex text-center py-3 min-w-[1100px] bg-gray-100 font-bold">
          <div className="w-32">Image</div>
          <div className="w-32">Name</div>
          <div className="w-24">Qty</div>
          <div className="w-40">Category</div>
          <div className="w-40">Address</div>
          <div className="w-28">Pincode</div>
          <div className="w-36">Phone</div>
          <div className="w-32">Status</div>
          <div className="w-32">City</div>
          <div className="w-40">Landmark</div>
          <div className="w-24">Cancel</div>
        </div>

    
        {orders.map((i, index) => (
          <div
            key={index}
            className="flex items-center text-center border-t py-3 text-sm md:text-base min-w-[1100px]"
          >
            <div className="w-32 flex justify-center text-xl">
              <IoBag />
            </div>

            <div className="w-32">{i.name}</div>
            <div className="w-24">5</div>
            <div className="w-40">{i.category}</div>
            <div className="w-40">{i.address}</div>
            <div className="w-28">{i.pincode}</div>
            <div className="w-36">{i.phone}</div>
            <div className="w-32 text-yellow-600">{i.status}</div>
            <div className="w-32">{i.city}</div>
            <div className="w-40">{i.landmark}</div>

            <div className="w-24 text-red-600 text-xl cursor-pointer hover:scale-110">
              X
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;