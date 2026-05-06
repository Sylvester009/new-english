export default function Footer() {
  return (
    <footer className="bg-[#FFFDF5] full-width border-t-2 border-[#D2691E]/20 mt-20">
      <div className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto font-serif text-sm">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-serif font-black text-[#D2691E] text-xl">
            New English
          </div>
          <p className="text-stone-500 text-center md:text-left max-w-xs">
            © 2024 New English Premium Grocers. Artisanal Quality Guaranteed.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="text-stone-500 hover:text-[#D2691E] transition-opacity"
            href="#"
          >
            Store Locator
          </a>
          <a
            className="text-stone-500 hover:text-[#D2691E] transition-opacity"
            href="#"
          >
            Wholesale
          </a>
          <a
            className="text-stone-500 hover:text-[#D2691E] transition-opacity"
            href="#"
          >
            Sustainability
          </a>
          <a
            className="text-stone-500 hover:text-[#D2691E] transition-opacity"
            href="#"
          >
            Contact Us
          </a>
        </div>
        <div className="flex gap-4">
          <a
            className="text-[#D2691E] hover:opacity-80 transition-opacity"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="facebook">
              social_leaderboard
            </span>
          </a>
          <a
            className="text-[#D2691E] hover:opacity-80 transition-opacity"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              data-icon="alternate_email"
            >
              alternate_email
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
