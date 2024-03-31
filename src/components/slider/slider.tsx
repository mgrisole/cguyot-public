import type {Component, JSX} from "solid-js";
import { BiRegularChevronLeft, BiRegularChevronRight } from "solid-icons/bi";

export const Slider: Component<{children?: JSX.Element | JSX.Element[]}> = ({children}) => {
  return (
    <div class="blaze-slider flex">
      <button aria-label="précédent" class="blaze-prev"><BiRegularChevronLeft class="text-3xl cursor-pointer" /></button>
      <div class="blaze-container flex-1">

        <div class="blaze-track-container">
          <div class="blaze-track">
            {children}
          </div>
        </div>

      </div>
        <button  aria-label="suivant" class="blaze-next"><BiRegularChevronRight class="text-3xl cursor-pointer" /></button>
    </div>
  );
};
