import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Sneha & Varun",
    text: "Choosing this studio was the best decision we made for our wedding. The team made us feel so comfortable, and the photos are absolutely breathtaking!",
    image: "/images/review1.jpg"
  },
  {
    id: 2,
    name: "Ananya & Siddharth",
    text: "Our cinematic film felt like a real movie. They captured every emotion perfectly. Highly recommend their services for anyone looking for premium photography.",
    image: "/images/review2.jpg"
  },
  {
    id: 3,
    name: "Riya & Karan",
    text: "Professional, punctual, and creatively brilliant. The album quality is spectacular and the frames are stunning. Worth every penny!",
    image: "/images/review3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-beige relative overflow-hidden" id="testimonials">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-olive mb-12">Words of Love</h2>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-gold">
                  <img 
                    src={t.image} 
                    alt={t.name}
                    className="w-full h-full object-cover"
                    style={{ backgroundColor: '#C8B6A6' }}
                  />
                </div>
                <p className="text-lg md:text-2xl font-serif text-dark italic leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="text-sm uppercase tracking-widest text-brown font-medium">
                  {t.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Decorative quotes background */}
      <div className="absolute top-10 left-10 text-[200px] text-brown opacity-5 font-serif leading-none select-none">"</div>
    </section>
  );
};

export default Testimonials;
