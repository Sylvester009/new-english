'use client';

import {Cake} from 'lucide-react';
import Link from 'next/link';
import {useActionState, useEffect, useState} from 'react';
import { signup } from '../actions/auth';
import { toast } from 'sonner';

export default function SignupForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [state, formAction, pending] = useActionState(signup, undefined);

  useEffect(() => {
    if (state?.message) {
      toast.error(state.message, {position: 'top-right'});
    }
  }, [state]);

  return (
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
        <form className="space-y-6" action={formAction}>
          <div className="space-y-2">
            <label
              className="label-bold label-bold on-surface-variant block uppercase"
              htmlFor="name"
            >
              Full Name
            </label>
            <div className="relative group">
              <input
                className="w-full bg-white border-2 border-[#8a7266]/30 rounded-lg px-4 py-3.5 focus:ring-0 focus:border-[#fcc340] transition-colors body-md on-surface placeholder:text-[#ddc1b3]/70"
                id="name"
                name="name"
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
            {state?.errors?.name && <p>{state.errors.name}</p>}
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
              {state?.errors?.email && <p>{state.errors.email}</p>}
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
            {state?.errors?.password && (
              <div>
                <p>Password must:</p>
                <ul>
                  {state.errors.password.map(error => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            className="w-full bg-[#974400] text-[#ffffff] py-4 rounded-lg label-bold uppercase tracking-widest shadow-[0_4px_12px_rgba(151,68,0,0.15)] hover:bg-[#974400]/90 hover:shadow-[0_6px_20px_rgba(151,68,0,0.25)] transition-all active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#974400]/20"
            type="submit"
            disabled={pending}
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
  );
}