import Link from 'next/link';

export default function Login() {
  return (
    <>
      <main className="min-h-screen flex flex-col md:flex-row">
        {/* <!-- Left Visual Side: Brand Identity & Lifestyle Image --> */}
        <section className="relative hidden md:flex md:w-1/2 lg:w-3/5 items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Warm artisanal bakery background"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE63WqLTEQhRNumnYVV3MVuue8OD9E1LN8DK7JPuQ6nazCtYnFSBFhYyVXaUFE61J6sGaSZEHyzYVxmAFjgFoCz2iypCkbse9cfhJSSjQZF9-3THd6SB8OGGMfyXdBwJGJXIhVbAnHSi65oRi9kB25SsU-eaYjFQKLlTVoqYCT8Y_mI-ICkVpH3RjYthQY4TwrIr3VZzfme8ria_JddA8ddHW5XmTXq3arjoZ7eFAY02VwkKzD5oybpGt7NHN6QjSPE4RNc8NKBTs"
            />
            <div className="absolute inset-0 bg-[#974400]/20 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-linear-to-t from-[#974400]/60 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 p-10 surface-container-lowest max-w-xl">
            <h1 className="display-lg mb-4 italic">New English</h1>
            <p className="body-lg opacity-90 leading-relaxed">
              A celebration of tradition, craftsmanship, and the finest organic
              ingredients sourced from local estates.
            </p>
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-12 bg-[#ffffff]/50"></div>
              <span className="label-bold tracking-widest uppercase">
                Since 1924
              </span>
            </div>
          </div>
        </section>
        {/* <!-- Right Side: Interaction/Login Form --> */}
        <section className="flex-1 flex flex-col justify-center items-center p-6 md:p-10 bg-[#fff8f1]">
          {/* <!-- Mobile Header (Only visible on small screens) --> */}
          <div className="md:hidden mb-12 text-center">
            <h1 className="display-lg primary italic">New English</h1>
          </div>
          <div className="w-full max-w-[440px]">
            <div className="mb-10">
              <h2 className="headline-md on-surface mb-2">Welcome back</h2>
              <p className="body-md on-surface-variant">
                Please enter your details to access your artisanal marketplace
                account.
              </p>
            </div>
            <form className="space-y-6">
              {/* <!-- Email Input --> */}
              <div className="space-y-2">
                <label
                  className="block label-bold on-surface-variant uppercase"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-4 bg-[#ffffff] border-2 border-[#ddc1b3] rounded-lg focus:ring-0 focus:border-[#fcc340] transition-colors body-md on-surface placeholder:text-[#8a7266]"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                    type="email"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#8a7266]">
                    mail
                  </span>
                </div>
              </div>
              {/* <!-- Password Input --> */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    className="block label-bold on-surface-variant uppercase"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <a
                    className="label-bold secondary hover:text-[#974400] transition-colors"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    className="w-full px-4 py-4 bg-[#ffffff] border-2 border-[#ddc1b3] rounded-lg focus:ring-0 focus:border-[#fcc340] transition-colors body-md on-surface"
                    id="password"
                    name="password"
                    required
                    type="password"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#8a7266]">
                    lock
                  </span>
                </div>
              </div>
              {/* <!-- Remember Me --> */}
              <div className="flex items-center gap-3">
                <input
                  className="w-5 h-5 rounded border-[#ddc1b3] primary focus:ring-[#bb5808] bg-[#ffffff]"
                  id="remember"
                  name="remember"
                  type="checkbox"
                />
                <label
                  className="body-md on-surface-variant cursor-pointer"
                  htmlFor="remember"
                >
                  Remember me for 30 days
                </label>
              </div>
              {/* <!-- CTA Buttons --> */}
              <div className="pt-4 space-y-4">
                <Link href="/store">
                  <button
                    className="w-full bg-[#974400] on-primary label-bold py-5 rounded-lg tinted-shadow hover:bg-[#bb5808] active:scale-[0.98] transition-all uppercase tracking-widest"
                    type="submit"
                  >
                    Sign In
                  </button>
                </Link>
                <button
                  className="w-full flex items-center justify-center gap-3 border-2 border-[#ddc1b3] on-surface label-bold py-4 rounded-lg hover:bg-[#f6edde] transition-all uppercase tracking-widest"
                  type="button"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Continue with Google
                </button>
              </div>
            </form>
            <div className="mt-10 text-center">
              <p className="body-md on-surface-variant">
                New to the estate?
                <Link
                  className="label-bold secondary hover:text-[#974400] transition-colors ml-1 uppercase tracking-wider"
                  href="/signup"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
          {/* <!-- Footer Links --> */}
          <footer className="mt-auto pt-12 flex gap-8 text-xs label-bold text-[#8a7266] uppercase tracking-widest">
            <a className="hover:text-[#1f1b12] transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-[#1f1b12] transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-[#1f1b12] transition-colors" href="#">
              Contact
            </a>
          </footer>
        </section>
      </main>
      {/* <!-- Decoration Element (Subtle Grain/Texture Overlay) --> */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
    </>
  );
}
