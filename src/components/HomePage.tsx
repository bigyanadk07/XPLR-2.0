import logo1 from "../images/WALLPAPER/plc.png";

const HomePage = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[url('./src/images/WALLPAPER/maldives.jpg')] bg-cover">
        <div className="inline">
          <div className="text-white text-center p-5 text-[40px]">XPLR</div>
          <div className="flex items-center justify-center w-full mt-5">
            <div className="py-2 px-5 text-white hover:underline decoration-white cursor-pointer">
              Home
            </div>
            <div className="py-2 px-5 text-white hover:underline decoration-white cursor-pointer">
              About Us
            </div>
            <div className="py-2 px-5 text-white hover:underline decoration-white cursor-pointer">
              Contact
            </div>
            <div className="py-2 px-6 text-white hover:bg-slate-400 decoration-white cursor-pointer rounded-3xl border border-white ">
              Sign In
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="absolute bottom-1 right-2 mb-5 mr-4">
          <div className="flex">
            <div>
              <img src={logo1} className="w-10 h-10" />
            </div>
            <div className="inline">
              <div className="flex items-center text-[20px] text-white">
                Maldives
              </div>
              <div className="border border-white mt-2"></div>
            </div>
          </div>
        </div>
        {/* <div className="">
          <div className="bg-white w-1/2 h-1/4 items-center justify-center flex p-10 border-2 border-gray-600 rounded-3xl">
            <div className="inline">
              <div>Discover the planet</div>
              <div className=" bg-green-500 items-center justify-center flex py-3 px-6 rounded-2xl">
                Explore
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default HomePage;
