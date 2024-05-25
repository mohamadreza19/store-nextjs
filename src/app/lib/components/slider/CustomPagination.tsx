import { RefObject, useEffect, useState } from "react";
import SwiperCore from "swiper";
import { SwiperRef } from "swiper/react";
interface CustomPaginationProps {
  swiper: SwiperCore;
}

const customBullet = "";
const CustomPagination: React.FC<CustomPaginationProps> = ({ swiper }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleBulletClick = (index: number) => {
    swiper.slideTo(index);
  };
  useEffect(() => {
    const handleSlideChange = () => {
      setActiveIndex(swiper.realIndex);
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className="custom-pagination absolute top-[90%] w-full  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center">
      {swiper.slides.map((_, index) => (
        <button
          key={index}
          className={`
          h-1 opacity-70 transition-all ease-in-out w-1 bg-neutral-900 rounded-full mx-1
           ${index === activeIndex ? "slider-1-bullet-active" : ""}`}
          onClick={() => handleBulletClick(index)}
        >
          {/* {index + 1} */}
        </button>
      ))}
    </div>
  );
};

export default CustomPagination;
