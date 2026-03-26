import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-16">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <Link to="/" className="logo">
              Wav<span className="text-red-600">e</span>s.
            </Link>
            <p className="mt-3 text-white/60 text-sm leading-[1.6]">
              High-performance websites and digital systems built for modern
              businesses.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-medium mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Business Websites</li>
              <li>Landing Pages</li>
              <li>E-Commerce</li>
              <li>Web Applications</li>
            </ul>
          </div>

          {/* CONTACT */}
           <div>
      <h3 className="text-sm font-semibold mb-4 text-white">Contact</h3>

      <ul className="space-y-4 text-sm text-white/70">
        
  {/* Email */}
  <li>
    <a
      href="mailto:waveswebstudio99@email.com"
      className="flex items-center gap-3 hover:text-white transition"
    >
      <MdEmail className="text-red-500 text-lg shrink-0" />
      <span className="break-all">
        waveswebstudio99@email.com
      </span>
    </a>
  </li>

  {/* WhatsApp */}
  <li>
    <a
      href="https://wa.me/916303896249"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 hover:text-white transition"
    >
      <FaWhatsapp className="text-green-500 text-lg shrink-0" />
      <span>+91 6303896249</span>
    </a>
  </li>

  {/* Location */}
  <li>
    <a
      href="https://maps.google.com/?q=Hyderabad"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 hover:text-white transition"
    >
      <IoLocationSharp className="text-white text-lg shrink-0" />
      <span>Hyderabad, India</span>
    </a>
  </li>

</ul>
    </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* COPYRIGHT */}
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Waves Web Studio. All rights reserved.
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-5 text-white/70">
            <a href="#" className="hover:text-white transition">
              <FiGithub size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FiTwitter size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FiLinkedin size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
