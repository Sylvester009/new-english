import {ArrowBigRight} from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-204.75 flex items-center overflow-hidden">
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
            Est. 1924 • Artisanal Quality
          </span>
          <h1 className="display-lg on-background mb-6 leading-tight">
            The Art of the Everyday.
          </h1>
          <p className="body-lg on-surface-variant mb-8 leading-relaxed">
            Discover a curated collection of Europe&apos;s finest pantry
            staples, hand-crafted breads, and small-batch delicacies delivered
            from our hearth to your home.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#974400] text-white px-8 py-4 rounded-lg label-bold hover:bg-[#bb5808] transition-all shadow-lg shadow-[#974400]/20 flex items-center gap-2">
              Explore Collection
              <ArrowBigRight />
            </button>
            <button className="bg-white/80 backdrop-blur-sm border-2 border-[#974400] primary px-8 py-4 rounded-lg label-bold hover:bg-[#974400] hover:text-white transition-all">
              Visit Our Bakery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
