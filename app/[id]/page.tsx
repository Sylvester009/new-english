import Footer from '../components/footer';
import Header from '../components/header';
import {Product, products} from '../data';

export default async function ProductDetails({
  params,
}: {
  params: Promise<{id: string}>;
}) {
  const {id} = await params;

  const product: Product | undefined = products.find(prod => prod.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-8 pt-[64px] pb-[64px]">
        {/* <!-- Breadcrumb --> */}
        <nav className="mb-[24px] flex items-center gap-2 label-md text-outline">
          <a className="hover:text-primary" href="#">
            Home
          </a>
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
          <a className="hover:text-primary" href="#">
            Bakery
          </a>
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
          <span className="primary font-bold">New English Sourdough</span>
        </nav>
        {/* <!-- Product Hero Section --> */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] mb-[64px]">
          {/* <!-- Gallery --> */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-[8px]">
            <div className="col-span-10">
              <div className="aspect-4/5 rounded-xl overflow-hidden shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Full view of a New English Artisanal Sourdough loaf on a white linen napkin with a soft morning light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwX6MBuhTogRmzANtGby78SaWzQBEaFjkSTFcoH3-xVxxkC-JXL5IuGVbb8Mf23XE5CcvjNka6Wbsmr8BCYG16GFIGtbnsNc6KcWlvIG_fMf2VqzZAa4LcAZ3BipaLS-sOPXOn77RcL6aScBDi_lM8GHQnQPNitHS1lDX_gGIe_YW4VEs54ABvqMOvXRdTDDPuctu2xjpo7hWATbHWb60yQdB9CfJIYr8VDwBjhFnBnDqU5RYhEn6nP71ToPG0I699-pNWJA1IwOc"
                />
              </div>
            </div>
          </div>
          {/* <!-- Product Details --> */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-secondary-container/30 primary label-md px-3 py-1 rounded-full uppercase text-[10px] tracking-widest">
                Freshly Baked
              </span>
              <div className="flex items-center gap-1 on-surface-variant">
                <span className="material-symbols-outlined text-sm material-symbols-filled">
                  star
                </span>
                <span className="label-md">4.9 (120 reviews)</span>
              </div>
            </div>
            <h1 className="display-xl primary leading-tight">
              "New English" Artisanal Sourdough
            </h1>
            <div className="flex items-baseline gap-4">
              <span className="headline-md primary">$12.50</span>
              <span className="on-surface-variant line-through body-md">
                $14.00
              </span>
            </div>
            <p className="body-lg on-surface-variant mt-2">
              Our signature loaf, wild-fermented for 36 hours. A crusty exterior
              meets a tender, tangy interior, crafted from locally milled
              organic stoneground wheat.
            </p>
            <div className="h-px bg-outline-variant w-full my-[8px]"></div>
           
            {/* <!-- Quantity & Add to Bag --> */}
            <div className="flex flex-col gap-[8px] mt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-outline-variant rounded-lg p-1 bg-surface-container-lowest shadow-sm">
                  <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-variant rounded-md">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="w-12 text-center font-bold">1</span>
                  <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-variant rounded-md">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <button className="flex-1 bg-[#4A3F35] text-[#FDF8F5] py-4 rounded-lg font-button shadow-md hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    shopping_bag
                  </span>
                  Add to Bag
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-error mt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
                </span>
                <span>Only 12 left for today’s delivery</span>
              </div>
            </div>
            {/* <!-- Value Props --> */}
            <div className="grid grid-cols-3 gap-[8px] mt-[32px] pt-[32px] border-t border-outline-variant">
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
          <div className="flex items-baseline justify-between mb-[32px]">
            <h2 className="font-headline-md primary">Perfect Pairings</h2>
            <a
              className="label-md primary underline underline-offset-4"
              href="#"
            >
              Explore More
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {/* <!-- Pairing Card 1 --> */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 shadow-sm group">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-surface-container">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="A block of golden salted artisan butter on a ceramic dish with salt crystals visible"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuArUfZODQQPFZ6Qq33-5mrnuGxRc-UQmX1yBgFbvV4AdjZwsmAS89iwsmYdo1jdSQEEbfT_ItqzAkLk4iaFryR6kkCY0hBNKGvJX_MJtnLcpa5oOoKDFFd69KAU980cpBOXj49_Vm1tHbNNSHw01iy8YA2jcr3O7YTcFnGzTLOtk_oDIMglQ8srzWcUbneuTw66Rey9Qdlojzrqz9u01lcVfL3LxWBDCZWBVHwT3OyOsN5_L6bcLimzyGFsntFmsHwn3Rfct5cOzcI"
                />
              </div>
              <h4 className="headline-md text-sm mb-1">
                Estate Salted Butter
              </h4>
              <p className="label-md on-surface-variant mb-4">
                $8.00
              </p>
              <button className="w-full py-2 bg-secondary-container primary font-button rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-on-primary-container hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">add</span>{' '}
                Quick Add
              </button>
            </div>
            {/* <!-- Pairing Card 2 --> */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 shadow-sm group">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-surface-container">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Golden raw honey dripping from a wooden dipper into a glass jar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGZhOg5WYUAqVBal6RXVKNG323J2gBvBo4vkwh8kUcj3GHor3-ImTpvqeGs4sNKNr9wDXoarGx0fVLC7jb3rLJL5mFGAfbUBULdMLf_g1fDj_6QUzCgUJXwYFpRQ0tEzfZo0Cxgf9dsW1HIuurM3dhJU9VEhUCmrJp1lyY2yQPhN7wqXHywLYlbVM-Ojalu7-AYUXQpd6Ks_BH_jEBcy_g2XUVdEtwOrGSJFXzVNj2paAfJLrREMXR2uzP8esPjgoRfabvuhkMy1Y"
                />
              </div>
              <h4 className="headline-md text-sm mb-1">
                Wildflower Raw Honey
              </h4>
              <p className="label-md on-surface-variant mb-4">
                $15.00
              </p>
              <button className="w-full py-2 bg-secondary-container primary font-button rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-on-primary-container hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">add</span>{' '}
                Quick Add
              </button>
            </div>
            {/* <!-- Pairing Card 3 --> */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 shadow-sm group">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-surface-container">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="A selection of aged cheddar cheese on a dark slate board"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGJnKWqb0IV_HGxVDxx_lvkPD5TmhBlUHACkNVEmfaZQaHUqTOssRTpmOmvmz-TxjNr9TmSFfGXxby_34LU217NYDX_zlMliXb0kjZsn2ChqkapyNJg0U2QBO4Sxb0k-OLAhwL5vJ71JOA6rTeOHVbJg13jfhH7t1tpXPozKRaBFb_E4eozt3FynvR2QRbEaKR8ohvEpk11JoowzwxaMAbiK9QWEvMDnW_J6RidWtUDTQm3YOcdqbZ5IPH1u5ldo0I1uVqsX9Qffk"
                />
              </div>
              <h4 className="headline-md text-sm mb-1">
                12-Month Aged Cheddar
              </h4>
              <p className="label-md on-surface-variant mb-4">
                $11.50
              </p>
              <button className="w-full py-2 bg-secondary-container primary font-button rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-on-primary-container hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">add</span>{' '}
                Quick Add
              </button>
            </div>
            {/* <!-- Pairing Card 4 --> */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 shadow-sm group">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-surface-container">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Gourmet black olive tapenade in a small bowl with fresh herbs"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmfeRxESKyclbeeaOQrC7bRMpazc9g-KQNpjTVQv56zDCnwN82axAx19FKljHGCYUpGLhAvbTdworgPvtX7cpteRk1Y2JDTdFLOz2hs6hnDArVmfCT0ynkMJc3oNKlZXLrjueIM2xqrDLN8kBrAZiELnGRIaeXDIApH_FOqyElAhV2kVy_7B3D_WxjoSOFm9JZofongQEcVgNHN9yoNXd1QJWqKfUWvtIgbVAAmlRaKi3qW_9ERMQsyRFzbNvrHC4UYQLsCv0wJLI"
                />
              </div>
              <h4 className="headline-md text-sm mb-1">
                Black Olive Tapenade
              </h4>
              <p className="label-md on-surface-variant mb-4">
                $9.00
              </p>
              <button className="w-full py-2 bg-secondary-container primary font-button rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-on-primary-container hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">add</span>{' '}
                Quick Add
              </button>
            </div>
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
