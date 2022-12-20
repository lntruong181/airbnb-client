import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { EffectCreative } from 'swiper';

import 'swiper/css/effect-creative';
import './styles.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
const Carousel = ({ children }) => {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#22222',
        '--swiper-pagination-color': '#fff',
        '--swiper-pagination-bullet-inactive-color': '#fff',
        '--swiper-navigation-size': '11px',
      }}
      grabCursor={true}
      effect={'creative'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      modules={[EffectCreative, Navigation, Pagination]}
    >
      {children.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Carousel;
