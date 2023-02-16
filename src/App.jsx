import image from "./assets/image-equilibrium.jpg";
import eth from "./assets/icon-ethereum.svg";
import time from "./assets/icon-clock.svg";
import avatar from "./assets/image-avatar.png";
import view from "./assets/icon-view.svg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="p-6 w-[330px] h-[550px] bg-[#15273f] rounded-2xl shadow-2xl">
        <div class="relative rounded-2xl cursor-pointer group">
          <div class="absolute inset-0 bg-[#00fff7] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-50 "></div>
          <img
            src={view}
            alt=""
            class="w-10 h-10 opacity-0
              group-hover:opacity-100 transition-opacity duration-300 absolute flex items-center justify-center inset-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <img src={image} alt="" class="rounded-lg shadow-2xl" />
        </div>

        <h1 className="pt-6 text-xl hover:text-[#00fff7] cursor-pointer">
          Equilibrium #3429
        </h1>
        <p className="text-[#8bacda] leading-7 pt-3">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="flex justify-between py-3">
          <div className="flex">
            <img src={eth} alt="" className="object-scale-down" />
            <p className="ml-2 text-[#00fff7]">0.041 ETH</p>
          </div>

          <div className="flex">
            <img src={time} alt="" className="object-scale-down" />
            <p className="ml-2 text-[#8bacda]">3 days left</p>
          </div>
        </div>
        <hr className="opacity-10 " />
        <div className="flex items-center pt-4">
          <img
            src={avatar}
            alt=""
            className="border rounded-full h-[34px] w-[32px]"
          />
          <p className="text-[#8bacda] leading-7 ml-4">
            Creation of
            <span className="text-white hover:text-[#00fff7] cursor-pointer ml-1">
              Jules Wyvern
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
