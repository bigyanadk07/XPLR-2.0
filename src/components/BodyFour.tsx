import logo1 from "../WALLPAPER/facebook.png";
import logo2 from "../WALLPAPER/instagram.png";
import logo3 from "../WALLPAPER/twitter.png";
import logo4 from "../WALLPAPER/linkedin.png";
const BodyFour = () => {
  return (
    <>
      <div className=" bg-[#ece7e2] p-5 w-screen relative bottom-0 tracking-widest">
        <div className="text-2xl tracking-widest ">
          SUBSCRIBE TO OUR NEWSLETTER
        </div>
        <input
          className="w-[30%] rounded-4xl p-2 m-2 placeholder:p-3"
          type="email"
          placeholder="EMAIL"
        />
        <div className="p-2">
          <div>HOME</div>
          <div>CONTACT</div>
          <div>ABOUT US</div>
          <div className="flex flex-row justify-between">
            <div className="flex text-2xl items-end space-x-4">
              <div>TEAM</div>
              <div>XPLR</div>
            </div>
            <div>
              <div className="flex items-center justify-end pr-12 pb-3">
                <div className="inline-block ">
                  <div className="pb-1 tracking-widest">
                    CONNECT US ON SOCIALS
                  </div>
                  <div className="border border-black"></div>
                </div>
              </div>
              <div className="flex space-x-9 p-3">
                <img src={logo2} alt="" className="h-16" />
                <img src={logo1} alt="" className="h-16" />
                <img src={logo4} alt="" className="h-16" />
                <img src={logo3} alt="" className="h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BodyFour;
