import { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useDispatch} from "react-redux"
import { manage } from "../../store/products-slice";
import axios from "axios"
function Footer() {
  const dispatch=useDispatch();

// const apikey="47fac61afc4b40cfa793600b7b9ce5bb";
const apikey="eb63b27e49f54a35b4940fec9ee05cb2";
 useEffect(()=>{
  if(!navigator.geolocation){
    dispatch(manage.setcityname("PLEASE TURN ON YOUR LOCATION "));
    return ;
   }
  navigator.geolocation.getCurrentPosition(async(position)=>{
   const  latitude=position.coords.latitude;
   const  longitude=position.coords.longitude;
   
   const response=await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&type=postcode&format=json&apiKey=${apikey}`);
    const district=response?.data?.results?.[0]?.county;
    if(district){
      dispatch(manage.setcityname(district));
      
    }
   
    
  }, (err)=>{
      dispatch(manage.setcityname("PLEASE  ON YOUR LOCATION "));

    }
  
)
  
 },[]);
 return (
    <div className="bg-gray-900 text-white py-10 px-6 flex flex-wrap justify-between items-start gap-10 mt-20 font-semibold" id="f">
      
      
      <div className="max-w-sm ">
        <h1 className="text-4xl  lg:text-3xl font-semibold text-pink-700 mb-3">CLOTHES-SHOP</h1>
        <p className="text-lg leading-relaxed">
          We bring you high-quality products at unbeatable prices. Our mission is to make online shopping simple, secure, and enjoyable for everyone.
        </p>
        <div className="flex gap-4 mt-5 text-2xl">
          <a href="#"><FaFacebookF className="hover:text-pink-500 cursor-pointer" /></a>
          <a href="#"><FaInstagram className="hover:text-pink-500 cursor-pointer" /></a>
          <a href="#"><FaTwitter className="hover:text-pink-500 cursor-pointer" /></a>
          <a href="#"><FaYoutube className="hover:text-pink-500 cursor-pointer" /></a>
        </div>
      </div>

      
      <div className="max-w-sm">
        <h2 className="text-3xl  font-semibold text-pink-700 mb-3">Subscribe to Our Newsletter</h2>
        <p className="text-lg leading-relaxed mb-4">
          Sign up to receive exclusive offers, latest product updates, and special discounts straight to your inbox.
        </p>
    </div>

      
      <div className="max-w-sm">
        <h2 className="text-3xl font-semibold text-pink-700 mb-3">Contact Us</h2>
        <p className="flex items-center text-lg mb-2" id="c">
          <FaPhoneAlt className="mr-3 text-pink-700" /> +91-9956xxxxxx
        </p>
        <p className="flex items-center text-lg">
          <MdEmail className="mr-3 text-pink-700" /> support@clothes-shop.com
        </p>
      </div>
   
    </div>
  );
}

export default Footer;
