import React from "react";

const TestimonialCarousel = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4 bg-black text-white">
      <div className="max-w-[1300px] w-full border-2 border-white">

        {/* Top Info Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b-2 border-white text-xs uppercase tracking-widest px-6 py-6 gap-4">
          <div><span className="font-bold">Name:</span> Anthony Hagmen</div>
          <div><span className="font-bold">Role:</span> Creative Technologist</div>
          <div><span className="font-bold">Company:</span> Yahoo!</div>
          <div><span className="font-bold">Project:</span> Keiros</div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 p-6 items-center">

          {/* Image */}
          <div className="md:w-[40%] w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/bb1a679cecc2e6f7fcff064bce2fde23aadfb4ba?width=1011"
              className="w-full h-full object-cover"
              alt="testimonial"
            />
          </div>

          {/* Text */}
          <div className="md:w-[60%] w-full relative">

            {/* Quote Icon */}
            <div className="opacity-10 text-7xl mb-6">
              ❝
            </div>

            <p className="text-lg md:text-xl leading-relaxed max-w-[650px]">
              From the initial meeting to the final delivery, Ethan has created a feeling of trust
              and delivered everything we asked of him. The quality of his work speaks for itself
              and he is able to execute at a pace. He is an excellent Webflow developer and we
              will be calling on his services again, very soon.
            </p>

          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t-2 border-white py-8 flex justify-between px-6">

          {/* Prev */}
          <button className="text-3xl hover:text-cyan-400 transition">
            ←
          </button>

          {/* Next */}
          <button className="text-3xl hover:text-cyan-400 transition">
            →
          </button>

        </div>

      </div>
    </section>
  );
};

export default TestimonialCarousel;