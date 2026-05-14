// components/dashboard-header.tsx
export default function DashboardHeader() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mb-8 md:mb-10">
      <div>
        <p className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#974400] mb-2">
          MANAGEMENT
        </p>
        <h2 className="font-['Noto_Serif'] text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-[#1f1b12]">
          Inventory Overview
        </h2>
      </div>
      <div className="flex gap-3 w-full sm:w-auto">
        <div className="relative flex-1 sm:flex-none">
          <span
            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8a7266]"
            data-icon="search"
          >
            search
          </span>
          <input
            className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-white border-2 border-[#ddc1b3] rounded-xl focus:ring-4 focus:ring-[#fcc340]/20 focus:border-[#fcc340] transition-all outline-none font-['Plus_Jakarta_Sans'] text-base leading-[1.5] placeholder:text-[#8a7266]/50"
            placeholder="Search products..."
            type="text"
          />
        </div>
        <button className="bg-[#f1e7d8] text-[#1f1b12] px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 border border-[#ddc1b3]/20 hover:bg-[#ebe1d3] transition-colors whitespace-nowrap">
          <span
            className="material-symbols-outlined text-lg"
            data-icon="filter_list"
          >
            filter_list
          </span>
          Filter
        </button>
      </div>
    </header>
  );
}