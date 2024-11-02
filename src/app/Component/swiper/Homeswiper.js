import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from './1.webp';
import img2 from './2.webp';
import img3 from './3.webp';
import img4 from './4.webp';
import img5 from './5.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container } from '@mui/material';
export default function Homeswiper() {
    return (
        <Container>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                navigation={true}
                centeredSlides={true}
                // pagination={{
                //     clickable: true,
                // }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1.src} alt='' /></SwiperSlide>
                <SwiperSlide><img src={img2.src} alt='' /></SwiperSlide>
                <SwiperSlide><img src={img3.src} alt='' /></SwiperSlide>
                <SwiperSlide><img src={img4.src} alt='' /></SwiperSlide>
                <SwiperSlide><img src={img5.src} alt='' /></SwiperSlide>
            </Swiper>
        </Container>
    )
}
