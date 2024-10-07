'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay,EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
import StarRating from './ui/star-rating';


// import SwiperCore, { Autoplay, Pagination } from 'swiper';
// import Marquee from "@/components/ui/marquee";

// Testimonial data array
const testimonials = [
  {
    rating: 4.9,
    text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly.",
    author: "Jane D",
    role: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png"
  },
  {
    rating: 3.2,
    text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
    author: "Harsh P.",
    role: "Product Designer",
    avatar: "https://pagedone.io/asset/uploads/1696229994.png"
  },
  {
    rating: 4.7,
    text: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
    author: "Alex K.",
    role: "Design Lead",
    avatar: "https://pagedone.io/asset/uploads/1696230027.png"
  },
  {
    rating: 4.7,
    text: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
    author: "Alex K.",
    role: "Design Lead",
    avatar: "https://pagedone.io/asset/uploads/1696230027.png"
  },
  {
    rating: 4.7,
    text: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
    author: "Alex K.",
    role: "Design Lead",
    avatar: "https://pagedone.io/asset/uploads/1696230027.png"
  },
  {
    rating: 4.7,
    text: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
    author: "Alex K.",
    role: "Design Lead",
    avatar: "https://pagedone.io/asset/uploads/1696230027.png"
  },
  {
    rating: 4.7,
    text: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
    author: "Alex K.",
    role: "Design Lead",
    avatar: "https://pagedone.io/asset/uploads/1696230027.png"
  },
  {
    rating: 4.7,
    text: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
    author: "Alex K.",
    role: "Design Lead",
    avatar: "https://pagedone.io/asset/uploads/1696230027.png"
  },
  {
    rating: 4.7,
    text: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
    author: "Alex K.",
    role: "Design Lead",
    avatar: "https://pagedone.io/asset/uploads/1696230027.png"
  },
  // Add more testimonials here
];

// SwiperCore.use([Autoplay, Pagination]);

export default function TestimonialSlider() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm text-gray-500 font-medium block mb-2">TESTIMONIAL</span>
          <h2 className="text-4xl font-bold text-gray-900">What our happy users say!</h2>
        </div>

        <Swiper

            modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay,EffectCoverflow]}
          spaceBetween={32}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}

        //   coverflowEffect={{
        //     rotate: 25,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: false,
        //   }}



          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}

          className="mySwiper bg-red300"
          grabCursor={true}
        //   pagination={{ clickable: true }}

        //   navigation
        //   watchSlidesProgress
        //   effect='coverflow'
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className=" bg-white border border-gray-300 rounded-xl p-6 transition-all hover:border-indigo-600 hover:shadow-sm">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500">
                    <StarRating rating={testimonial.rating}/>
                    <span className="text-base font-semibold text-indigo-600"> {testimonial.rating}</span>
                  </div>
                  <p className="text-base text-gray-600 leading-6 pb-8 group-hover:text-gray-800">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-gray-200 pt-5">
                  <img className="rounded-full h-10 w-10 object-cover" src={testimonial.avatar} alt="avatar" />
                  <div>
                    <h5 className="text-gray-900 font-medium">{testimonial.author}</h5>
                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}


// export default function TestimonialSlider() {
//     return (
//       <section className="py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mb-16 text-center">
//             <span className="text-sm text-gray-500 font-medium block mb-2">TESTIMONIAL</span>
//             <h2 className="text-4xl font-bold text-gray-900">What our happy users say!</h2>
//           </div>
  
//           <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//         </div>
//       </section>
//     );
//   }
