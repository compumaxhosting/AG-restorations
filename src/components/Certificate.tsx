import { ShieldCheck, HardHat, BadgeCheck } from "lucide-react";

export default function Certificate() {
const items = [
  {
    title: "Reliable Roofing Services",
    desc: "Our roofing projects follow strict standards to deliver durable roof repair and roof replacement solutions for homes and businesses in Linden, New Jersey.",
    icon: <ShieldCheck size={40} aria-hidden="true" />,
  },
  {
    title: "Quality Roofing, Siding & Gutters",
    desc: "We install high-quality roofing systems, siding, and seamless gutters designed to protect properties from harsh New Jersey weather conditions.",
    icon: <BadgeCheck size={40} aria-hidden="true" />,
  },
  {
    title: "Experienced Local Professionals",
    desc: "Our skilled contractors bring years of experience in roofing, siding, and gutter installation for residential and commercial properties in Linden NJ.",
    icon: <HardHat size={40} aria-hidden="true" />,
  },
  {
    title: "Honest Pricing & Financing",
    desc: "AG Restorations provides clear estimates with no hidden costs and offers 100% financing options for roofing, siding, and gutter projects.",
    icon: <BadgeCheck size={40} aria-hidden="true" />,
  },
];
  return (
    <section
      className="w-full bg-[#0f172a] py-16"
      aria-labelledby="why-choose-ag-restorations"
      aria-label="Reasons to choose AG Restorations roofing contractor in Linden New Jersey"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Hidden SEO Heading */}
        <h2 id="why-choose-ag-restorations" className="sr-only">
          Why Choose AG Restorations Roofing Contractor in Linden New Jersey
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <article
              key={i}
              className="relative group aspect-square flex flex-col items-center justify-center text-center p-6 bg-[#111827] overflow-hidden transition duration-500 hover:bg-black"
              aria-label={item.title}
            >
              {/* orange background */}
              <div className="absolute top-0 left-0 w-full h-full sm:h-1/2 bg-[#e63a27] transition-all duration-500 sm:group-hover:h-full"></div>

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
                <button
                  className="mt-4 text-white text-sm font-semibold opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition"
                  aria-label={`Learn more about ${item.title}`}
                >
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
