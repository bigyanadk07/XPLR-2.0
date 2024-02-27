import SignUpPic from "../images/WALLPAPER/sign up.jpg";
import Logow from "../images/WALLPAPER/xplr logo white PNG.png";

const SignUp = () => {
  return (
    <>
      <div className=" grid grid-cols-2">
        <div>
          <img
            className=" w-[630px] h-[638px] z-0 absolute"
            src={SignUpPic}
            alt=" Logo"
          />
          <img
            className=" z-10 w-20 h-20 absolute mt-1 ml-2"
            src={Logow}
            alt=" logo"
          />

          <div>
            <div className=" flex absolute top-72 translate-x-3/4 translate-y-1/2 z-10 text-white text-xl text-center">
              Already have an account?
            </div>
            <div className="   z-10 absolute text-white top-80  ">
              <button className=" translate-x-[370%] translate-y-1/2 border border-white rounded-xl p-2 hover:text-pink-500 hover:border-pink-500">
                Sign In
              </button>
            </div>
          </div>
        </div>
        <div className="inline">
          <div className=" flex list-none p-2 top-0 right-0 absolute">
            <li className="inline p-2 hover:underline cursor-pointer hover:text-pink-500">
              Home
            </li>
            <li className="inline p-2 hover:underline cursor-pointer hover:text-pink-500">
              About
            </li>
            <li className="inline p-2 hover:underline cursor-pointer hover:text-pink-500">
              Contact
            </li>
            <button className="border border-black p-2 rounded-xl hover:text-pink-500 hover:border-pink-500">
              Sign In
            </button>
          </div>
          <div className=" flex mt-40 ml-60">
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className=" w-80  hover:border-black top-[48%] right-[22%] bg-[#FEFAE0] border-b border-gray-300 focus:outline-none p-3 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Display Name"
                  className=" w-80  hover:border-black top-[48%] right-[22%] bg-[#FEFAE0] border-b border-gray-300 focus:outline-none p-3 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className=" w-80  hover:border-black top-[48%] right-[22%] bg-[#FEFAE0] border-b border-gray-300 focus:outline-none p-3 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                />
              </div>
              <div>
                <input
                  placeholder="Password"
                  className=" w-80 hover:border-black top-[60%] right-[22%] bg-[#FEFAE0] border-b border-gray-300 focus:outline-none p-3 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                />
              </div>
              <div>
                <input
                  placeholder="Confirm Password"
                  className=" w-80 hover:border-black top-[60%] right-[22%] bg-[#FEFAE0] border-b border-gray-300 focus:outline-none p-3 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                />
              </div>
              <div className=" p-2">
                <input type="radio" className=" rounded-none p-2" />
                Agree to all terms and conditions.
              </div>
              <div>
                <button className=" border border-black p-2 rounded-xl hover:border-pink-500 hover:text-pink-500">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
