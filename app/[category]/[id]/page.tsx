import Footer from '../../components/footer';
import Header from '../../components/header';
import {Product, products} from '../../data';

export default async function ProductDetails({
  params,
}: {
  params: Promise<{id: string; category: string}>;
}) {
  const {id, category} = await params;

  const product: Product | undefined = products.find(prod => prod.id === id);

  const relatedProducts = products
    .filter(
      prod => prod.category === product?.category && prod.id !== product?.id,
    )
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8F1]">
        <div className="text-center">
          <h1 className="display-lg primary mb-4">Product Not Found</h1>

          <p className="body-lg on-surface-variant">
            This item may have been removed from the collection.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-14 pb-20">
        {' '}
        {/* <!-- Breadcrumb --> */}
        <nav className="mb-[24px] flex items-center gap-2 label-md outline-color">
          <a className="hover:text-[#ffdbc9]" href="/store">
            Home
          </a>
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
          <a className="hover:text-[#ffdbc9]" href="/store">
            {product.category}
          </a>
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
          <span className="primary font-bold">{product.name}</span>
        </nav>
        {/* <!-- Product Hero Section --> */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 mb-[64px]">
          {/* <!-- Gallery --> */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-[8px]">
            <div className="col-span-10">
              <div className="aspect-4/5 rounded-xl overflow-hidden shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt={product.name}
                  src={product.image}
                />
              </div>
            </div>
          </div>
          {/* <!-- Product Details --> */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="bg-[#fcc340]/30 primary label-md px-3 py-1 rounded-full uppercase text-[10px] tracking-widest">
                {product.tag || product.category}
              </span>
              <div className="flex items-center gap-1 on-surface-variant">
                <span className="material-symbols-outlined text-sm material-symbols-filled">
                  star
                </span>
                <span className="label-md">4.9 (120 reviews)</span>
              </div>
            </div>
            <h1 className="display-xl primary leading-[1.1] title-sm">
              {product.name}
            </h1>
            <div className="flex items-baseline gap-4 pt-1">
              <span className="headline-md primary">
                #{product.price.toFixed(2)}
              </span>
              <span className="on-surface-variant line-through body-md">
                #{product.price.toFixed(2)}
              </span>
            </div>
            <p className="body-lg on-surface-variant mt-2">
              {product.description}
            </p>
            <div className="border-t border-outline-variant/40 pt-2"></div>

            {/* <!-- Quantity & Add to Bag --> */}
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#ddc1b3] rounded-lg p-1 bg-[#ffffff] shadow-sm">
                  <button className="w-10 h-10 flex items-center justify-center hover:bg-[#ebe1d3] rounded-md">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="w-12 text-center font-bold">1</span>
                  <button className="w-10 h-10 flex items-center justify-center hover:bg-[#ebe1d3] rounded-md">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <button className="flex-1 bg-[#4A3F35] text-[#FDF8F5] py-3.5 rounded-lg font-button tracking-wide shadow-md hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    shopping_bag
                  </span>
                  Add to Bag
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm error mt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ba1a1a] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg[#ba1a1a]"></span>
                </span>
                <span>Only 12 left for today’s delivery</span>
              </div>
            </div>
            {/* <!-- Value Props --> */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-outline-variant/50">
              {' '}
              <div className="flex flex-col items-center text-center gap-1">
                <span className="material-symbols-outlined primary-container">
                  oven_gen
                </span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">
                  Stone Baked
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <span className="material-symbols-outlined primary-container">
                  timer
                </span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">
                  36h Ferment
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <span className="material-symbols-outlined primary-container">
                  eco
                </span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">
                  100% Organic
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Perfect Pairings --> */}
        <section className="mt-[64px]">
          <div className="flex items-baseline justify-between mt-20 mb-10">
            <h2 className="font-headline-md primary">
              Other {category} Products
            </h2>
            <a
              className="label-md primary underline underline-offset-4"
              href="#"
            >
              Explore More
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {relatedProducts.map(item => (
              <div
                key={item.id}
                className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 shadow-sm group"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-surface-container">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <h4 className="headline-md text-sm mb-1">{item.name}</h4>

                <p className="label-md on-surface-variant mb-4">
                  ${item.price.toFixed(2)}
                </p>

                <button className="w-full py-2 bg-secondary-container primary font-button rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-on-primary-container hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-sm">add</span>
                  Quick Add
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* <!-- Customer Reviews --> */}
        <section className="mt-[64px] bg-surface-container-low rounded-3xl p-[32px] border border-outline-variant">
          <div className="flex flex-col md:flex-row gap-[64px]">
            <div className="md:w-1/3">
              <h2 className="display-lg primary">Commy Voice</h2>
              <div className="flex items-center gap-4 mt-4">
                <span className="text-5xl font-serif font-bold">4.9</span>
                <div>
                  <div className="flex primary">
                    <span className="material-symbols-outlined material-symbols-filled">
                      star
                    </span>
                    <span className="material-symbols-outlined material-symbols-filled">
                      star
                    </span>
                    <span className="material-symbols-outlined material-symbols-filled">
                      star
                    </span>
                    <span className="material-symbols-outlined material-symbols-filled">
                      star
                    </span>
                    <span className="material-symbols-outlined material-symbols-filled">
                      star
                    </span>
                  </div>
                  <p className="label-md on-surface-variant">
                    Based on 120 reviews
                  </p>
                </div>
              </div>
              <button className="mt-[32px] w-full border border-primary primary py-3 rounded-lg font-button hover:bg-primary hover:text-on-primary transition-all">
                Write a Review
              </button>
            </div>
            <div className="md:w-2/3 space-y-[24px]">
              {/* <!-- Review 1 --> */}
              <div className="border-b border-outline-variant pb-[24px]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold primary">Eleanor M.</h4>
                    <div className="flex primary-container scale-75 origin-left">
                      <span className="material-symbols-outlined material-symbols-filled">
                        star
                      </span>
                      <span className="material-symbols-outlined material-symbols-filled">
                        star
                      </span>
                      <span className="material-symbols-outlined material-symbols-filled">
                        star
                      </span>
                      <span className="material-symbols-outlined material-symbols-filled">
                        star
                      </span>
                      <span className="material-symbols-outlined material-symbols-filled">
                        star
                      </span>
                    </div>
                  </div>
                  <span className="label-md on-surface-variant">
                    2 days ago
                  </span>
                </div>
                <p className="body-md on-surface-variant italic">
                  "The crust on this sourdough is unlike anything I've found
                  outside of London. Perfectly charred and the interior stays
                  moist for days. My new weekly essential."
                </p>
              </div>
              {/* <!-- Review 2 --> */}
              <div className="border-b border-outline-variant pb-[24px]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold primary">Thomas H.</h4>
                    <div className="flex primary-container scale-75 origin-left">
                      <span className="material-symbols-outlined material-symbols-filled">
                        star
                      </span>
                      <span className="material-symbols-outlined material-symbols-filled">
                        star
                      </span>
                      <span className="material-symbols-outlined material-symbols-filled">
                        star
                      </span>
                      <span className="material-symbols-outlined material-symbols-filled">
                        star
                      </span>
                      <span className="material-symbols-outlined">star</span>
                    </div>
                  </div>
                  <span className="label-md on-surface-variant">
                    1 week ago
                  </span>
                </div>
                <p className="body-md on-surface-variant italic">
                  "Outstanding tang and beautiful crumb. It pairs perfectly with
                  just about anything. I only wish it didn't sell out so quickly
                  in the mornings!"
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <!-- Footer --> */}
      <Footer />
      {/* <!-- BottomNavBar (Mobile only) --> */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-safe pt-2 bg-[#FDF8F5]/95 dark:bg-stone-950/95 backdrop-blur-md border-t border-stone-200 dark:border-stone-800 z-50 shadow-[0_-4px_20px_rgba(74,63,53,0.04)] rounded-t-2xl">
        <a
          className="flex flex-col items-center justify-center text-[#4A3F35] dark:text-stone-50 bg-[#F2D7D9]/30 rounded-xl px-4 py-1"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="storefront">
            storefront
          </span>
          <span className="font-sans text-[10px] font-medium uppercase tracking-tighter">
            Shop
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="search">
            search
          </span>
          <span className="font-sans text-[10px] font-medium uppercase tracking-tighter">
            Search
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="shopping_bag">
            shopping_bag
          </span>
          <span className="font-sans text-[10px] font-medium uppercase tracking-tighter">
            Cart
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="person">
            person
          </span>
          <span className="font-sans text-[10px] font-medium uppercase tracking-tighter">
            Account
          </span>
        </a>
      </nav>
    </>
  );
}
