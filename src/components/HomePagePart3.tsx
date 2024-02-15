import img1 from "../images/WALLPAPER/1.jpg";
import img2 from "../images/WALLPAPER/1.jpg";
import img6 from "../images/WALLPAPER/2022061712314289-5973731049117497921-vFnRwhx-0sizeoriginal-1.jpg";
import img3 from "../images/WALLPAPER/african-safari.jpg";
import img4 from "../images/WALLPAPER/DSCF8131-2.jpg";
import img5 from "../images/WALLPAPER/DSCF0029.jpg";
// import img7 from "../images/WALLPAPER/"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Images = [
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
  // {
  //   image: img7,
  // }
];
const HomePagePart3 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="bg-white w-screen">
        <div className="items-center justify-center flex">
          <div className="text-center inline p-10 text-[24px]">
            <div>BLOG GALLERY</div>
            <div className="border border-gray-600"></div>
          </div>
        </div>
        <Carousel responsive={responsive} infinite={true} className="mb-10">
          {Images.map((item, index) => (
            <img key={index} src={item.image} className="w-full h-[500px]" />
          ))}
        </Carousel>
      </div>
      {/* </div> */}
    </>
  );
};
export default HomePagePart3;
