'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const testimonials = [
  {
    name: 'Nguyễn Văn Hải',
    role: 'Doanh nhân',
    image: '/../public/assets/customer/profile2.jpg',
    content: 'Thịt trâu gác bếp Tây Bắc thật sự mang lại hương vị độc đáo, đậm đà và khác biệt. Món ăn này không chỉ ngon mà còn gợi nhớ về vùng núi Tây Bắc hùng vĩ.'
  },
  {
    name: 'Trần Thu Hương',
    role: 'Nhân viên văn phòng',
    image: '/../public/assets/customer/profile1.jpg',
    content: 'Tôi đã thử rất nhiều loại thịt khô, nhưng thịt trâu gác bếp Tây Bắc có hương vị đặc trưng không lẫn vào đâu được. Đậm vị và không quá khô, rất phù hợp cho các bữa tiệc.'
  },
  {
    name: 'Phạm Minh Quân',
    role: 'Nhân viên văn phòng',
    image: '/../public/assets/customer/profile5.jpg',
    content: 'Thịt trâu gác bếp Tây Bắc là món nhắm hoàn hảo cho những buổi gặp gỡ bạn bè. Vị cay nhẹ, hương thơm của khói bếp và vị ngọt tự nhiên của thịt làm cho món ăn này khó quên.'
  },
  {
    name: 'Lê Thanh Hòa',
    role: 'Kinh doanh tự do',
    image: '/../public/assets/customer/profile3.jpg',
    content: 'Thịt trâu gác bếp Tây Bắc mang đến trải nghiệm hương vị rất đặc biệt. Tôi đặc biệt thích cách thịt được ướp đậm đà và mùi thơm từ cách nướng bằng bếp củi truyền thống.'
  },
  {
    name: 'Nguyễn Thị Mai',
    role: 'Giáo viên',
    image: '/../public/assets/customer/profile4.jpg',
    content: 'Tôi đã mua thịt trâu gác bếp Tây Bắc để làm quà biếu, và ai cũng khen ngợi món này. Chất lượng cao, vị ngon đậm đà, rất xứng đáng để thưởng thức hoặc tặng cho người thân.'
  },
  // Add more testimonials as needed
]


export default function TestimonialSlider() {
  const swiperRef = useRef<Swiper | null>(null)

  useEffect(() => {
    swiperRef.current = new Swiper('.mySwiper', {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 28,
      loop: true,
      navigation: {
        nextEl: '#slider-button-right',
        prevEl: '#slider-button-left',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 28,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    })

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy()
      }
    }
  }, [])

  return (
    <section className="pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex text-center justify-center">
          <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8 max-w-lg">
            Những {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr text-primary" style={{ color: "rgba(236, 71, 85, var(--tw-text-opacity))" }}>
              Feedback
            </span>
            {' '} của các vị khách hàng đầu tiên
          </h2>
        </div>
        <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          <div className="w-full flex items-center">
            <div className="mr-4">
              <button
                id="slider-button-left"
                className="group flex justify-center items-center border border-solid border-primary w-12 h-12 transition-all duration-500 rounded-lg hover:bg-primary"
                aria-label="Previous slide"
              >
                <svg
                  className="h-6 w-6 text-primary group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-primary"
                  >
                    <div className="flex items-center gap-5 mb-5 sm:mb-5">
                      <Image
                        src={testimonial.image}
                        alt={`Avatar of ${testimonial.name}`}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div className="grid gap-1">
                        <h5 className="text-gray-900 font-medium transition-all duration-500">
                          {testimonial.name}
                        </h5>
                        <span className="text-sm leading-6 text-gray-500">{testimonial.role}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800 mb-5 sm:mb-5">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-2 text-amber-500 transition-all duration-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                            fill="orange"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ml-4">
              <button
                id="slider-button-right"
                className="group flex justify-center items-center border border-solid border-primary w-12 h-12 transition-all duration-500 rounded-lg hover:bg-primary"
                aria-label="Next slide"
              >
                <svg
                  className="h-6 w-6 text-primary group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}