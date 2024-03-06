import Footer from "./Footer";
import Header from "./Header";
const Contact = () => {
  return (
    <>
      <Header />
      <div>
        <div className="flex mt-36 text-7xl justify-center">
          List to Inspire
        </div>
        <div className="mx-10 my-10">
          <div className=" w-20"></div>
          <div className=" flex justify-between mx-32">
            <div>
              <img
                className="w-64 h-72 rounded-xl bg-gray-300"
                src={""}
                alt=""
              />
              <div className=" flex justify-center">Bucket List</div>
            </div>
            <div>
              <img
                className="w-64 h-72 rounded-xl bg-gray-300"
                src={""}
                alt=""
              />{" "}
              <div className=" flex justify-center">Bucket List</div>
            </div>
            <div>
              {" "}
              <img
                className="w-64 h-72 rounded-xl bg-gray-300"
                src={""}
                alt=""
              />
              <div className=" flex justify-center">Bucket List</div>
            </div>
            <div>
              <img
                className="w-64 h-72 rounded-xl bg-gray-300"
                src={""}
                alt=""
              />
              <div className=" flex justify-center">Bucket List</div>
            </div>
          </div>
          <div className="mx-32 my-10">
            <div className=" p-10">
              <div className=" text-6xl ">Top 5 Bucket List Ideas</div>
            </div>
            <div className=" p-5 flex w-[70%] border-2 border-x-0 border-t-4">
              <img src="#" alt="an image is here" />
              <div>1</div>
              <div className=" text-3xl font-serif ">
                See The Northern Lights
              </div>
            </div>
            <div className=" p-5 flex w-[70%] border-2 border-x-0">
              <img src="#" alt="an image is here" />
              <div>2</div>
              <div className=" text-3xl font-serif ">Skydive</div>
            </div>
            <div className=" p-5 flex w-[70%] border-2 border-x-0">
              <img src="#" alt="an image is here" />
              <div>3</div>
              <div className=" text-3xl font-serif ">Visit Lauterbrunnen</div>
            </div>
            <div className=" p-5 flex w-[70%] border-2 border-x-0">
              <img src="#" alt="an image is here" />
              <div>4</div>
              <div className=" text-3xl font-serif ">Go on a Cruise</div>
            </div>
            <div className=" p-5 flex w-[70%] border-2 border-x-0 border-b-4">
              <img src="#" alt="an image is here" />
              <div>5</div>
              <div className=" text-3xl font-serif ">Swim with Dolphins</div>
            </div>
          </div>
        </div>
        <div className="mx-10"></div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
