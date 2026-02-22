function Hero(){
    return <div className="flex  justify-center items-center mt-0.5 flex-wrap gap-12 font-semibold bg-gradient-to-r from bg-pink-100 via-white to purple-50 px-6 min-h-[85vh]">
        <div className="w-150">
            <h1 className="text-5xl text-pink-600 ">Discover Your Style, Define Your Confidence</h1>
            <p className="mt-5 text-2xl text-gray-700">Explore the latest trends in fashion for men, women, and children. From everyday essentials to statement pieces, our collections are designed to bring comfort, quality, and style together — all at affordable prices.</p>
            <div className="mt-5">
                <button className="bg-pink-700 p-4 rounded-4xl text-white hover:bg-pink-800 hover:text-gray-800 transition duration-200">SHOP-NOW</button>
            </div>

        </div>
        <div>
            <img className="w-80 rounded-2xl" src="images.jpg"alt="hero-section-image "/>

        </div>

    </div>

}
export default Hero;