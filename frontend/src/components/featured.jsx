import { Colors } from "../themes/color";
import Johnsmith from "./johnsmith";

export default function Featured() {
  return (
    <section className="w-[95vw] mx-auto h-[93vh] my-8 rounded-3xl overflow-hidden relative">
      <article className="flex h-[100%]">
        <div className="bg-[#E7FAFE] h-[100%] w-[50%] p-[3rem] relative">
          <span className="flex gap-[0.5rem] items-center bg-[white] w-[10rem] p-[0.4rem] rounded-[2rem] justify-center mb-8">
            <img className="w-[2rem] h-[2rem]" src="/assets/file.png" alt="" />
            <p className="font-bold">Hot Recipes</p>
          </span>

          <h1 className="text-[3.5rem] font-bold leading-[4rem] mb-4">
            Spicy delecious chicken wings
          </h1>

          <p className="text-[#00000099] text-xl leading-[2rem] my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            velit ipsa, consectetur voluptate, nemo fugiat tempora eum optio
            quibusdam sint iste suscipit.
          </p>

          <span className="flex gap-[2rem] my-8">
            <span className="flex gap-[1rem] items-center bg-[#0000000D] p-[0.5rem] rounded-[10rem] w-[7rem] justify-center">
              <i className="fa-solid fa-clock"></i>
              <p>30min</p>
            </span>
            <span className="flex gap-[1rem] items-center p-[0.5rem] rounded-[10rem] w-[7rem] bg-[#0000000D] justify-center">
              <i className="fa-solid fa-utensils"></i>
              <p>Chicken</p>
            </span>
          </span>

          {/*bloc adam smith*/}
          <div className="absolute bottom-[3rem] left-[3rem] right-[3rem] flex justify-between items-end">
            <Johnsmith />

            <div>
              <button className="text-[white] bg-[black] px-[2rem] py-[1rem] shadow-lg rounded-xl cursor-pointer hover:-translate-y-2 transition-all duration-300 flex items-center gap-2">
                View Recipes <i className="fa-solid fa-circle-play"></i>
              </button>
            </div>
          </div>
        </div>
        {/* bloc Img-Bg */}
        <div className="w-[60%] h-[100%] bg-[url('/assets/bg.jpg')] bg-cover bg-[75%] bg-no-repeat"></div>
      </article>
    </section>
  );
}
