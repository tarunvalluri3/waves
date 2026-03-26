import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiGrid, FiDollarSign } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Services", path: "/services", icon: <FiGrid /> },
    { name: "Pricing", path: "/pricing", icon: <FiDollarSign /> },
  ];

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-[70px] md:h-[80px]">
            {/* LOGO */}
            <Link to="/" className="logo">
              Wav<span className="text-red-600">e</span>s.
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-10 text-sm">
              {links.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative group text-white/80 hover:text-white transition"
                  >
                    {link.name}

                    {/* UNDERLINE */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[1.5px] bg-white transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              to="/pricing"
              className="hidden md:flex items-center px-5 h-10 rounded-full bg-white text-black text-sm font-medium hover:scale-[1.03] transition"
            >
              Get Started →
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white"
            >
              <FiMenu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
          {/* LOGO */}
          <div className="absolute top-10">
            <img src="/logo-white.png" alt="Waves" className="h-10 w-auto" />
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <FiX size={28} />
          </button>

          {/* MENU ITEMS */}
          <div className="flex flex-col items-center gap-10 text-white text-lg">
            {links.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 transition ${
                    isActive ? "text-white" : "text-white/70"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 px-6 py-3 bg-white text-black rounded-full text-sm font-medium"
            >
              Get Started →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
