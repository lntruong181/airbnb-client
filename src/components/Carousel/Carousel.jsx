import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { EffectCreative } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.scss';

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
