import { MapPin } from "lucide-react";

export default function AreasWeServe() {
  const areas = [
    "Elizabeth, NJ",
    "Plainfield, NJ",
    "Rahway, NJ",
    "Westfield, NJ",
    "Fanwood, NJ",
    "Garwood, NJ",
    "Kenilworth, NJ",
    "Mountainside, NJ",
    "New Providence, NJ",
    "Roselle, NJ",
    "Roselle Park, NJ",
  ];

  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-[#e63a27] mb-4">
            Areas We Serve
          </h2>

          <p className="text-gray-600 leading-relaxed">
            AG Restorations proudly provides professional roofing and remodeling
            services to homeowners and businesses across New Jersey. We deliver
            reliable workmanship and long-lasting results in every community we
            serve.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition"
            >
              {/* Icon box */}
              <div className="flex items-center justify-center w-12 h-12 bg-orange-50 rounded-lg">
                <MapPin className="text-orange-500" size={18} />
              </div>

              {/* City name */}
              <span className="text-orange-600 font-semibold">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
