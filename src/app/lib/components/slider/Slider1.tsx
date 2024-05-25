import Image from "next/image";
import React, { createRef } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { ArrowBack, ArrowForward } from "../button";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomPagination from "./CustomPagination";

interface Slider1Props {}

interface Slider1State {
  swiper: SwiperCore | null;

  allowShowArrows: boolean;
}
const data = [
  "/asset/img/slider/1.webp",
  "/asset/img/slider/2.webp",
  "/asset/img/slider/3.webp",
  "/asset/img/slider/4.webp",
];

class Slider1 extends React.Component<Slider1Props, Slider1State> {
  private swiperId = `$${Math.random() * 10000}`;
  state: Readonly<Slider1State> = {
    swiper: null,
    allowShowArrows: false,
  };
  constructor(props: Slider1Props) {
    super(props);
  }

  private forward = () => {
    if (!this.state.swiper) return;
    this.state.swiper.slidePrev();
  };
  private back = () => {
    if (!this.state.swiper) return;
    this.state.swiper.slideNext();
  };
  private serveSwiper(swiper: SwiperCore) {
    this.setState({ swiper });
  }

  componentDidMount(): void {
    document
      .getElementById(this.swiperId)
      ?.addEventListener("mouseenter", (e) => {
        this.setState({ ...this.state, allowShowArrows: true });
      });
    document
      .getElementById(this.swiperId)
      ?.addEventListener("mouseleave", (e) => {
        this.setState({ ...this.state, allowShowArrows: false });
      });
  }

  render() {
    return (
      <Swiper
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        id={this.swiperId}
        modules={[Autoplay]}
        onSwiper={(swiper) => this.serveSwiper(swiper)}
        className="w-100 relative "
        spaceBetween={0}
        slidesPerView={1}
        loop
        onSlideChange={() => console.log("slide change")}
        dir="ltr"
      >
        {data.map((src, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full h-[300px]">
                <Image
                  quality={100}
                  // width={"1080"}
                  // height={"300"}
                  alt="slider"
                  layout="fill"
                  unoptimized
                  src={src}
                />
              </div>
            </SwiperSlide>
          );
        })}
        <div
          className={`${
            !this.state.allowShowArrows && "hidden"
          } absolute top-3/4 right-0 transform -translate-x-1/2 -translate-y-1/2 z-10 flex gap-x-2`}
        >
          <ArrowBack onClick={this.forward} />
          <ArrowForward onClick={this.back} />
        </div>
        {this.state.swiper && <CustomPagination swiper={this.state.swiper} />}
      </Swiper>
    );
  }
}

export default Slider1;
