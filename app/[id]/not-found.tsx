import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff8f1]">
      <div className="text-center p-8">
        <span className="material-symbols-outlined text-6xl text-[#974400] mb-4">
          search_off
        </span>
        <h1 className="font-['Noto_Serif'] text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-[#974400] mb-4">
          Product Not Found
        </h1>
        <p className="font-['Plus_Jakarta_Sans'] text-lg leading-[1.6] text-[#564338]">
          This item may have been removed from the collection.
        </p>
        <Link
          href="/store"
          className="inline-block mt-6 px-6 py-3 bg-[#974400] text-white rounded-xl font-bold font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all"
        >
          Back to Store
        </Link>
      </div>
    </div>
  );
}