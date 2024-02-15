import logo1 from "../WALLPAPER/empathy.png";
import logo2 from "../WALLPAPER/customer.png";
import logo3 from "../WALLPAPER/question.png";
import logo4 from "../WALLPAPER/binoculars.png";
const BodyTwo = () => {
  return (
    <>
      <div className="mb-16 mt-5">
        <div className=" text-5xl text-center py-8">Our Values</div>
        <div className=" grid grid-cols-2 grid-rows-2 gap-6">
          <div className=" relative justify-self-end w-[60%]">
            <div className="absolute -top-5 -left-16 border rounded-full bg-white border-[#707171] h-36 w-36">
              <img src={logo1} alt="logo1" className=" p-5" />
            </div>
            <div className=" text-3xl pl-24 p-2">Empathy</div>
            <div className="p-5 bg-[#bbd1fe] border-[#707171] border rounded-4xl">
              <div className="p-8 pt-10 ">
                <span className="pl-16">Understanding</span> travelers' feelings
                creates meaningful and compassionate travel solutions.
              </div>
            </div>
          </div>
          <div className=" w-[60%] relative">
            <div className="absolute -top-5 -right-16 border rounded-full bg-white border-[#707171] h-36 w-36 ">
              <img src={logo2} alt="logo1" className="p-6" />
            </div>
            <div className="text-end text-3xl pr-24 p-2">Customer Centric</div>
            <div className="p-5 bg-[#bbd1fe] border border-[#707171] rounded-4xl ">
              <div className="p-8 pt-10 pb-14">
                Tailoring every service to exceed travelers' desires and
                expectations.
              </div>
            </div>
          </div>
          <div className="justify-self-end w-[60%] relative">
            <div className="absolute -top-5 -left-16 border rounded-full bg-white border-[#707171] h-36 w-36">
              <img src={logo3} alt="logo1" className=" p-5" />
            </div>
            <div className="text-3xl pl-24 p-2">Curiosity</div>
            <div className="p-5 bg-[#bbd1fe] border border-[#707171] rounded-4xl ">
              <div className="p-8 pt-10">
                <span>Igniting</span> wanderlust through endless opportunities
                for exploration and discovery.
              </div>
            </div>
          </div>
          <div className=" w-[60%] relative">
            <div className="absolute -top-5 -right-16 border rounded-full bg-white border-[#707171] h-36 w-36">
              <img src={logo4} alt="logo1" className=" p-3" />
            </div>
            <div className=" text-3xl text-end pr-24 p-2">Exploration</div>
            <div className="p-5 bg-[#bbd1fe] border border-[#707171] rounded-4xl ">
              <div className="p-8 pt-10 pb-14">
                Unveiling new horizons, cultures, and experiences for
                adventurous souls.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BodyTwo;
