
import {
  ShieldCheck,
  HardHat,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  Icon: LucideIcon;
};

const ITEMS: Feature[] = [
  {
    title: "Reliable Roofing Services",
    desc: "Our roofing projects follow strict standards to deliver durable roof repair and roof replacement solutions for homes and businesses in Linden, New Jersey.",
    Icon: ShieldCheck,
  },
  {
    title: "Quality Roofing, Siding & Gutters",
    desc: "We install high-quality roofing systems, siding, and seamless gutters designed to protect properties from harsh New Jersey weather conditions.",
    Icon: BadgeCheck,
  },
  {
    title: "Experienced Local Professionals",
    desc: "Our skilled contractors bring years of experience in roofing, siding, and gutter installation for residential and commercial properties in Linden, NJ.",
    Icon: HardHat,
  },
  {
    title: "Honest Pricing & Financing",
    desc: "AG Restorations provides clear estimates with no hidden costs and offers 100% financing options for roofing, siding, and gutter projects.",
    Icon: BadgeCheck,
  },
];

function FeatureCard({ title, desc, Icon }: Feature) {
  return (
    <article
      className="group flex flex-col items-start gap-4 border border-white/10
        bg-white/[0.03] p-7 shadow-lg shadow-black/20
        transition-[transform,border-color,background-color,box-shadow]
        duration-300 ease-out
        hover:-translate-y-1 hover:border-orange-500/40
        hover:bg-white/[0.06] hover:shadow-xl hover:shadow-orange-950/30"
    >
      <div
        className="flex size-12 shrink-0 items-center justify-center
          rounded-lg bg-orange-600/15 text-orange-500
          ring-1 ring-orange-500/20
          transition-colors duration-300
          group-hover:bg-orange-600 group-hover:text-white"
      >
        <Icon size={24} aria-hidden="true" />
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-white">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-slate-400">
        {desc}
      </p>

      <span
        aria-hidden="true"
        className="mt-auto h-0.5 w-8 rounded-full bg-orange-600
          transition-[width] duration-300 ease-out
          group-hover:w-16"
      />
    </article>
  );
}

export default function Certificate() {
  return (
    <section
      className="w-full bg-slate-900 py-20"
      aria-labelledby="why-choose-ag-restorations"
    >
      <div className="mx-auto max-w-6xl px-4">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
            Why Choose Us
          </span>

          <h2
            id="why-choose-ag-restorations"
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            AG Restorations — Linden, NJ
          </h2>

          <p className="mt-3 text-base text-slate-400">
            Roofing, siding, and gutter work built on standards you can see
            and pricing you can trust.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
