export default function Review({
  steps,
  setSteps,
}: {
  steps: number;
  setSteps: any;
}) {
  return (
    <div className="flex-1">
      <h1 className="font-display-lg text-display-lg text-on-surface mb-12">
        Review Your Order
      </h1>
      <section className="mb-12 bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 tinted-shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary"
              data-icon="local_shipping"
            >
              local_shipping
            </span>
            Delivery Details
          </h2>
          <a
            className="text-primary font-label-bold text-label-bold hover:underline"
            href="#"
          >
            Edit
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-on-surface-variant font-label-bold text-xs uppercase tracking-widest mb-2">
              Shipping Address
            </p>
            <p className="text-body-md font-body-md text-on-surface">
              Elizabeth Thorne
              <br />
              42 Cotswold Lane
              <br />
              Oxford, OX1 4BQ
              <br />
              United Kingdom
            </p>
          </div>
          <div>
            <p className="text-on-surface-variant font-label-bold text-xs uppercase tracking-widest mb-2">
              Method
            </p>
            <p className="text-body-md font-body-md text-on-surface flex flex-col">
              <span className="font-bold">Express Bakery</span>
              <span className="text-on-surface-variant">
                Arrives tomorrow before 10 AM
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-title-sm text-title-sm text-on-surface mb-6">
          Your Selection
        </h2>
        <div className="grid gap-4">
          {/* <!-- Item 1 --> */}
          <div className="flex items-center gap-6 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-colors group">
            <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-variant">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Close-up of a rustic heritage sourdough loaf with a perfectly dusted flour crust and deep score marks"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnKUK3A9vUsptogQ5ViVulw5MtMd9quIu94hG_f1KOkJ1WOsh3SciISI0W--MoWHHwWTJkuJe5tA_76p-O81H8A31Y497ynR6REZr864wihh3_PDe1JEFN7BixaVsWtZBzIDmahSfyQ4CLmAAxISMoPEOI0oooQzoeDANOpKRMfNptM-mcosej-wHD54Is6BVOdS5fKYl0NxF-EvsMDDdvicHdwrwDJ2qD7j6FEjMghglmL_f82vJZh5sEKMUJ2wLydDYqi2hrQNY"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-title-sm text-lg text-on-surface">
                Heritage Sourdough
              </h3>
              <p className="text-on-surface-variant text-sm">
                Wild yeast, 48-hour fermentation
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-on-surface font-medium">Qty: 2</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-title-sm text-on-surface">£14.00</p>
            </div>
          </div>
          {/* <!-- Item 2 --> */}
          <div className="flex items-center gap-6 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-colors group">
            <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-variant">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Hand-churned cultured butter on a wooden board with sea salt flakes and a sprig of fresh thyme"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzR6BW1uMlPHdneDw3skwSTMqdUCK0-kpgdCwAt5pNJ8yTtbD1mLsorrQXXH5xNQ8vRz7nYipgoEdS3IXW_PnQzv2q9g2tPuoDIM5vR-WoFX2akTtZouC6Lu_KDN02D4_ymsEJtGuN-7eSyzCfjzTzu48P7-TgCJjrmRQT2YFrabMvsJvzJeii7b501XLos4VMMsrbpXwb5NYg_UiyAY4aVmCDt1qLS-odbj28GmbC3nkSDYjV5kVXL7nSz7XL0kvrF0PmuEqjWzY"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-title-sm text-lg text-on-surface">
                Cultured Butter
              </h3>
              <p className="text-on-surface-variant text-sm">
                Sea salt, churned in Devon
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-on-surface font-medium">Qty: 1</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-title-sm text-on-surface">£6.50</p>
            </div>
          </div>
          {/* <!-- Item 3 --> */}
          <div className="flex items-center gap-6 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-colors group">
            <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-variant">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Basket of golden-brown almond croissants with flaky layers and toasted almond slivers on top"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8eC2By-W-4KgKbFhC-Ls7Q0gMoP5OZ4dDmF54j3b-HKop4M1ZcME5UjYx9I3mS2-SzWDGR5oN0kuOqmF962B-lwM_xjemFiBF9FuZwpy-sf5VEsSi_D0KkDrfnOUcauMlEJTFYYAibjWrIDVsDz53Ob4OMpvk9WL6Y8_H7MrEBNobVyitvWNzj-7BgScP41AE1qvl03Ah_jXHDl7B-Dale-kGT-jfe8IUWH8-SwSQ1W14QgDp9BvPYpybu8wZF2YacH6QN7ERh-8"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-title-sm text-lg text-on-surface">
                Almond Croissants
              </h3>
              <p className="text-on-surface-variant text-sm">
                Double-baked, marzipan core
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-on-surface font-medium">Qty: 4</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-title-sm text-on-surface">£18.00</p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row gap-4 pt-6">
        <button onClick={() => setSteps(steps + 1)} className="flex-1 px-8 py-4 bg-primary-container text-on-primary-container font-label-bold text-label-bold rounded-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          CONTINUE TO PAYMENT
          <span
            className="material-symbols-outlined text-sm"
            data-icon="arrow_forward"
          >
            arrow_forward
          </span>
        </button>
        <button onClick={() => setSteps(steps - 1)} className="px-8 py-4 border-2 border-primary text-primary font-label-bold text-label-bold rounded-lg hover:bg-primary/5 active:scale-[0.98] transition-all">
          BACK TO Delivery
        </button>
      </div>
    </div>
  );
}
