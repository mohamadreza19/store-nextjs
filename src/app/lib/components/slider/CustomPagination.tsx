import { RefObject, useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import { SwiperRef } from 'swiper/react';
interface CustomPaginationProps {
  swiper: SwiperCore;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ swiper }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleBulletClick = (index: number) => {
    swiper.slideTo(index);
  };
  useEffect(() => {
    const handleSlideChange = () => {
      setActiveIndex(swiper.realIndex);
    };

    swiper.on('slideChange', handleSlideChange);

    return () => {
      swiper.off('slideChange', handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className="custom-pagination absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex gap-x-2">
      {swiper.slides.map((_, index) => (
        <button
          key={index}
          className={`custom-bullet ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleBulletClick(index)}
        >
          {/* {index + 1} */}
        </button>
      ))}
    </div>
  );
};

export default CustomPagination;
