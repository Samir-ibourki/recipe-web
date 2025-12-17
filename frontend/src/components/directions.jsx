export default function Directions() {
  const directions = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius mod tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      hasImage: true,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius mod tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      hasImage: false,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius mod tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      hasImage: false,
    },
  ];

  return (
    <div className="max-w-[90vw] mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Directions</h2>

      <div className="space-y-12">
        {directions.map((direction) => (
          <div key={direction.id} className="flex gap-4">
            {/*number circle */}
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-sm"></span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {direction.id}. {direction.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {direction.description}
              </p>

              {direction.hasImage && (
                <>
                  <img
                    src="/assets/chefa.png"
                    alt="Cooking step"
                    className="w-full rounded-2xl mb-6"
                  />

                  <p className="text-gray-600 leading-relaxed">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius mod tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </>
              )}
              <hr style={{ color: "#eee" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
