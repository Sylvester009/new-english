import Headers from './components/header';
import Hero from './components/hero';
import ProductBento from './components/product-bento';

export default function Home() {
  return (
    <>
      <Headers />
      <main className="textured-bg min-h-screen">
        <Hero />
        <ProductBento />
        <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
            <img
              className="rounded-2xl shadow-2xl"
              data-alt="Warm interior of a boutique grocery store with wooden shelves stocked with artisanal products and soft glowing pendant lights"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAsAjgvjad9sEsGjeuu8yKvokuPWc6LRG46pSHY78ia9jwrnXbn05DdL_O8OmrnlmBkFy7EpbXLraaYpDMlBj1wIXMHXwOCOqjufkH6vPEKWaSFa4dH_RASpx3QmPNsU3hcmiyYKTtCb1gP11fGEjL-iFfUJEgZIyzsuP_c5v_x4ohqduR1qtahUgw1JHUK-HudsGfbyVI9qrfSVjxTt4VllJ9Xch-HSI2l-8ivJevwFreZSSq-yyEgLApEOZ0hdkwpXZXRCVJXgE"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-display-lg text-on-background">
              Provenance is our Passion
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="potted_plant"
                  >
                    potted_plant
                  </span>
                </div>
                <div>
                  <h4 className="font-title-sm mb-1">Estate Sourced</h4>
                  <p className="text-on-surface-variant">
                    We partner directly with family estates to ensure every
                    product has a transparent and ethical origin story.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="skillet"
                  >
                    skillet
                  </span>
                </div>
                <div>
                  <h4 className="font-title-sm mb-1">Traditional Methods</h4>
                  <p className="text-on-surface-variant">
                    No additives, no compromises. We believe the best flavor
                    comes from time-honored slow processing.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="eco"
                  >
                    eco
                  </span>
                </div>
                <div>
                  <h4 className="font-title-sm mb-1">Sustainable Path</h4>
                  <p className="text-on-surface-variant">
                    Plastic-free packaging and carbon-neutral delivery are at
                    the core of our daily operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Newsletter --> */}
        <section className="bg-[#D2691E] py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-headline-md text-white mb-4">
              Join the Epicurean Circle
            </h2>
            <p className="text-white/90 font-body-lg mb-8">
              Receive early access to seasonal harvests and exclusive recipes
              from our kitchen.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                className="grow rounded-lg border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:ring-secondary focus:border-secondary font-body-md py-4 px-6"
                placeholder="Your email address"
                type="email"
              />
              <button className="bg-white text-primary font-label-bold px-8 py-4 rounded-lg hover:bg-surface-container-lowest transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
