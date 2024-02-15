import logo1 from "../WALLPAPER/location (2).png";
import logo2 from "../WALLPAPER/phone.png";
import logo3 from "../WALLPAPER/telegram.png";
import logo4 from "../images/WALLPAPER/website.png";
const ContactBodyTwo = () => {
  return (
    <>
      <div className="bg-[#cbd3c5] grid grid-cols-4 gap-10 p-8 border-2 border-x-0 border-[#707171] w-screen">
        <div>
          <div className="flex items-center justify-center py-5">
            <div className="inline-block">
              <img
                src={logo1}
                alt="location logo is here"
                className="h-24 w-24"
              />
              <div className=" pl-2 pt-5">
                <div className="border border-black w-[90%] "></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            Address : Gwarko, Lalitpur
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center py-5">
            <div className="inline-block">
              <img
                src={logo2}
                alt="location logo is here"
                className="h-24 w-24"
              />
              <div className=" pl-2 pt-5">
                <div className="border border-black w-[90%] "></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            Phone : +977 9860777420
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center py-5">
            <div className="inline-block">
              <img
                src={logo3}
                alt="location logo is here"
                className="h-24 w-24"
              />
              <div className=" pl-2 pt-5">
                <div className="border border-black w-[90%] "></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            Email : team.xplr@google.com
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center py-5">
            <div className="inline-block">
              <img
                src={logo4}
                alt="location logo is here"
                className="h-24 w-24"
              />
              <div className=" pl-2 pt-5">
                <div className="border border-black w-[90%] "></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            Site : xplrgo.com.np
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactBodyTwo;
