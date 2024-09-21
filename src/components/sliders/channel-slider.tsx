"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import stream_01 from "@/assets/images/stream-01.jpg";
import stream_02 from "@/assets/images/stream-02.jpg";
import stream_03 from "@/assets/images/stream-03.jpg";
import stream_04 from "@/assets/images/stream-04.jpg";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    image: stream_01,
    channel: "tw_es",
  },
  {
    image: stream_02,
    channel: "Dark_Souls",
  },
  {
    image: stream_03,
    channel: "fifa21_lor",
  },
  {
    image: stream_04,
    channel: "kingdom_hearts",
  },
];

export default function ChannelSlider() {
  return (
    <div className="max-w-screen-full">
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={index} className="px-20">
            <Link href={slide.channel}>
              <Image
                alt={`slide-${index}`}
                src={slide.image}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-96 object-cover rounded-md"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
