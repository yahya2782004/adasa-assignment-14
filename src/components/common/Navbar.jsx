import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 group"
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                  <img
                    alt="Photography Logo"
                    className="w-full h-full object-cover"
                    src={logo}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                    عدسة
                  </span>
                  <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                    عالم التصوير الفوتوغرافي
                  </span>
                </div>
              </Link>
              <div className="hidden md:flex items-center">
                <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                          : "text-neutral-400 hover:text-white"
                      }`
                    }
                  >
                    الرئيسية
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                          : "text-neutral-400 hover:text-white"
                      }`
                    }
                  >
                    المدونة
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                          : "text-neutral-400 hover:text-white"
                      }`
                    }
                  >
                    من نحن
                  </NavLink>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
                <Link to="/blog" className="btn-primary text-sm">
                  ابدأ القراءة
                </Link>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
              >
                {isOpen ? (
                  <i className="fa-solid fa-xmark text-xl"></i>
                ) : (
                  <i className="fa-solid fa-bars text-xl"></i>
                )}
              </button>
            </div>
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0 "}`}
            >
              <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
                <div className="flex flex-col space-y-1">
                  <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                          : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                      }`
                    }
                  >
                    الرئيسية
                  </NavLink>
                  <NavLink
                    to="/blog"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                          : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                      }`
                    }
                  >
                    المدونة
                  </NavLink>
                  <NavLink
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                          : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                      }`
                    }
                  >
                    من نحن
                  </NavLink>
                  <Link
                    to="/blog"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary text-sm text-center mt-2"
                  >
                    ابدأ القراءة
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      }
    </>
  );
}
