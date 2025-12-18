import categorys from "../data/category.json";

export default function Category() {
  const bgColors = [
    "bg-cyan-50",
    "bg-green-50",
    "bg-red-50",
    "bg-yellow-50",
    "bg-orange-50",
    "bg-pink-50",
  ];
  return (
    <section className="w-[95vw] mx-auto lg:mb-[5rem] py-8">
      <div className="flex justify-between items-center mb-[2rem]">
        <h1 className="text-[2.4rem] font-bold">Categories</h1>
        <button className="bg-[#E7FAFE] hover:bg-[#d0f5fb] transition-colors px-8 py-3 cursor-pointer rounded-full text-[1rem] font-semibold text-cyan-800">
          View All Categories
        </button>
      </div>
{/* flex  gap-6 lg:justify-between */}
      <div  className=" grid lg:grid-rows-1 lg:grid-cols-6 gap-6 lg:justify-between ">
        {categorys.map((item) => {
          return (
            <div
              key={item.id}
              className={`w-full max-w-[12rem] aspect-square flex flex-col items-center justify- cursor-pointer gap-4 ${
                bgColors[item.id % bgColors.length]
              } rounded-3xl shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="w-[70%] drop-shadow-2xl">
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="font-bold text-lg">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
