'use client';

import {Cake} from 'lucide-react';
import Link from 'next/link';
import {useState} from 'react';
import {users} from '@/data/user';
import {toast} from 'sonner';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error('Please fill in all required fields.', {
        position: 'top-right',
      });

      return;
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters.', {
        position: 'top-right',
      });

      return;
    }

    if (!acceptedTerms) {
      toast.error('You must agree to the Terms & Conditions.', {
        position: 'top-right',
      });

      return;
    }

    const existingUser = users.find(
      user => user.email.toLowerCase() === email.toLowerCase(),
    );

    if (existingUser) {
      toast.error('An account with this email already exists.', {
        position: 'top-right',
      });

      return;
    }

    const digit = Math.floor(Math.random() * 10000);

    const dashedName = name.trim().toLowerCase().replaceAll(' ', '-');

    const user = {
      id: `${dashedName}-${digit}`,
      name,
      email,
      password,
    };

    users.push(user);

    toast.success('Account Created, Redirecting to login', {
      position: 'top-right',
    });

    setTimeout(() => {
      router.push('/login');
    }, 4000);
  };

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
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-14 py-16 bg-[#fff8f1]">
        <div className="max-w-lg mx-auto w-full">
          {/* <!-- Mobile Header --> */}
          <div className="lg:hidden flex items-center space-x-2 primary mb-8">
            <Cake className="w-8 h-8" />
            <span className="display-lg title-sm tracking-tight font-black">
              New English
            </span>
          </div>
          <div className="space-y-2 mb-10">
            <h2 className="headline-md headline-md on-surface">
              Create Your Shopping Account
            </h2>
            <p className="body-md on-surface-variant">
              Already have an account?{' '}
              <Link
                className="primary font-semibold hover:underline"
                href="/login"
              >
                Sign in
              </Link>
            </p>
          </div>
          {/* <!-- Registration htmlForm --> */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                className="label-bold label-bold on-surface-variant block uppercase"
                htmlFor="full_name"
              >
                Full Name
              </label>
              <div className="relative group">
                <input
                  className="w-full bg-white border-2 border-[#8a7266]/30 rounded-lg px-4 py-3.5 focus:ring-0 focus:border-[#fcc340] transition-colors body-md on-surface placeholder:text-[#ddc1b3]/70"
                  id="full_name"
                  name="full_name"
                  placeholder="Samuel Adeyemi"
                  required
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <span
                  className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined outline-variant group-focus-within:text-[#fff8f1]"
                  data-icon="person"
                >
                  person
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="label-bold label-bold on-surface-variant block uppercase"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative group">
                <input
                  className="w-full bg-white border-2 border-[#8a7266]/30 rounded-lg px-4 py-3.5 focus:ring-0 focus:border-[#fcc340] transition-colors body-md on-surface placeholder:text-[#ddc1b3]/70"
                  id="email"
                  name="email"
                  placeholder="samuel@gmail.com"
                  required
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <span
                  className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined outline-variant group-focus-within:text-[#fff8f1]"
                  data-icon="mail"
                >
                  mail
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="label-bold label-bold on-surface-variant block uppercase"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative group">
                <input
                  className="w-full bg-white border-2 border-[#8a7266]/30 rounded-lg px-4 py-3.5 focus:ring-0 focus:border-[#fcc340] transition-colors body-md on-surface placeholder:text-[#ddc1b3]/70"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <span
                  className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined outline-variant group-focus-within:text-[#fff8f1]"
                  data-icon="lock"
                >
                  lock
                </span>
              </div>
              <p className="text-xs text-[#564338]/80 px-1">
                Use at least 8 characters for better security.
              </p>
            </div>
            <div className="flex items-start space-x-3 py-2">
              <input
                className="mt-1 w-5 h-5 rounded border-2 border-[#8a7266]/30 primary focus:ring-[#974400]/20"
                id="terms"
                required
                type="checkbox"
                checked={acceptedTerms}
                onChange={e => setAcceptedTerms(e.target.checked)}
              />
              <label
                className="text-sm on-surface-variant leading-snug"
                htmlFor="terms"
              >
                I agree to the{' '}
                <a className="primary hover:underline" href="#">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a className="primary hover:underline" href="#">
                  Privacy Policy
                </a>{' '}
                regarding my shopping experience and account information.
              </label>
            </div>

            <button
              className="w-full bg-[#974400] text-[#ffffff] py-4 rounded-lg label-bold uppercase tracking-widest shadow-[0_4px_12px_rgba(151,68,0,0.15)] hover:bg-[#974400]/90 hover:shadow-[0_6px_20px_rgba(151,68,0,0.25)] transition-all active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#974400]/20"
              type="submit"
            >
              Create Account
            </button>
          </form>
          <div className="mt-12 pt-8 border-t border-[#8a7266]/10 flex flex-col items-center space-y-6">
            <p className="text-sm label-bold outline-variant uppercase tracking-widest">
              Or Continue With
            </p>
            <div className="flex space-x-4 w-full">
              <button className="flex-1 flex items-center justify-center space-x-2 py-3 border-2 border-[#8a7266]/10 rounded-lg hover:bg-[#fcf2e3] transition-colors group">
                <img
                  alt="Google Logo"
                  className="w-5 h-5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYUHEBjJgW3amGF4F-2WHp5nXgIFVGJ2QAU7YwuXg0Zi6dbrNcKbRYFXrv_Gx5c36VEltWo5EV7A6SWJ2W4uPQ7R7lL76eTWMXR0zx2pQY4synmPNIpepTi5JflmpeTAoKVj3j982KM9lE3Lm-riKkeCs8ah-u8XUCXjl59xH0r4bcOkAA0MqFgjiDQA43bKgF04B1owCRDxz8vOTt8Li_WPdjFPL_Y9ygm6kf9KHekbemF7acV28S8xpbowjqkFTx1TuKCiv2WHo"
                />
                <span className="label-bold text-xs uppercase on-surface-variant group-hover:text-[#1f1b12]">
                  Google
                </span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 py-3 border-2 border-[#8a7266]/10 rounded-lg hover:bg-[#fcf2e3] transition-colors group">
                <span
                  className="material-symbols-outlined text-xl on-surface-variant group-hover:text-[#1f1b12]"
                  data-icon="apple"
                >
                  ios
                </span>
                <span className="label-bold text-xs uppercase on-surface-variant group-hover:text-[#1f1b12]">
                  Apple
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Footer Credits --> */}
        <footer className="mt-20 text-center text-xs outline-variant tracking-wide label-bold uppercase">
          © New English Superstore. All Rights Reserved.
        </footer>
      </div>
    </main>
  );
}
