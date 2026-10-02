import { DecorativeFlower, SparkleStar } from "../components/DecorativeFlower";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#FAECE3] flex flex-col items-center justify-center px-6 text-[#2D283E] relative overflow-hidden">

      {/* Decorative corner elements */}
      <div className="absolute top-10 left-10 opacity-30">
        <DecorativeFlower className="w-16 h-16" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-30">
        <DecorativeFlower className="w-20 h-20" />
      </div>
      <div className="absolute top-1/3 right-12 opacity-20">
        <SparkleStar className="w-8 h-8 text-[#E47E64]" />
      </div>
      <div className="absolute bottom-1/3 left-12 opacity-20">
        <SparkleStar className="w-5 h-5 text-[#E47E64]" />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center text-center max-w-lg">

        {/* 404 headline */}
        <h1 className="font-serif uppercase tracking-tight leading-none text-[#2D283E] mb-2">
          <span className="block text-[120px] sm:text-[160px] font-normal leading-none text-[#E47E64]/20 select-none">
            404
          </span>
        </h1>

        <div className="flex items-center gap-3 mb-4 -mt-6">
          <SparkleStar className="w-4 h-4 text-[#E47E64]" />
          <span className="text-[11px] font-bold tracking-widest text-[#2D283E]/50 uppercase">
            Page Not Found
          </span>
          <SparkleStar className="w-4 h-4 text-[#E47E64]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D283E] mb-3 leading-snug">
          Oops, this page<br />
          <span className="italic text-[#E47E64]">doesn't exist.</span>
        </h2>

        <p className="font-script text-xl text-[#E47E64] mb-2">lost in the data?</p>

        <p className="text-xs text-[#2D283E]/60 font-medium leading-relaxed mb-10 max-w-sm">
          The page you're looking for may have been moved, deleted, or never existed. Let's get you back on track.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#2D283E] text-white text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-[#E47E64] transition-colors duration-300"
        >
          ← Back to Home
        </a>

      </div>
    </div>
  );
};
