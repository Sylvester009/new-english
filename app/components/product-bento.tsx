import Image from 'next/image';
import Link from 'next/link';

export default function ProductBento() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-24 bg-[#fffaf3]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full md:h-150">
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-high">
            <Image
              alt="An assortment of freshly baked pastries and croissants in a high-end bakery display case with soft ambient lighting"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUEzdg3qkDvY9qtJ63JNwxH4vsdKVROl4L40HcSTJPEgBDXtbYgmpVy57LMeB438bEzxe2kYq3W5jXs9fhcZh8nD3eM7yF-9Q_1ojSMGvx48HusvXmpFjrQZLNKffJvULg8YSkh2BqjNJq_pyKsiGbNINXvCsJSN0jSaBlyCDmJEfr5tRA1ajLcXEH5TdKm98pkPLzaDqaTyncVf-pdVPa_vwO4ru82yUU8-D8j3e1ihaFZWwY1I6xkmIOZrgHF8LQSdWeHD141Ko"
              fill
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1f1b12]/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <h3 className="headline-md text-white mb-2">
                Freshly Baked Daily
              </h3>
              <p className="text-white/80 body-md mb-4">
                Hot bread, meat pies, doughnuts, and pastries prepared fresh
                every morning.
              </p>
              <Link
                className="secondary-fixed label-bold flex items-center gap-2"
                href="/store"
              >
                Explore Bakery{' '}
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="east"
                >
                  east
                </span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <div className="group relative overflow-hidden rounded-xl bg-surface-container-high">
              <Image
                alt="Rich golden honey dripping from a wooden dipper into a crystal jar, backlit by warm morning sun"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                data-alt="Rich golden honey dripping from a wooden dipper into a crystal jar, backlit by warm morning sun"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqIhdNcrfL4i_YtYfTbgRtrT6skL-_Xl0qna0gzTDRk-XG-z3A_KvBcbLKQarY-GSs1urbHx6Mf12qfmv137lWbChy80wLMh6ciNALCQQeKpR9qM57IkNR8xL-xrfEM7LnXBIT6A7HNTa5vWFxZQSrQCavMTBshSxgYWkMHsRtBITQcByAxOPA4bNRPImYDM-SG8uiHkV1NRj5FMc2dAcqYx3u6Nxl8jmxB3a41_mWahHMUhef048p5eaFc5AV8EA0zSseJsRNhyE"
                fill
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <h3 className="title-sm text-white">Fresh Groceries</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-surface-container-high">
              <Image
                alt="Freshly pressed green olive oil in a clear glass bottle next to a bowl of ripe olives on a Mediterranean stone surface"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                data-alt="Freshly pressed green olive oil in a clear glass bottle next to a bowl of ripe olives on a Mediterranean stone surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeWlDanjua-t2tZuZ7VKLDwXGFn1l7UsNVO42MVfUcJlf86CHuXcaE3zB_2yko4m7CKw5g2MEaX615lxxC7lnU51Gjo3SKN1Tmmc7dn8QU0Vi9H5iCZ_EofsLSAte6yNJlA2nVZhlkQ5VaxkXjv2FCDZxXqYQbhvqjkveezvQNuPjRbV48incU7xT8pK_Zmb_pomwfr_486V3K-_RF60woesPwIKv4Fpg90CVuKutVnTp9tF9KevUkmhmU6aEdV5XVNtzRuf1jjEc"
                fill
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <h3 className="title-sm text-white">Household Essentials</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products Grid */}
      <section className="bg-surface-container-lowest py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="display-lg text-primary mb-2">
                Customer Favorites
              </h2>
              <p className="text-on-surface-variant max-w-lg">
                Carefully selected products loved by families for freshness,
                affordability, and quality.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="bg-tertiary/10 text-tertiary px-4 py-1 rounded-full text-xs label-bold">
                Organic Certified
              </span>
              <span className="bg-secondary-container/20 text-on-secondary-container px-4 py-1 rounded-full text-xs label-bold">
                Artisanal
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-4/5 rounded-xl overflow-hidden mb-4 bg-surface-container">
                <Image
                  alt="An assortment of freshly baked pastries and croissants in a high-end bakery display case with soft ambient lighting"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="Loaf of crusty sourdough bread wrapped in brown craft paper with a New English logo sticker"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAUqcBDhgvlzG9eeGQXYw6p2G4s6vfUO8yhBVTi5LT5L0FEFuBCc-jrbk86n9wSuHULweKcD9_knUNqgl6r5l2rL5OMbjg2bENkUTf6aGuy8ynJXNeYcEX9CmcY9zh0z7cTXgITESHezKWLKezOZtSLwawQwrVNSHzcQPRJKxzZvxATEcv4Qqkc8p4zvefHndDrH2cO-ISPnxBTlha5C-ce7D1QsXyTw3VKAEs2wOz3DcVMhF0zEaKlk2Hzho2oNwhAtJslbDf5Fk"
                  fill
                />
                <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="add_shopping_cart"
                  >
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="title-sm text-on-surface">Family Bread</h4>
                  <span className="label-bold text-primary">#2500</span>
                </div>
                <p className="text-sm text-[#8a7266] body-md italic">
                  Soft freshly baked bread made daily
                </p>
              </div>
            </div>
            {/* <!-- Product Card 2 --> */}
            <div className="group cursor-pointer">
              <div className="relative aspect-4/5 rounded-xl overflow-hidden mb-4 bg-surface-container">
                <Image
                  alt="A jar of dark wild forest honey with visible honeycomb inside, placed on an antique wooden shelf"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="A jar of dark wild forest honey with visible honeycomb inside, placed on an antique wooden shelf"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8J59Z6j8fOuHwmI0fp5pxz55yx3euUtQlmcVW8_pwebSMGkmYPSPgvQ-MEepd5gNu1g33ZVCOWdgi7sjtbzogxNsbkBe4sRPcL6i4X5N_taG78L3lKwPOIXB_nXxpsjTlieL9MnhTehmiSBDj4twowE_oGkzo-qxx6Gy00bZSAwndQXeuAjSih8jn6G_pdcNJR8qQ6KLkFpDOLgsTb9rt3bLmZVvi2gLS-Tmj0v5HnXKKvyj7HoV_Thro-6sGggrL2skFbA-TVVA"
                  fill
                />
                <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="add_shopping_cart"
                  >
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="title-sm text-on-surface">Chocolate Cake</h4>
                  <span className="label-bold text-primary">₦8,000</span>
                </div>
                <p className="text-sm text-[#8a7266] body-md italic">
                  Rich creamy cake for birthdays and celebrations
                </p>
              </div>
            </div>
            {/* <!-- Product Card 3 --> */}
            <div className="group cursor-pointer">
              <div className="relative aspect-4/5 rounded-xl overflow-hidden mb-4 bg-surface-container">
                <Image
                  alt="Hand-harvested sea salt flakes in a ceramic pinch bowl with dried rosemary sprigs"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="Hand-harvested sea salt flakes in a ceramic pinch bowl with dried rosemary sprigs"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATE_-fSn5APM1ERUHi8ZydG2jE_XJbc4LNHPz5rcRZEjvbAgYj8xVsbMJmmxi2h9kQNT2euw63i44U73lBA6614jcRFEAHxCHXrtpKoHnJV3iHSr6N0caxgsgQDYF6bxM2xPYhIwE_WP01iRh5gHF9Pz6TGcVf6J5au0Dop2m4520X1nuINeFBlG4dTRRFA2w74SdBa7FY8P59tSVa_3lFYl1o0DkaUj6E2xjT5qnc7188sLRpur-OcPxLwar7gDsiUtiJucyB6-Y"
                  fill
                />
                <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="add_shopping_cart"
                  >
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="title-sm text-on-surface">
                    Kitchen Essentials
                  </h4>
                  <span className="label-bold text-primary">₦12,000</span>
                </div>
                <p className="text-sm text-[#8a7266] body-md italic">
                  Rice, noodles, beverages, and household items
                </p>
              </div>
            </div>
            {/* <!-- Product Card 4 --> */}
            <div className="group cursor-pointer">
              <div className="relative aspect-4/5 rounded-xl overflow-hidden mb-4 bg-surface-container">
                <Image
                  alt="A classic clear glass bottle of dark balsamic vinegar with a cork stopper and a vintage label"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="A classic clear glass bottle of dark balsamic vinegar with a cork stopper and a vintage label"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL_ejNPDXCYpESmfDv3klw0zwfT_SlTHL7hv2yyaiVxXjKZAR4kF-Dxu-pcwEwWZXfERnT3UTmYf_M9cR8JQf0b3FsWP6Lf6dlRjG_AU-iRy0DNk1SWJfazpCbeJxDY_DrBxsjf_Y6V0bztiBP5fWWTO2jwMZ19MXKMNmcAZ139UMhbBPxg5iearVNGBW4f5Vb-SsAy-YoyTHhSM2U60u2ea0cBeuTrryAjhhV0krCF-0TOtr9lGKOpIvol8GRBNRTEiWbZ4ekpio"
                  fill
                />
                <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="add_shopping_cart"
                  >
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="title-sm text-on-surface">Aged Balsamic</h4>
                  <span className="label-bold text-primary">#24000</span>
                </div>
                <p className="text-sm text-[#8a7266] body-md italic">
                  12-year reserve, Modena IGP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
