"use client";

import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/button";

export function FloatingCTA() {
  return (
    <>
      {/* Mobile floating bottom CTA */}
      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] -translate-x-1/2 sm:hidden bg-[#D2153D]">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between gap-3 rounded-2xl bg-primary-600 px-4 py-3 shadow-lg">
            <div>
              <p className="text-sm font-semibold text-white">
                Need a quote fast?
              </p>
              <p className="text-xs text-white/90">
                Tap to message us on WhatsApp
              </p>
            </div>
            <a
              href="https://wa.me/1234567890"
              className="rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-primary-600"
            >
              Message
            </a>
          </div>
        </div>
      </div>

      {/* Desktop sticky CTA */}
      <div className="hidden sm:fixed sm:bottom-12 sm:right-8 sm:block">
        <Button
          effect={"expandIcon"}
          iconPlacement="right"
          icon={FaArrowRight}
          className="text-white bg-none  bg-[#D2153D] rounded-xl hover:bg-[#00215B]"
        >
          Get a Quote
        </Button>
      </div>
    </>
  );
}
