import { ArrowRight } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="relative bg-black py-40 mt-40 overflow-hidden">

      {/* Gradient Background */}
      <div
        className="absolute left-0 top-0 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at left top, #1b8aa6 0%, #0b4d5f 40%, transparent 75%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative z-10 grid items-start gap-10 md:grid-cols-2 px-20">

        {/* Left */}
        <div className="space-y-12">
          <h1 className="text-5xl font-medium text-white sm:text-6xl">
            Contact us
          </h1>

          <p className="text-lg text-white/80">
            Stay connected
          </p>
        </div>

        {/* Right Form */}
        <form className="self-center pt-2">
          <label className="block text-sm text-white/90" htmlFor="firstName">
            First name
          </label>

          <input
            id="firstName"
            type="text"
            className="h-12 w-full border-b border-white/70 bg-transparent text-white outline-none"
          />

          <label className="mt-8 block text-sm text-white/90" htmlFor="email">
            Email
          </label>

          <div className="flex items-center border-b border-white/70">
            <input
              id="email"
              type="email"
              className="h-12 w-full bg-transparent text-white outline-none"
            />

            <button className="text-white/90 hover:text-white">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}