import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();

  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState("");

  const isPlatform = location.pathname === "/platform";
  const isSolutions = location.pathname === "/";

  const isResourcesActive =
    location.pathname === "/resources" ||
    location.pathname.startsWith("/resources/");

  const isChangelogActive = location.pathname === "/changelog";
  const isPricingActive = location.pathname === "/pricing";

  /* =========================
     CLICK ANIMATION
  ========================= */

  const animateClick = (name) => {
    setClickedItem(name);

    setTimeout(() => {
      setClickedItem("");
    }, 450);
  };

  const handleResources = () => {
    animateClick("resources");
    setResourcesOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setResourcesOpen(false);
  };

  return (
    <nav className="relative w-full h-[72px] bg-[#f8fafb] border-b border-[#d9e0e5] flex items-center px-[50px] max-md:px-[20px]">

      {/* =========================
          ANIMATION CSS
      ========================= */}

      <style>
        {`
          @keyframes navClick {
            0% {
              transform: scale(1);
            }

            35% {
              transform: scale(0.92);
            }

            65% {
              transform: scale(1.04);
            }

            100% {
              transform: scale(1);
            }
          }

          @keyframes ripple {
            0% {
              width: 8px;
              height: 8px;
              opacity: .7;
            }

            100% {
              width: 65px;
              height: 65px;
              opacity: 0;
            }
          }

          @keyframes dropdownIn {
            0% {
              opacity: 0;
              transform: translate(-50%, -12px) scale(.94);
            }

            60% {
              opacity: 1;
              transform: translate(-50%, 2px) scale(1.02);
            }

            100% {
              opacity: 1;
              transform: translate(-50%, 0) scale(1);
            }
          }

          @keyframes itemIn {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes mobileIn {
            from {
              opacity: 0;
              transform: translateY(-12px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .nav-click-animation {
            animation: navClick .45s ease;
          }

          .nav-ripple {
            position: absolute;
            width: 8px;
            height: 8px;
            border: 2px solid #1A56DB;
            border-radius: 50%;
            pointer-events: none;
            animation: ripple .45s ease-out forwards;
            z-index: 300;
          }

          .nav-dropdown-animation {
            animation: dropdownIn .32s cubic-bezier(.22,1,.36,1);
            box-shadow:
              0 15px 40px rgba(0,0,0,.12),
              0 0 25px rgba(26,86,219,.10);
          }

          .nav-item-animation {
            opacity: 0;
            animation: itemIn .28s ease forwards;
          }

          .nav-mobile-animation {
            animation: mobileIn .28s ease forwards;
          }

          @media (prefers-reduced-motion: reduce) {
            .nav-click-animation,
            .nav-ripple,
            .nav-dropdown-animation,
            .nav-item-animation,
            .nav-mobile-animation {
              animation: none !important;
            }
          }
        `}
      </style>


      {/* =========================
          LOGO
      ========================= */}

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


      {/* =========================
          DESKTOP NAVIGATION
      ========================= */}

      <div className="flex items-center gap-[32px] whitespace-nowrap max-md:hidden">

        {/* SOLUTIONS */}

        <div className="relative">

          <Link
            to="/"
            onClick={() => animateClick("solutions")}
            className={`relative h-[72px] flex items-center text-[13px] font-medium transition-colors duration-300 ${
              isSolutions
                ? "text-[#1A56DB]"
                : "text-[#777777]"
            } ${
              clickedItem === "solutions"
                ? "nav-click-animation"
                : ""
            }`}
          >
            SOLUTIONS

            {isSolutions && (
              <span className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[27px] h-[2px] bg-black" />
            )}
          </Link>

          {clickedItem === "solutions" && (
            <span className="nav-ripple left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          )}

        </div>


        {/* PLATFORM */}

        <div className="relative">

          <Link
            to="/platform"
            onClick={() => animateClick("platform")}
            className={`relative h-[72px] flex items-center text-[13px] font-medium transition-colors duration-300 ${
              isPlatform
                ? "text-[#1A56DB]"
                : "text-[#777777]"
            } ${
              clickedItem === "platform"
                ? "nav-click-animation"
                : ""
            }`}
          >
            PLATFORM

            {isPlatform && (
              <span className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[27px] h-[2px] bg-black" />
            )}
          </Link>

          {clickedItem === "platform" && (
            <span className="nav-ripple left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          )}

        </div>


        {/* =========================
            RESOURCES
        ========================= */}

        <div className="relative">

          <button
            type="button"
            onClick={handleResources}
            className={`relative h-[72px] flex items-center gap-[8px] text-[13px] font-medium transition-colors duration-300 ${
              isResourcesActive
                ? "text-[#3155ff]"
                : "text-[#777777]"
            } ${
              clickedItem === "resources"
                ? "nav-click-animation"
                : ""
            }`}
          >

            RESOURCES

            <span
              className={`inline-block text-[12px] transition-all duration-300 ${
                resourcesOpen
                  ? "rotate-180 text-[#1A56DB]"
                  : "rotate-0"
              }`}
            >
              ⌄
            </span>

            <span
              className={`absolute bottom-[10px] left-1/2 -translate-x-1/2 h-[2px] bg-black transition-all duration-300 ${
                resourcesOpen || isResourcesActive
                  ? "w-[27px] opacity-100"
                  : "w-0 opacity-0"
              }`}
            />

          </button>

          {clickedItem === "resources" && (
            <span className="nav-ripple left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          )}


          {/* DROPDOWN */}

          {resourcesOpen && (
            <div
              className="
                nav-dropdown-animation
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
              "
            >

              <Link
                to="/resources"
                onClick={() => {
                  animateClick("resource-page");
                  setResourcesOpen(false);
                }}
                className="nav-item-animation block rounded-[9px] px-[14px] py-[13px] hover:bg-[#F5F7FF] hover:translate-x-[3px] transition-all duration-200"
                style={{ animationDelay: "0ms" }}
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
                onClick={() => {
                  animateClick("blog");
                  setResourcesOpen(false);
                }}
                className="nav-item-animation block rounded-[9px] px-[14px] py-[13px] hover:bg-[#F5F7FF] hover:translate-x-[3px] transition-all duration-200"
                style={{ animationDelay: "70ms" }}
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
                onClick={() => {
                  animateClick("articles");
                  setResourcesOpen(false);
                }}
                className="nav-item-animation block rounded-[9px] px-[14px] py-[13px] hover:bg-[#F5F7FF] hover:translate-x-[3px] transition-all duration-200"
                style={{ animationDelay: "140ms" }}
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

        <div className="relative">

          <Link
            to="/changelog"
            onClick={() => animateClick("changelog")}
            className={`relative h-[72px] flex items-center text-[13px] font-medium transition-colors duration-300 ${
              isChangelogActive
                ? "text-[#1A56DB]"
                : "text-[#777777]"
            } ${
              clickedItem === "changelog"
                ? "nav-click-animation"
                : ""
            }`}
          >
            CHANGELOG

            {isChangelogActive && (
              <span className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[27px] h-[2px] bg-black" />
            )}
          </Link>

          {clickedItem === "changelog" && (
            <span className="nav-ripple left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          )}

        </div>


        {/* PRICING */}

        <div className="relative">

          <Link
            to="/pricing"
            onClick={() => animateClick("pricing")}
            className={`relative h-[72px] flex items-center text-[13px] font-medium transition-colors duration-300 ${
              isPricingActive
                ? "text-[#1A56DB]"
                : "text-[#777777]"
            } ${
              clickedItem === "pricing"
                ? "nav-click-animation"
                : ""
            }`}
          >
            PRICING

            {isPricingActive && (
              <span className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[27px] h-[2px] bg-black" />
            )}
          </Link>

          {clickedItem === "pricing" && (
            <span className="nav-ripple left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          )}

        </div>

      </div>


      {/* =========================
          RIGHT SIDE
      ========================= */}

      <div className="ml-auto mr-[100px] flex items-center gap-[22px] shrink-0 max-md:hidden">

        {/* SIGN IN */}

        <div className="relative">

          <a
            href="#"
            onClick={() => animateClick("signin")}
            className={`text-[12px] font-medium text-[#008f82] whitespace-nowrap transition-colors duration-300 ${
              clickedItem === "signin"
                ? "nav-click-animation"
                : ""
            }`}
          >
            Sign In
          </a>

          {clickedItem === "signin" && (
            <span className="nav-ripple left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          )}

        </div>


        {/* SIGN UP */}

        <div className="relative">

          <button
            type="button"
            onClick={() => animateClick("signup")}
            className={`w-[114px] h-[40px] rounded-[7px] bg-[#1A56DB] text-white text-[12px] font-medium whitespace-nowrap transition-all duration-200 hover:shadow-[0_8px_22px_rgba(26,86,219,0.30)] ${
              clickedItem === "signup"
                ? "nav-click-animation"
                : ""
            }`}
          >
            Sign Up
          </button>

          {clickedItem === "signup" && (
            <span className="nav-ripple left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          )}

        </div>

      </div>


      {/* =========================
          MOBILE BUTTON
      ========================= */}

      <button
        type="button"
        onClick={() => {
          animateClick("mobile");
          setMobileMenuOpen((prev) => !prev);
        }}
        className={`hidden max-md:flex ml-auto w-[42px] h-[42px] items-center justify-center rounded-[8px] border border-[#d9e0e5] bg-white text-[#111111] text-[24px] transition-all ${
          clickedItem === "mobile"
            ? "nav-click-animation"
            : ""
        }`}
        aria-label="Open menu"
      >
        {mobileMenuOpen ? "×" : "☰"}
      </button>


      {/* =========================
          MOBILE MENU
      ========================= */}

      {mobileMenuOpen && (
        <div
          className="
            nav-mobile-animation
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

            <Link
              to="/"
              onClick={() => {
                animateClick("mobile-solutions");
                closeMobileMenu();
              }}
              className={`px-[14px] py-[14px] rounded-[8px] text-[14px] font-medium transition-all active:scale-95 ${
                isSolutions
                  ? "bg-[#F5F7FF] text-[#1A56DB]"
                  : "text-[#555555]"
              }`}
            >
              SOLUTIONS
            </Link>


            <Link
              to="/platform"
              onClick={() => {
                animateClick("mobile-platform");
                closeMobileMenu();
              }}
              className={`px-[14px] py-[14px] rounded-[8px] text-[14px] font-medium transition-all active:scale-95 ${
                isPlatform
                  ? "bg-[#F5F7FF] text-[#1A56DB]"
                  : "text-[#555555]"
              }`}
            >
              PLATFORM
            </Link>


            <button
              type="button"
              onClick={handleResources}
              className="w-full flex items-center justify-between px-[14px] py-[14px] rounded-[8px] text-[14px] font-medium text-[#555555] active:scale-95 transition-all"
            >
              <span>RESOURCES</span>

              <span
                className={`inline-block transition-transform duration-300 ${
                  resourcesOpen
                    ? "rotate-180 text-[#1A56DB]"
                    : ""
                }`}
              >
                ⌄
              </span>
            </button>


            {resourcesOpen && (
              <div className="ml-[14px] border-l-2 border-[#1A56DB] pl-[10px]">

                <Link
                  to="/resources"
                  onClick={closeMobileMenu}
                  className="block px-[12px] py-[10px] text-[13px] text-[#555555] transition-all hover:text-[#1A56DB] hover:translate-x-[3px]"
                >
                  Resources
                </Link>

                <Link
                  to="/resources/blog"
                  onClick={closeMobileMenu}
                  className="block px-[12px] py-[10px] text-[13px] text-[#555555] transition-all hover:text-[#1A56DB] hover:translate-x-[3px]"
                >
                  Blog
                </Link>

                <Link
                  to="/resources/blog/article"
                  onClick={closeMobileMenu}
                  className="block px-[12px] py-[10px] text-[13px] text-[#555555] transition-all hover:text-[#1A56DB] hover:translate-x-[3px]"
                >
                  Articles
                </Link>

              </div>
            )}


            <Link
              to="/changelog"
              onClick={() => {
                animateClick("mobile-changelog");
                closeMobileMenu();
              }}
              className={`px-[14px] py-[14px] rounded-[8px] text-[14px] font-medium transition-all active:scale-95 ${
                isChangelogActive
                  ? "bg-[#F5F7FF] text-[#1A56DB]"
                  : "text-[#555555]"
              }`}
            >
              CHANGELOG
            </Link>


            <Link
              to="/pricing"
              onClick={() => {
                animateClick("mobile-pricing");
                closeMobileMenu();
              }}
              className={`px-[14px] py-[14px] rounded-[8px] text-[14px] font-medium transition-all active:scale-95 ${
                isPricingActive
                  ? "bg-[#F5F7FF] text-[#1A56DB]"
                  : "text-[#555555]"
              }`}
            >
              PRICING
            </Link>


            {/* MOBILE SIGN IN / SIGN UP */}

            <div className="mt-[12px] pt-[16px] border-t border-[#e5e5e5] flex flex-col gap-[10px]">

              <a
                href="#"
                onClick={() => animateClick("mobile-signin")}
                className="w-full h-[44px] flex items-center justify-center rounded-[8px] text-[14px] font-medium text-[#008f82] border border-[#d9e0e5] transition-all active:scale-95"
              >
                Sign In
              </a>

              <button
                type="button"
                onClick={() => animateClick("mobile-signup")}
                className="w-full h-[44px] rounded-[8px] bg-[#1A56DB] text-white text-[14px] font-medium transition-all active:scale-95 hover:shadow-[0_8px_22px_rgba(26,86,219,0.30)]"
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