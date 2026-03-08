import { ArrowRight } from "lucide-react";
import React from "react";

const BackgroundWave = () => {
  return (
    <svg
      className="absolute left-[-156px] top-[-19px] w-[1462px] h-[500px] pointer-events-none opacity-90 
      [mask-image:linear-gradient(to_bottom,black_50%,transparent_85%)]"
      viewBox="0 0 1462 366"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0)">
        <path
          d="M463.332 352.5C157.32 432.18 10.0098 113 0 0H1212.44C708.415 156 705.284 289.5 463.332 352.5Z"
          fill="url(#paint0)"
        />
      </g>

      <g filter="url(#filter1)">
        <path
          d="M712.887 352.5C406.874 432.18 259.564 113 249.555 0H1462C957.969 156 954.839 289.5 712.887 352.5Z"
          fill="url(#paint1)"
        />
      </g>

      <defs>
        <filter id="filter0" x="-100" y="-100" width="1412.45" height="565.121">
          <feGaussianBlur stdDeviation="50" />
        </filter>

        <filter id="filter1" x="149.555" y="-100" width="1412.45" height="565.121">
          <feGaussianBlur stdDeviation="50" />
        </filter>

        <linearGradient id="paint0" x1="-5" y1="12" x2="1026" y2="202">
          <stop stopColor="#0D89AF" />
          <stop offset="1" stopColor="#053949" />
        </linearGradient>

        <linearGradient id="paint1" x1="244" y1="12" x2="1276" y2="202">
          <stop stopColor="#0D89AF" />
          <stop offset="1" stopColor="#053949" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default function ContactUs() {
  return (
    <section className="relative bg-black py-40 overflow-hidden">

      {/* Background Wave */}
      <BackgroundWave />

      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-20 px-20 items-start">

        {/* Left */}
        <div className="space-y-16">
          <h1 className="text-6xl lg:text-7xl font-medium text-white">
            Contact us
          </h1>

          <p className="text-xl text-white/80">
            Stay connected
          </p>
        </div>

        {/* Right Form */}
        <form className="pt-10 w-full max-w-xl">

          <label className="text-white/90 text-sm">
            First name
          </label>

          <input
            type="text"
            className="w-full border-b border-white/60 bg-transparent text-white h-14 outline-none"
          />

          <label className="text-white/90 text-sm mt-10 block">
            Email
          </label>

          <div className="flex items-center border-b border-white/60">
            <input
              type="email"
              className="w-full bg-transparent text-white h-14 outline-none"
            />

            <button
              type="submit"
              className="text-white/80 hover:text-white transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}