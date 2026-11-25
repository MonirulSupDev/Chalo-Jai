// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay } from "swiper/modules";

const HomeSwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[EffectFade, Autoplay]}
      effect="fade"
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1704821708356-c313bbd2e0ad?q=80&w=1920&h=750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Slider image"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-center">
            <h2 className="text-4xl mb-8">
              Sundarban: Home of the Royal Bengal Tiger
            </h2>
            <p className="text-lg">
              Explore the world's largest mangrove forest, a UNESCO World
              Heritage Site full of wildlife and winding rivers.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1658383895221-173f07c6a9d0?q=80&w=1920&h=750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Slider image"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-center">
            <h2 className="text-4xl mb-8">
              Sajek Valley: Where Clouds Touch the Hills
            </h2>
            <p className="text-lg">
              Wake up above the clouds in the "Queen of Hills" of Rangamati,
              with lush green peaks and tribal culture.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1548524717-418e7dcbeb02?q=80&w=1920&h=750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Slider image"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-center">
            <h2 className="text-4xl mb-8">
              Cox's Bazar: The World's Longest Sea Beach
            </h2>
            <p className="text-lg">
              Relax on 120 km of golden sand, watch breathtaking sunsets, and
              enjoy the Bay of Bengal.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSwiper;
