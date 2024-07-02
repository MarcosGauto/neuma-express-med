'use client'

import slider1 from "../../../../../public/img/slider1.jpg";
import slider2 from "../../../../../public/img/slider2.jpg";
import slider3 from "../../../../../public/img/slider3.jpg";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
        <SwiperSlide className='image'>
            <Image src={slider1} alt=""/>
          </SwiperSlide>
        <SwiperSlide className='image'>
          <Image src={slider2} alt=""/>
        </SwiperSlide >
        <SwiperSlide className='image'>
          <Image src={slider3} alt=""/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
