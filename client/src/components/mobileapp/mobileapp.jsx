import { assests } from "../../assests";

function Mobileapp(){
    return <div className="mt-20">
           <h1 className="text-center font-semibold text-4xl text-pink-800 capitalize">download our mobile app</h1>
           <p className="text-center ml-2 mr-2  mt-5 text-2xl font-semibold text-gray-700">Fashion Store is a modern and user-friendly mobile shopping application designed to bring the latest fashion trends directly to your fingertips. Our app offers a wide range of collections including Men's, Women's, Children's, Newborns, Winter, and Summer outfits, ensuring stylish options for every age and season</p>
        <div className="flex justify-center items-center gap-10 mt-6 flex-wrap">
         
            <div>
                <img className=" transition ease-in-out duration-150 hover:scale-125" src={assests.playstore}alt="playstore"/>

            </div>
            <div>
                <img className=" transition ease-in-out duration-150 hover:scale-125" src={assests.appstore} alt="appstore"/>

            </div>
        </div>
    </div>

}
export default Mobileapp;