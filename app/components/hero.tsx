import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#fffaf3]">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Close-up of artisan sourdough bread with flour dusting on a rustic wooden table with warm golden sunlight filtering through a window"
          className="object-cover"
          data-alt="Close-up of artisan sourdough bread with flour dusting on a rustic wooden table with warm golden sunlight filtering through a window"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoNsVV90XHu8GT7oF8bpo6ZsQXNiZU7cVJRqW1ZQqX-_BimVVMWmdMWEkCyCJ2L8QsoPZpzpUfT2FbD9g46Ube-Fum2DovqcaG4LXNAPQUB6Q1djsRu4DVaU4nv74diK7W8fK5uLwDscjPwjimVZBwKyDQ0reqzOwEkmHDXyTglPiALRqtcJCKtKkIY70DbDPBX336kXOCDdLbVA8dqUMNnyr2rcYVAEnrqd9GtughSaglfzKnrIULTVRhl8XK6DRrgXN8Vu_FRAI"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#fff8f1] via-[#fff8f1]/40 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <span className="label-bold primary uppercase tracking-[0.2em] mb-4 block">
            Ibadan’s Trusted Bakery & Supermarket
          </span>
          <h1 className="display-lg on-background mb-6 leading-tight">
            Fresh Bread, Groceries & Everyday Essentials.
          </h1>
          <p className="body-lg on-surface-variant mb-8 leading-relaxed">
            From oven-fresh bread and pastries to premium groceries and home
            essentials, New English brings quality shopping closer to your
            family every day.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/store">
              <button className="bg-[#974400] text-white px-8 py-4 rounded-lg label-bold hover:bg-[#bb5808] transition-all shadow-lg shadow-[#974400]/20 flex items-center gap-2">
                Shop Groceries
                <span
                  className="material-symbols-outlined text-lg"
                  data-icon="east"
                >
                  east
                </span>
              </button>
            </Link>
            <Link href="/store">
              <button className="bg-white/80 backdrop-blur-sm border-2 border-[#974400]/50 px-8 py-4 rounded-lg label-bold hover:bg-[#974400] hover:text-white transition-all">
                Order Fresh Bread
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
