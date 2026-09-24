import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();

  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isPlatform = location.pathname === "/platform";
  const isSolutions = location.pathname === "/";

  const isResourcesActive =
    location.pathname === "/resources" ||
    location.pathname.startsWith("/resources/");

  const isChangelogActive = location.pathname === "/changelog";
  const isPricingActive = location.pathname === "/pricing";

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setResourcesOpen(false);
  };

  return (
    <nav className="relative w-full h-[72px] bg-[#f8fafb] border-b border-[#d9e0e5] flex items-center px-[50px] max-md:px-[20px]">

      {/* ================= LOGO ================= */}
      <div className="flex items-center w-[138px] shrink-0">

        <svg
          width="28"
          height="30"
          viewBox="0 0 28 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 1L2 17.5H12L9.5 29L26 11.5H16L19.5 1H16.5Z"
            fill="#1A56DB"
          />

          <path
            d="M2 17.5L12 10L10.2 17.5H2Z"
            fill="#18A878"
          />
        </svg>

        <span
          className="text-[32px] font-bold text-[#111111] leading-none ml-[-2px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          ynkra
        </span>

      </div>


      {/* ================= DESKTOP NAVIGATION ================= */}
      <div className="flex items-center gap-[32px] whitespace-nowrap max-md:hidden">

        {/* SOLUTIONS */}
        <Link
          to="/"
          className={`relative h-[72px] flex items-center text-[13px] font-medium ${
            isSolutions ? "text-[#1A56DB]" : "text-[#777777]"
          }`}
        >
          SOLUTIONS

          {isSolutions && (
            <span className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[27px] h-[2px] bg-black" />
          )}
        </Link>


        {/* PLATFORM */}
        <Link
          to="/platform"
          className={`relative h-[72px] flex items-center text-[13px] font-medium ${
            isPlatform ? "text-[#1A56DB]" : "text-[#777777]"
          }`}
        >
          PLATFORM

          {isPlatform && (
            <span className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[27px] h-[2px] bg-black" />
          )}
        </Link>


        {/* RESOURCES */}
        <div className="relative">

          <button
            type="button"
            onClick={() => setResourcesOpen(!resourcesOpen)}
            className={`relative h-[72px] flex items-center gap-[8px] text-[13px] font-medium ${
              isResourcesActive ? "text-[#3155ff]" : "text-[#777777]"
            }`}
          >
            RESOURCES

            <span
              className={`text-[12px] transition-transform duration-300 ${
                resourcesOpen ? "rotate-180" : ""
              }`}
            >
              ⌄
            </span>

            <span
              className={`absolute bottom-[10px] left-1/2 -translate-x-1/2 h-[2px] bg-black transition-all duration-300 ease-out ${
                resourcesOpen || isResourcesActive
                  ? "w-[27px] opacity-100"
                  : "w-0 opacity-0"
              }`}
            />
          </button>


          {/* RESOURCES DROPDOWN */}
          {resourcesOpen && (
            <div
              className="
                absolute
                top-[65px]
                left-1/2
                -translate-x-1/2
                z-[100]
                w-[280px]
                rounded-[12px]
                border
                border-[#E5E5E5]
                bg-white
                p-[8px]
                shadow-[0_15px_40px_rgba(0,0,0,0.12)]
              "
            >

              <Link
                to="/resources"
                onClick={() => setResourcesOpen(false)}
                className="block rounded-[9px] px-[14px] py-[13px] hover:bg-[#F5F7FF]"
              >
                <div className="text-[14px] font-semibold text-[#222222]">
                  Resources
                </div>

                <div className="mt-[4px] text-[12px] text-[#888888]">
                  Guides, insights and useful resources
                </div>
              </Link>


              <Link
                to="/resources/blog"
                onClick={() => setResourcesOpen(false)}
                className="block rounded-[9px] px-[14px] py-[13px] hover:bg-[#F5F7FF]"
              >
                <div className="text-[14px] font-semibold text-[#222222]">
                  Blog
                </div>

                <div className="mt-[4px] text-[12px] text-[#888888]">
                  Latest ideas, stories and updates
                </div>
              </Link>


              <Link
                to="/resources/blog/article"
                onClick={() => setResourcesOpen(false)}
                className="block rounded-[9px] px-[14px] py-[13px] hover:bg-[#F5F7FF]"
              >
                <div className="text-[14px] font-semibold text-[#222222]">
                  Articles
                </div>

                <div className="mt-[4px] text-[12px] text-[#888888]">
                  Deep dives and architectural thinking
                </div>
              </Link>

            </div>
          )}

        </div>


        {/* CHANGELOG */}
        <Link
          to="/changelog"
          className={`relative h-[72px] flex items-center text-[13px] font-medium ${
            isChangelogActive ? "text-[#1A56DB]" : "text-[#777777]"
          }`}
        >
          CHANGELOG

          {isChangelogActive && (
            <span className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[27px] h-[2px] bg-black" />
          )}
        </Link>


        {/* PRICING */}
        <Link
          to="/pricing"
          className={`relative h-[72px] flex items-center text-[13px] font-medium ${
            isPricingActive ? "text-[#1A56DB]" : "text-[#777777]"
          }`}
        >
          PRICING

          {isPricingActive && (
            <span className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[27px] h-[2px] bg-black" />
          )}
        </Link>

      </div>


      {/* ================= DESKTOP RIGHT SIDE ================= */}
      <div className="ml-auto mr-[100px] flex items-center gap-[22px] shrink-0 max-md:hidden">

        <a
          href="#"
          className="text-[12px] font-medium text-[#008f82] whitespace-nowrap"
        >
          Sign In
        </a>

        <button
          className="
            w-[114px]
            h-[40px]
            rounded-[7px]
            bg-[#1A56DB]
            text-white
            text-[12px]
            font-medium
            whitespace-nowrap
          "
        >
          Sign Up
        </button>

      </div>


      {/* ================= MOBILE MENU BUTTON ================= */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="
          hidden
          max-md:flex
          ml-auto
          w-[42px]
          h-[42px]
          items-center
          justify-center
          rounded-[8px]
          border
          border-[#d9e0e5]
          bg-white
          text-[#111111]
          text-[24px]
        "
        aria-label="Open menu"
      >
        {mobileMenuOpen ? "×" : "☰"}
      </button>


      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <div
          className="
            absolute
            top-[72px]
            left-0
            w-full
            z-[200]
            bg-white
            border-b
            border-[#d9e0e5]
            shadow-[0_15px_30px_rgba(0,0,0,0.10)]
            hidden
            max-md:block
          "
        >

          <div className="flex flex-col p-[20px] gap-[4px]">

            {/* SOLUTIONS */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`px-[14px] py-[14px] rounded-[8px] text-[14px] font-medium ${
                isSolutions
                  ? "bg-[#F5F7FF] text-[#1A56DB]"
                  : "text-[#555555]"
              }`}
            >
              SOLUTIONS
            </Link>


            {/* PLATFORM */}
            <Link
              to="/platform"
              onClick={closeMobileMenu}
              className={`px-[14px] py-[14px] rounded-[8px] text-[14px] font-medium ${
                isPlatform
                  ? "bg-[#F5F7FF] text-[#1A56DB]"
                  : "text-[#555555]"
              }`}
            >
              PLATFORM
            </Link>


            {/* RESOURCES */}
            <button
              type="button"
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="w-full flex items-center justify-between px-[14px] py-[14px] rounded-[8px] text-[14px] font-medium text-[#555555]"
            >
              <span>RESOURCES</span>

              <span
                className={`transition-transform duration-300 ${
                  resourcesOpen ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>


            {/* MOBILE RESOURCES */}
            {resourcesOpen && (
              <div className="ml-[14px] border-l-2 border-[#1A56DB] pl-[10px]">

                <Link
                  to="/resources"
                  onClick={closeMobileMenu}
                  className="block px-[12px] py-[10px] text-[13px] text-[#555555]"
                >
                  Resources
                </Link>

                <Link
                  to="/resources/blog"
                  onClick={closeMobileMenu}
                  className="block px-[12px] py-[10px] text-[13px] text-[#555555]"
                >
                  Blog
                </Link>

                <Link
                  to="/resources/blog/article"
                  onClick={closeMobileMenu}
                  className="block px-[12px] py-[10px] text-[13px] text-[#555555]"
                >
                  Articles
                </Link>

              </div>
            )}


            {/* CHANGELOG */}
            <Link
              to="/changelog"
              onClick={closeMobileMenu}
              className={`px-[14px] py-[14px] rounded-[8px] text-[14px] font-medium ${
                isChangelogActive
                  ? "bg-[#F5F7FF] text-[#1A56DB]"
                  : "text-[#555555]"
              }`}
            >
              CHANGELOG
            </Link>


            {/* PRICING */}
            <Link
              to="/pricing"
              onClick={closeMobileMenu}
              className={`px-[14px] py-[14px] rounded-[8px] text-[14px] font-medium ${
                isPricingActive
                  ? "bg-[#F5F7FF] text-[#1A56DB]"
                  : "text-[#555555]"
              }`}
            >
              PRICING
            </Link>


            {/* MOBILE BUTTONS */}
            <div className="mt-[12px] pt-[16px] border-t border-[#e5e5e5] flex flex-col gap-[10px]">

              <a
                href="#"
                className="w-full h-[44px] flex items-center justify-center rounded-[8px] text-[14px] font-medium text-[#008f82] border border-[#d9e0e5]"
              >
                Sign In
              </a>

              <button
                className="w-full h-[44px] rounded-[8px] bg-[#1A56DB] text-white text-[14px] font-medium"
              >
                Sign Up
              </button>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;