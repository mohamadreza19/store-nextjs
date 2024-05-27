import Image from 'next/image';
import React, { useRef, useState, useEffect, FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper';
import Badge1 from '../badge/Badge1';
import Badge2 from '../badge/Badge2';
import { NumberService } from '../../services';
import { ArrowBack, ArrowForward } from '../button';

interface Slider2Props {}

const array = [
  {
    src: '/asset/img/test.webp',
    price: NumberService.toLocaledNumber(27000000),
    offPrice: NumberService.toLocaledNumber(20000000),
    offPercent: NumberService.calculatePercentageDecrease(27000000, 20000000),
  },
  {
    src: '/asset/img/test.webp',
    price: NumberService.toLocaledNumber(80000000),
    offPrice: NumberService.toLocaledNumber(72600000),
    offPercent: NumberService.calculatePercentageDecrease(80000000, 72600000),
  },
  {
    src: '/asset/img/test.webp',
    price: NumberService.toLocaledNumber(27000000),
    offPrice: NumberService.toLocaledNumber(20000000),
    offPercent: NumberService.calculatePercentageDecrease(27000000, 20000000),
  },
  {
    src: '/asset/img/test.webp',
    price: NumberService.toLocaledNumber(80000000),
    offPrice: NumberService.toLocaledNumber(72600000),
    offPercent: NumberService.calculatePercentageDecrease(80000000, 72600000),
  },
  {
    src: '/asset/img/test.webp',
    price: NumberService.toLocaledNumber(27000000),
    offPrice: NumberService.toLocaledNumber(20000000),
    offPercent: NumberService.calculatePercentageDecrease(27000000, 20000000),
  },
  {
    src: '/asset/img/test.webp',
    price: NumberService.toLocaledNumber(80000000),
    offPrice: NumberService.toLocaledNumber(72600000),
    offPercent: NumberService.calculatePercentageDecrease(80000000, 72600000),
  },
  {
    src: '/asset/img/test.webp',
    price: NumberService.toLocaledNumber(27000000),
    offPrice: NumberService.toLocaledNumber(20000000),
    offPercent: NumberService.calculatePercentageDecrease(27000000, 20000000),
  },
  {
    src: '/asset/img/test.webp',
    price: NumberService.toLocaledNumber(80000000),
    offPrice: NumberService.toLocaledNumber(72600000),
    offPercent: NumberService.calculatePercentageDecrease(80000000, 72600000),
  },
  // Add more items as needed
];

const Slider2: FC<Slider2Props> = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (swiperInstance) {
      const handleSlideChange = () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      };
      swiperInstance.on('slideChange', handleSlideChange);
      swiperInstance.on('reachEnd', () => setIsEnd(true));
      return () => {
        swiperInstance.off('slideChange', handleSlideChange);
      };
    }
  }, []);

  const nextSlide = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const prevSlide = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="!px-0.5 bg-rose-600 rounded-2xl relative">
      <ArrowBack
        className={`absolute ${
          isEnd && '!hidden'
        } top-1/2 transform -translate-y-1/2 z-10 left-2 `}
        onClick={prevSlide}
      />
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={2}
        // slidesPerView={4.8}
        // slidesPerView={1}
        className="!py-5"
        breakpoints={{
          0: {
            slidesPerView: 2.5,
          },
          639: {
            slidesPerView: 3,
          },
          857: {
            slidesPerView: 4.8,
          },
          1052: {
            slidesPerView: 5,
          },
          1382: {
            slidesPerView: 8,
          },
        }}
      >
        <SwiperSlide className="">
          <section className="mx-auto">
            <Image
              className="mx-auto select-none"
              width={88}
              height={66}
              alt="Amazings"
              src={'/asset/img/Amazings.svg'}
            />
          </section>
          <section className="mx-auto">
            <Image
              className="mx-auto select-none"
              width={135}
              height={111}
              alt="Amazings"
              src={'/asset/img/box.webp'}
            />
            <div className="text-sm font-bold text-white flex justify-center items-center">
              <p className=" select-none">مشاهده همه</p>
              <IoIosArrowBack className="inline-block ms-1" />
            </div>
          </section>
        </SwiperSlide>
        {array.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`!h-auto px-4 py-2 flex flex-col ${
              index === 0 && 'rounded-s-md'
            }  bg-white`}
          >
            <section className="flex justify-center items-center">
              <Image src={item.src} width={140} height={140} alt="" />
            </section>
            <section>
              <div className="flex justify-between my-3">
                <Badge1>
                  {NumberService.toLocaledNumber(item.offPercent)}٪
                </Badge1>
                <Badge2>{item.price}</Badge2>
              </div>
              <p className="w-fit text-neutral-300 text-sm me-5 ms-auto relative">
                {item.offPrice}
                <span className="inline-block w-full h-[1px] bg-neutral-300 absolute top-1/2 left-0"></span>
              </p>
              <div className="w-full dir-ltr rounded-md overflow-hidden h-1 bg-neutral-300">
                <div
                  style={{ width: item.offPercent + '%' }}
                  className="h-full bg-rose-600"
                ></div>
              </div>
            </section>
          </SwiperSlide>
        ))}
        <SwiperSlide className=" bg-white rounded-e-md !h-auto">
          <div className="w-full h-full flex flex-col gap-x-3 justify-center items-center">
            <ArrowBack className={`text-sky-500 `} onClick={nextSlide} />
            <p className="mt-3 font-semibold">مشاهده همه</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <ArrowForward
        className={`absolute ${
          isBeginning && '!hidden'
        } top-1/2 transform -translate-y-1/2 z-10 right-2`}
        onClick={nextSlide}
      />
    </div>
  );
};

export default Slider2;
