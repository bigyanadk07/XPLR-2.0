import wall from "../images/WALLPAPER/signup page.jpg";
const ContactBodyThree = () => {
  return (
    <>
      <div className="grid grid-cols-2 mb-16 ml-6 pt-16 rounded-5xl">
        <div className="border border-[#707171] rounded-5xl p-6 relative left-8 shadow-xl bg-white">
          <div className="inline">
            <div className=" text-4xl">Contact Us</div>
            <div className="pt-5 ">
              <input
                type="text"
                placeholder="Full Name"
                className="border-b border-black py-1 w-[70%] placeholder:text-2xl placeholder:pl-2 "
              />
            </div>
            <div className="pt-5 ">
              <input
                type="text"
                placeholder="Subject"
                className="border-b border-black py-1 w-[70%] placeholder:text-2xl placeholder:pl-2 "
              />
            </div>
            <div className="pt-5 ">
              <input
                type="Email"
                placeholder="Email"
                className="border-b border-black py-1 w-[70%] placeholder:text-2xl placeholder:pl-2 "
              />
            </div>
            <div className="pt-5 ">
              <input
                type="text"
                placeholder="Message"
                className="border-b border-black py-1 w-[70%] placeholder:text-2xl placeholder:pl-2 pb-8"
              />
            </div>
            <div className="flex items-center justify-center pr-48 m-8">
              <div className="border-2 rounded-full px-8 py-1 text-xl uppercase tetx ">
                Submit
              </div>
            </div>
          </div>
        </div>
        <div className="p-0  relative right-5 w-full">
          <img
            src={wall}
            alt=""
            className="object-cover w-[600px] h-[450px] "
          />
        </div>
      </div>
    </>
  );
};
export default ContactBodyThree;
