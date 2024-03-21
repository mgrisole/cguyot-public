import {type Component, createSignal, type JSX} from "solid-js";
import { BiRegularPlus, BiRegularMinus } from "solid-icons/bi";

export const MoreInfo: Component<{children?: JSX.Element | JSX.Element[]}> = ({children}) => {

  const [toggled, setToggled] = createSignal(false);

  return <div>
    <div class={"flex mt-8 p-3 justify-end"}>
      <button
        onClick={() => setToggled(!toggled())}
        class={"flex bg-independence text-baby-powder items-center gap-2 px-5 py-3 border rounded-2xl border-independence shadow-md"}>
        <span class="text-xl">{toggled() ? <BiRegularMinus/> : <BiRegularPlus/>}</span>
        <span class="text-baby-powder">En savoir plus</span>
      </button>
    </div>

    <div class={`overflow-hidden ${toggled() ? "block" : "hidden"}`}>
      <div class={"border rounded-2xl border-independence p-5"}>
        {children}
      </div>
    </div>
  </div>;
}




