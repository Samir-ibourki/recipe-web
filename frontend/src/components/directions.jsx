export default function Directions({ instructions }) {
  if (!instructions) return null;

  // Render a single instruction step
  const renderStep = (step, index) => (
    <div key={index} className="flex gap-6 mb-10 last:mb-0">
       <div className="flex-shrink-0 pt-1">
          <label className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 cursor-pointer hover:border-black hover:bg-black hover:text-white transition-all">
             <input type="checkbox" className="peer hidden" />
             <span className="text-gray-900 font-semibold peer-checked:hidden">{step.step || index + 1}</span>
             <i className="fa-solid fa-check text-xs hidden peer-checked:block text-white"></i>
          </label>
       </div>
       <div className="flex-1">
          <p className="text-xl font-bold mb-3 text-gray-900 leading-snug">
             {step.title || `Step ${step.step || index + 1}`}
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
             {step.text || step}
          </p>
          {step.image && (
             <div className="mt-6 rounded-2xl overflow-hidden max-w-md">
                <img src={step.image} alt={`Step ${index + 1}`} className="w-full h-auto object-cover" />
             </div>
          )}
       </div>
    </div>
  );

  // Parse if string
  let parsedInstructions = instructions;
  if (typeof instructions === 'string') {
      try {
         parsedInstructions = JSON.parse(instructions);
      } catch (e) {
         // Fallback for plain string
         return (
            <div className="mt-12">
               <h2 className="text-3xl font-bold mb-8">Directions</h2>
               <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{instructions}</p>
            </div>
         );
      }
  }

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-8">Directions</h2>
      <div className="">
         {Array.isArray(parsedInstructions) ? parsedInstructions.map((step, idx) => renderStep(step, idx)) : <p>{parsedInstructions}</p>}
      </div>
    </div>
  );
}
