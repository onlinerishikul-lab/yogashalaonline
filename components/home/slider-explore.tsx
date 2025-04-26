// components/PanoramaSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";

type PanoramaSliderProps = {
  images: string[];
};

const PanoramaSlider: React.FC<PanoramaSliderProps> = ({ images }) => {
  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      <Swiper
        effect="cube"
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCube, Pagination, Navigation]}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PanoramaSlider;
