import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-10 px-6 flex flex-wrap justify-between items-start gap-10 mt-20 font-semibold" id="f">
      
      
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
