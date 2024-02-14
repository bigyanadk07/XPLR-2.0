import img1 from "../images/WALLPAPER/DSCF3965-2.jpg";
import img2 from "../images/WALLPAPER/Homepage-Featured-Summer-Europe.jpg";
const HomePagePart2 = () => {
  return (
    <>
      <div className="bg-white w-screen">
        <div className="items-center justify-center flex">
          <div className="text-center inline p-10 text-[24px]">
            <div>FEATURED EXPERIENCES</div>
            <div className="border border-gray-600"></div>
          </div>
        </div>
        <div className="flex mx-20 gap-7">
          <div className="w-1/2 border-2 border-gray-500 rounded-2xl bg-[#f8edeb] inline">
            <div className=" p-10  pb-0 flex items-center justify-center">
              <img src={img1} className="w-full" />
            </div>
            <div className="text-center pt-5 px-24 text-[#a09897] text-[24px]">
              THE ULTIMATE TRAVEL BUCKET LIST FOR 2023
            </div>
            <div className="border border-[#a09897] w-auto my-10 mx-10"></div>
            <div className="text-[#a09897] text-center text-[20px] p-2">
              LEARN MORE
            </div>
          </div>
          <div className="w-1/2 border-2 border-gray-500 rounded-2xl bg-[#f8edeb] inline">
            <div className="p-10 pb-0 flex items-center justify-center">
              <img src={img2} className="w-full" />
            </div>
            <div className="text-center pt-5 px-24 text-[#a09897] text-[24px]">
              THE ULTIMATE TRAVEL BUCKET LIST FOR 2023
            </div>
            <div className="border border-[#a09897] w-auto my-10 mx-10"></div>
            <div className="text-[#a09897] text-center text-[20px] p-2">
              LEARN MORE
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePagePart2;
