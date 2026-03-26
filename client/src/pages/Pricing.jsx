import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Pricing() {
  const rootRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(rootRef);

      // HERO
      gsap.from(q(".hero-anim"), {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // SECTIONS
      gsap.utils.toArray(q(".section")).forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-white text-black">
      {/* HERO */}
      <section className="py-28 bg-gradient-to-b from-[#48cae4]/10 to-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="hero-anim text-sm uppercase tracking-[0.12em] text-black/50 mb-4">
            Pricing
          </p>

          <h1 className="hero-anim text-4xl md:text-[56px] font-semibold mb-6 max-w-[800px] leading-[1.1]">
            Flexible Pricing Designed Around Your Business
          </h1>

          <p className="hero-anim text-black/70 max-w-[600px] leading-[1.6]">
            Every project is unique. While we offer fixed pricing for landing
            pages, most solutions are tailored based on your requirements and
            business goals.
          </p>
        </div>
      </section>

      {/* TRANSITION */}
      <div className="h-24 bg-gradient-to-b from-white to-[#48cae4]/10" />

      {/* FIXED PRICING */}
      <section className="section py-24 bg-[#48cae4]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-[42px] font-semibold mb-4">
                Landing Page Package
              </h2>

              <p className="text-black/70 max-w-[420px]">
                A complete 5-page website designed for performance, conversion,
                and business impact.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-white/30 blur-xl rounded-2xl" />

              <div className="relative z-10 p-8 rounded-2xl border border-black/10 bg-white">
                <h2>What you will Get for</h2>

                <p className="mt-2 text-4xl font-semibold mb-6">₹9,999/-</p>

                <ul className="space-y-2 text-black/80 mb-6">
                  <li>• Home Page</li>
                  <li>• About Us</li>
                  <li>• Contact Page</li>
                  <li>• Services Overview</li>
                  <li>• Lead Capture Page</li>
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center 
  bg-black text-white px-8 h-12 rounded-xl 
  hover:scale-[1.03] transition"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-[#48cae4] to-white" />

      {/* CUSTOM PRICING */}
      <section className="section py-28 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-[42px] font-semibold mb-6">
              Custom Solutions, Tailored Pricing
            </h2>

            <p className="text-black/70 mb-6 leading-[1.6]">
              Business websites, e-commerce platforms, SaaS applications, and
              custom systems are priced based on your requirements, features,
              and complexity.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center 
  bg-black text-white px-8 h-12 rounded-xl 
  hover:scale-[1.03] transition"
            >
              Disscuss Your Project
            </a>
          </div>

          <div className="space-y-4">
            {[
              "Business Websites",
              "E-Commerce Platforms",
              "Custom Web Applications",
              "SaaS Development",
              "UI/UX Systems",
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 border border-black/10 rounded-xl 
                transition-all duration-300 
                hover:bg-black hover:text-white hover:translate-x-2"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section py-24 bg-[#48cae4] text-center">
        <h2 className="text-3xl md:text-[42px] font-semibold mb-6">
          Not Sure What to Choose?
        </h2>

        <p className="text-black/70 mb-8">
          We’ll guide you through the right solution based on your needs.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center 
  bg-black text-white px-8 h-12 rounded-xl 
  hover:scale-[1.03] transition"
        >
          Talk to Us
        </a>
      </section>

      <div className="relative h-40 bg-[#48cae4] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#48cae4] to-white opacity-80" />

        <svg
          className="absolute bottom-0 w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160 C240,240 480,80 720,120 C960,160 1200,240 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* CONTACT */}
      <section id="contact" className="section py-28 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-[42px] font-semibold mb-6">
              Let’s Discuss Your Project
            </h2>

            <p className="text-black/70 mb-6">
              Share your requirements and we’ll help you build the right
              solution.
            </p>

            <div className="text-sm text-black/60 space-y-2">
              <p>Email: your@email.com</p>
              <p>Response: Within 24 hours</p>
            </div>
          </div>

          {/* FORM */}
          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);

              const formData = new FormData(e.target);

              const res = await fetch("https://formspree.io/f/mkopnybo", {
                method: "POST",
                body: formData,
                headers: {
                  Accept: "application/json",
                },
              });

              if (res.ok) {
                setStatus("SUCCESS");
                e.target.reset();
              } else {
                setStatus("ERROR");
              }

              setLoading(false);
            }}
          >
            <input
              name="name"
              className="w-full border border-black/20 rounded-lg px-4 h-11 outline-none focus:border-black"
              placeholder="Name"
              required
            />
            <input
              name="email"
              type="email"
              className="w-full border border-black/20 rounded-lg px-4 h-11 outline-none focus:border-black"
              placeholder="Email"
              required
            />

            <select
              name="project"
              className="w-full border border-black/20 rounded-lg px-4 h-11 outline-none focus:border-black"
            >
              <option>Project Type</option>
              <option>Landing Page</option>
              <option>Business Website</option>
              <option>E-Commerce</option>
              <option>SaaS</option>
            </select>

            <textarea
              name="message"
              className="w-full border border-black/20 rounded-lg px-4 py-3 outline-none focus:border-black"
              rows="4"
              placeholder="Explain your project requirements and goals..."
              required
            />

            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-6 h-11 rounded-lg 
            hover:scale-[1.03] transition"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>

            {status === "SUCCESS" && (
              <p className="text-green-600 text-sm mt-2">
                Message sent successfully!
              </p>
            )}

            {status === "ERROR" && (
              <p className="text-red-600 text-sm mt-2">
                Something went wrong. Try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}