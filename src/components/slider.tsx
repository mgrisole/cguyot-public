import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import {type Component, type JSX} from "solid-js";

export const Slider: Component<{children?: JSX.Element | JSX.Element[]}> = ({children}) => {

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  return <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <div class="swiper-button-prev">prev</div>
      <div class="swiper-button-next">next</div>
    </div>;
}


