import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Trending = () => {
  useEffect(() => {
    new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      autoplay: { delay: 3000 },
      slidesPerView: 1,
      spaceBetween: 20,
    });
  }, []);

  const renderSlide = (restaurants) => (
    <div className="swiper-slide">
      <div className="flex gap-4">
        {restaurants.map((res) => (
          <div key={res.name} className="restaurant-card bg-purple-200 p-4 rounded-lg text-center flex-1">
            <h4 className="text-lg font-semibold text-purple-800">{res.name}</h4>
            <p className="text-purple-700">-Address-</p>
            <p className="text-purple-700">{res.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const slides = [
    [
      { name: 'Restaurant A', rating: '5.0 ★★★★★' },
      { name: 'Restaurant B', rating: '5.0 ★★★★★' },
      { name: 'Restaurant C', rating: '4.0 ★★★★☆' },
    ],
    [
      { name: 'Restaurant D', rating: '4.5 ★★★★½' },
      { name: 'Restaurant E', rating: '4.8 ★★★★★' },
      { name: 'Restaurant F', rating: '4.2 ★★★★☆' },
    ],
    [
      { name: 'Restaurant G', rating: '4.7 ★★★★★' },
      { name: 'Restaurant H', rating: '4.3 ★★★★☆' },
      { name: 'Restaurant I', rating: '4.9 ★★★★★' },
    ],
  ];

  return (
    <div className="swiper my-6 w-full max-w-3xl mx-auto rounded-lg">
      <div className="swiper-wrapper">
        {slides.map((group, index) => renderSlide(group))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Trending;
