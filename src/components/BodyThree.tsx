import logo1 from "../WALLPAPER/man.png";
import logo2 from "../WALLPAPER/man (1).png";
import logo3 from "../WALLPAPER/man (2).png";
const BodyThree = () => {
  return (
    <>
      <div className=" bg-[#fed8b6] mb-9  w-screen pb-5">
        <div className="flex items-center justify-center p-8">
          <div className="inline-block ">
            <div className="text-5xl pb-3">Our Dev Team</div>
            <div className="border border-black"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-5">
          <div className=" justify-self-center ">
            <div>
              <img src={logo2} className="h-56" />
              <div className="text-center">Bigyan Pd. Adhikari</div>
            </div>
          </div>
          <div className=" justify-self-center ">
            <div>
              <img src={logo3} className="h-56" />
              <div className="text-center"> Sohail Raj Maharjan</div>
            </div>
          </div>

          <div className="  justify-self-center">
            <div>
              <img src={logo1} className="h-56" />
              <div className="text-center"> Aman Shakya</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BodyThree;
