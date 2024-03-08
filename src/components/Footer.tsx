import img1 from "../images/WALLPAPER/xplr logo white PNG.png";
import img2 from "../images/WALLPAPER/phone21.png";
import img3 from "../images/WALLPAPER/image 3.png";
import img4 from "../images/WALLPAPER/image 4.png";
import img5 from "../images/WALLPAPER/image 5.png";
import img6 from "../images/WALLPAPER/image 6.png";
import img7 from "../images/WALLPAPER/image 7.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" flex flex-row bg-black text-white justify-center p-10 px-20">
        <div className="w-[25%] ">
          <div className="text-2xl mb-3">Company Info</div>
          <div>
            A good plus of traveling is that often you get new skills without
            difficulty and without even noticing it.
          </div>
          <div>
            <img className="mt-5 h-20" src={img1} alt="" />
          </div>
        </div>
        <div className="w-[25%] ">
          <div className="ml-[40%]">
            <div className="text-2xl mb-3">Contact</div>
            <div className="-ml-3 flex flex-row">
              <img src={img2} />
              <div>123-456-78901</div>
            </div>
            <div className="-ml-2 my-3  flex flex-row ">
              <img src={img3} />
              <div className="pl-2">Gwarko, Lalitpur</div>
            </div>
            <div className="-ml-1 flex flex-row justify-between w-[90%]">
              <Link to="/">
                <img src={img4} alt="" />
              </Link>
              <Link to="/">
                <img src={img5} alt="" />
              </Link>
              <Link to="/">
                <img src={img6} alt="" />
              </Link>
              <Link to="/">
                {" "}
                <img src={img7} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[25%]">
          <div className="ml-[50%]">
            <div className="text-2xl mb-3 ">Quick Links</div>
            <div className="flex flex-col ">
              <Link className="pb-2" to="/">
                Home
              </Link>
              <Link className="pb-2" to="/about">
                About Us
              </Link>
              <Link className="pb-2" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
