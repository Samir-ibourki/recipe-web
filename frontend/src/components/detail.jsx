import Johnsmith from "./johnsmith";

export default function RecipeDetail() {
  return (
    <div className="max-w-[1200px] mx-auto p-[2.5rem]">
      {/*title */}
      <div className="mb-[2.5rem]">
        <h1 className="text-[3rem] font-semibold capitalize mt-[2rem] ">
          loermlorem lorem lorem{" "}
        </h1>

        <div className="flex justify-between items-center mt-[1.2rem] ">
          <div className="flex items-center gap-[4rem] mt-[1.2rem] ">
            <Johnsmith />
            <span className="flex items-center gap-4">
              <i className="fa-solid fa-clock text-lg"></i>
              <span>
                <p className="font-bold  ">PREP TIME</p>
                <p>20 Minutes</p>
              </span>
            </span>
            <span className="flex items-center gap-4">
              <i className="fa-solid fa-clock text-lg"></i>
              <span>
                <p className="font-bold  ">COOK TIME</p>
                <p>20 Minutes</p>
              </span>
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-utensils text-lg"></i>
              <p>Meat</p>
            </span>
          </div>

          <span className="flex flex-col items-center gap-[1rem] ">
            <i class="fa-solid fa-share bg-[#E7FAFE] p-[1rem] rounded-full  "></i>
            <button className="uppercase font-semibold">Share</button>
          </span>
        </div>
      </div>

      <div className="min-h-screen w-full">
        <div className="">
          <div className="flex justify-between">
            {/* image section */}
            <div className="relative w-[65%] h-[30rem]">
              <img
                src="/assets/recip/recip1.png"
                alt="Recipe dish"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/*play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                  <i class="fa-solid fa-play"></i>
                </button>
              </div>
            </div>

            {/* Nutrition Information Section */}
            <div className="w-[30%] bg-[#E7FAFE] rounded-2xl p-8 ">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nutrition Information
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Calories</span>
                  <span className="font-semibold text-gray-900">
                    219.9 kcal
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Fat</span>
                  <span className="font-semibold text-gray-900">10.7 g</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Protein</span>
                  <span className="font-semibold text-gray-900">7.9 g</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Carbohydrate</span>
                  <span className="font-semibold text-gray-900">22.3 g</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Cholesterol</span>
                  <span className="font-semibold text-gray-900">374 mg</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-100 ">
                <p className="text-xs text-center font-semibold  text-gray-600 leading-relaxed">
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          {/*loremIpsum text */}
          <div className="mt-8 max-w-6xl">
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
