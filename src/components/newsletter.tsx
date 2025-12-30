"use client";

import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-[#28aeb1] w-full px-6">
      <div className="max-w-4xl mx-auto py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* LEFT */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
            <Mail className="w-14 h-14 text-[#19355d]" />

            <div className="sm:ml-6 mt-6 sm:mt-0">
              <h2 className="text-4xl font-extrabold text-white leading-none">
                Newsletter
              </h2>
              <p className="mt-2 text-sm text-[#19355d] max-w-sm">
                Subscribe now to get our latest blog posts.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <form className="flex flex-col sm:flex-row w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="
                px-6 py-4 w-full sm:w-72
                bg-[#31c3c5] text-[#19355d]
                placeholder-[#19355d]
                rounded sm:rounded-r-none
                border border-[#28aeb1]
                focus:outline-none focus:border-blue-400
              "
            />
            <button
              type="submit"
              className="
                mt-4 sm:mt-0
                px-8 py-4
                bg-[#19355d] text-white font-semibold
                rounded sm:rounded-l-none
                hover:bg-green-600
                transition
              "
            >
              Subscribe Now
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
