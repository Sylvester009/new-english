import {Cake} from 'lucide-react';
import SignupForm from './SignupForm';

export default function Signup() {
  return (
    <main className="flex min-h-screen overflow-hidden">
      {/* <!-- Brand Visual Side (Asymmetric Layout Component) --> */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#f6edde] overflow-hidden">
        <div className="absolute inset-0 z-0 retail-texture"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-20"
          alt="Close-up of artisan wheat stalks and sourdough bread on a rustic wooden table with soft warm natural morning light"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX2t0kaF7ZJ9aCQ9Lo86gAXhm1TcTUhnrMEbgHys9RMJVgtzK8Lf4fIxsoPv1azDjC5MS8g-gLC5GMU0wODJVSYgQnxSdMJzPdpB0OiKQDKbhV6euvA7eK8nQ3gkpOLNEq9trmgWu8TSTH8_oZQ2irTfHXULoVXWxf6c3ClvArc6iaXV2z_4DQ4FWfXK_HJTK6eGvpprbZKifGfNNCeOALN-PAhIBe-61jLjpBQGPWBlOkr_1OfX2MHn4DnvqBv0ttO8Cq4Q86gZ8"
        />
        <div className="relative z-10 w-full flex flex-col justify-center px-10 space-y-unit">
          <div className="inline-flex items-center space-x-2 primary mb-12">
            <Cake className="w-8 h-8" />
            <span className="display-lg headline-md tracking-tighter italic">
              New English
            </span>
          </div>
          <h1 className="display-lg primary max-w-lg">
            Fresh Groceries, Bakery & Everyday Essentials in One Place.
          </h1>
          <p className="body-lg on-surface-variant max-w-lg mt-6">
            Create an account to order fresh bread, groceries, pastries,
            beverages, and household essentials from New English anytime.
          </p>
          <div className="mt-16 grid grid-cols-2 gap-6 max-w-sm">
            <div className="space-y-2">
              <span className="label-bold primary uppercase">Fresh Daily</span>
              <p className="text-xs on-surface-variant">
                Bread and pastries baked fresh every morning.
              </p>
            </div>
            <div className="space-y-2">
              <span className="label-bold primary uppercase">
                Fast Delivery
              </span>
              <p className="text-xs on-surface-variant">
                Quick and reliable delivery to your doorstep.
              </p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-xl max-w-xs mt-10">
            <h4 className="font-semibold text-[#974400] mb-3">
              Why Shop With Us?
            </h4>

            <ul className="space-y-2 text-sm text-[#564338]">
              <li>• Fresh bread every day</li>
              <li>• Fast doorstep delivery</li>
              <li>• Trusted supermarket quality</li>
              <li>• Affordable family prices</li>
            </ul>
          </div>
        </div>

        {/* <!-- Floating Decorative Element --> */}
        <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-[#f6edde]/20 blur-3xl"></div>
      </div>
      {/* <!-- htmlForm Side --> */}
      <SignupForm />
    </main>
  );
}
