import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const OrderOnline = () => {
    return (
        <div className='lg:w-10/12 lg:mx-auto mx-10 my-10'>
            <SectionTitle
            subHeading={'---From 11:00am to 10:00pm---'}
            mainHeading={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className='text-3xl uppercase -mt-16 text-center text-white '>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className='text-3xl uppercase -mt-16 text-center text-white '>Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className='text-3xl uppercase -mt-16 text-center text-white '>Soup</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className='text-3xl uppercase -mt-16 text-center text-white '>Dessert</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className='text-3xl uppercase -mt-16 text-center text-white '>Salad</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderOnline;