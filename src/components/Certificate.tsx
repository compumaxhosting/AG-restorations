import { ShieldCheck, HardHat, BadgeCheck } from "lucide-react";

export default function Certificate() {
  const items = [
    {
      title: "Safety & Reliability",
      desc: "Our work follows strict safety standards ensuring long-lasting roofing systems.",
      icon: <ShieldCheck size={40} />,
    },
    {
      title: "High-Quality Materials",
      desc: "We use premium shingles, metal systems, sealants, and roofing materials designed to withstand harsh weather and deliver lasting protection.",
      icon: <BadgeCheck size={40} />,
    },
    {
      title: "Experienced Team",
      desc: "Our skilled professionals bring years of hands-on roofing experience to every project.",
      icon: <HardHat size={40} />,
    },
    {
      title: "Honest Pricing",
      desc: "Transparent pricing with no hidden costs — quality service at fair rates.",
      icon: <BadgeCheck size={40} />,
    },
  ];

  return (
    <section className="w-full bg-[#0f172a] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative group aspect-square flex flex-col items-center justify-center text-center p-6 bg-[#111827] overflow-hidden transition duration-500 hover:bg-black"
            >
              {/* orange background */}
              <div className="absolute top-0 left-0 w-full h-full sm:h-1/2 bg-orange-600 transition-all duration-500 sm:group-hover:h-full"></div>

              {/* content */}
              <div className="relative z-10 flex flex-col items-center">
                {/* icon */}
                <div className="text-white mb-4">{item.icon}</div>

                {/* title */}
                <h3 className="text-white text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* description */}
                <p className="text-gray-200 text-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-500">
                  {item.desc}
                </p>

                {/* button */}
                <button className="mt-4 text-white text-sm font-semibold opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition">
                  › LEARN MORE
                </button>
              </div>

              {/* triangle */}
              <div className="absolute bottom-0 left-0 w-full flex justify-center">
                <div
                  className="w-0 h-0 
                  border-l-70 border-r-70
                  border-b-50
                  border-l-transparent border-r-transparent
                  border-b-orange-700
                  sm:group-hover:border-b-black
                  transition-all duration-500"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
