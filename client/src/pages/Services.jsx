import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

import {
  FiMonitor,
  FiLayout,
  FiShoppingCart,
  FiSettings,
  FiPenTool,
  FiZap,
  FiTool,
  FiLayers,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger); 



const services = [
  {
    title: "Business Websites",
    desc: "Scalable, high-performance websites aligned with your business goals.",
    icon: <FiMonitor />,
    points: [
      "Custom design tailored to your brand",
      "Fully responsive across devices",
      "SEO-friendly structure",
      "Performance optimized",
    ],
  },
  {
    title: "Landing Pages",
    desc: "Conversion-focused pages designed to capture leads and drive results.",
    icon: <FiLayout />,
    points: [
      "High-converting layouts",
      "Fast loading speed",
      "Clear messaging structure",
      "Marketing integrations",
    ],
  },
  {
    title: "E-Commerce",
    desc: "Online stores built for seamless experience and higher conversions.",
    icon: <FiShoppingCart />,
    points: [
      "Secure payment systems",
      "Optimized checkout flow",
      "Product management",
      "Scalable architecture",
    ],
  },
  {
    title: "Web Applications",
    desc: "Custom systems and dashboards tailored to your workflows.",
    icon: <FiSettings />,
    points: [
      "Custom functionality",
      "Dashboard systems",
      "API integrations",
      "Secure backend",
    ],
  },
  {
    title: "UI/UX Design",
    desc: "User-focused design for clarity and usability.",
    icon: <FiPenTool />,
    points: [
      "Wireframes & prototypes",
      "Modern UI systems",
      "UX optimization",
      "Consistency across screens",
    ],
  },
  {
    title: "Performance",
    desc: "Speed, SEO, and performance improvements.",
    icon: <FiZap />,
    points: [
      "Speed optimization",
      "SEO improvements",
      "Performance audits",
      "Core Web Vitals",
    ],
  },
  {
    title: "Maintenance",
    desc: "Ongoing support to keep systems reliable.",
    icon: <FiTool />,
    points: ["Regular updates", "Bug fixes", "Monitoring", "Technical support"],
  },
  {
    title: "SaaS Development",
    desc: "Scalable SaaS platforms built for growth.",
    icon: <FiLayers />,
    points: [
      "Full product development",
      "Authentication systems",
      "Scalable architecture",
      "Analytics dashboards",
    ],
  },
];

export default function Services() {
  const rootRef = useRef(null); 

  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(rootRef);

      // HERO SAFE ANIMATION
      gsap.set(q(".hero-text, .hero-card"), { autoAlpha: 1 });

      gsap.from(q(".hero-text"), {
        autoAlpha: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        immediateRender: false,
      });

      gsap.from(q(".hero-card"), {
        autoAlpha: 0,
        x: -40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
        immediateRender: false,
      });

      // PROCESS ANIMATION
      gsap.utils.toArray(q(".process-card")).forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      // SERVICE CARDS
      gsap.utils.toArray(q(".card")).forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 0.9,
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
    <div ref={rootRef}>
      {/* HERO (UNCHANGED) */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#48cae4]/15 via-white to-white">
        <div className="max-w-[1200px] mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.12em] text-black/50">
              What We Deliver
            </p>

            <h2 className="text-2xl md:text-[32px] font-semibold leading-[1.2] max-w-[400px]">
              Systems Built for Real Business Impact
            </h2>

            <div className="space-y-4">
              <div className="hero-card p-4 rounded-xl border border-black/10 bg-white shadow-sm">
                <p className="font-medium text-sm mb-1">
                  Performance-First Approach
                </p>
                <p className="text-xs text-black/60">
                  Optimized for speed and scalability.
                </p>
              </div>

              <div className="hero-card p-4 rounded-xl border border-black/10 bg-white shadow-sm">
                <p className="font-medium text-sm mb-1">
                  Business-Focused Solutions
                </p>
                <p className="text-xs text-black/60">
                  Built for real growth challenges.
                </p>
              </div>

              <div className="hero-card p-4 rounded-xl border border-black/10 bg-white shadow-sm">
                <p className="font-medium text-sm mb-1">
                  Scalable Architecture
                </p>
                <p className="text-xs text-black/60">
                  Designed to grow long-term.
                </p>
              </div>
            </div>
          </div>

          <div className="md:pl-10 text-center md:text-left">
            <p className="hero-text text-sm uppercase tracking-[0.12em] text-black/50 mb-6">
              Services
            </p>

            <h1 className="hero-text text-4xl sm:text-5xl md:text-[60px] font-semibold mb-8">
              High-Performance Digital Solutions Built for Business Growth
            </h1>

            <p className="hero-text text-lg text-black/70 mb-10">
              We design and develop scalable, high-performance platforms.
            </p>

            <button onClick={() => navigate("/pricing")} className="hero-text bg-black text-white px-8 h-12 rounded-xl font-medium shadow-lg hover:scale-[1.03] transition">
              Start Your Project →
            </button>
          </div>
        </div>
      </section>

      <div className="relative h-24 bg-white overflow-hidden">
        {/* soft gradient blend */}
        <div
          className="absolute inset-0 
  bg-gradient-to-b from-white via-[#48cae4]/10 to-[#48cae4]/20"
        />

        {/* divider line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/10" />
      </div>

      {/* SERVICES (FINAL CARDS) */}
      {/* SERVICES (UPDATED BG ONLY) */}
      <section
        className="relative py-28 overflow-hidden 
bg-gradient-to-br from-[#48cae4] via-[#5ed3ec] to-[#caf0f8]"
      >
        {/* SOFT CIRCLES */}
        <div className="absolute w-[400px] h-[400px] bg-white/20 rounded-full blur-[120px] top-[-100px] left-[10%]" />
        <div className="absolute w-[300px] h-[300px] bg-white/20 rounded-full blur-[120px] bottom-[-100px] right-[10%]" />
        <div className="absolute w-[250px] h-[250px] bg-white/10 rounded-full blur-[100px] top-[40%] left-[40%]" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 mb-20">
          {/* PRE HEADING */}
          <p className="text-sm uppercase tracking-[0.12em] text-black/60 mb-4">
            Services
          </p>

          {/* MAIN HEADING */}
          <h2 className="text-3xl md:text-[42px] font-semibold text-black mb-6 max-w-[700px]">
            Solutions Built to Support and Scale Your Business
          </h2>

          {/* SUPPORT LINE */}
          <p className="text-black/70 max-w-[600px] leading-[1.6]">
            A comprehensive range of web solutions designed to help businesses
            build, optimize, and grow their digital presence.
          </p>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="card group relative p-[1px] rounded-2xl 
        bg-gradient-to-br from-white/40 via-white/10 to-transparent 
        transition-all duration-500"
            >
              <div
                className="relative rounded-2xl p-6 
          bg-white 
          border border-black/10
          overflow-hidden
          transition-all duration-500
          group-hover:-translate-y-2 
          group-hover:shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
              >
                {/* LIGHT SWEEP */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                  <div
                    className="absolute top-0 left-[-100%] w-[200%] h-full 
              bg-gradient-to-r from-transparent via-white/40 to-transparent 
              skew-x-[-20deg] 
              animate-[shine_1.2s_ease]"
                  />
                </div>

                {/* TOP HIGHLIGHT */}
                <div
                  className="absolute inset-0 rounded-2xl 
            bg-gradient-to-b from-white/40 to-transparent opacity-50 pointer-events-none"
                />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl 
              bg-[#0f172a] text-white mb-5 text-xl 
              transition-all duration-300 
              group-hover:scale-110 group-hover:rotate-3"
                  >
                    {s.icon}
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-black">
                    {s.title}
                  </h3>

                  <p className="text-sm text-black/80 mb-4">{s.desc}</p>

                  <ul className="space-y-1 text-sm text-black/70">
                    {s.points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 mt-20">
          <p className="text-black/70 max-w-[600px]">
            Every solution is designed with performance, scalability, and
            long-term business impact in mind.
          </p>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* HEADER */}
          <div className="max-w-[700px] mb-16">
            <p className="text-sm uppercase tracking-[0.12em] text-black/50 mb-4">
              Process
            </p>

            <h2 className="text-3xl md:text-[42px] font-semibold mb-6">
              A Structured Approach to Every Project
            </h2>

            <p className="text-black/70">
              From discovery to deployment, every step is designed to ensure
              clarity, efficiency, and high-quality outcomes.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            {/* LINE */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-black/10" />

            <div className="grid md:grid-cols-4 gap-10">
              {[
                {
                  title: "Discovery",
                  desc: "Understanding your business, goals, and requirements to define a clear direction.",
                },
                {
                  title: "Strategy",
                  desc: "Planning structure, user experience, and technical architecture aligned with your objectives.",
                },
                {
                  title: "Design & Development",
                  desc: "Designing and building scalable, high-performance solutions focused on usability.",
                },
                {
                  title: "Launch & Optimization",
                  desc: "Deploying, testing, and continuously improving for long-term performance.",
                },
              ].map((step, i) => (
                <div key={i} className="process-card relative">
                  {/* DOT */}
                  <div className="hidden md:block w-3 h-3 rounded-full bg-black absolute -top-[6px] left-0" />

                  <div className="pt-8">
                    {/* NUMBER */}
                    <p className="text-sm font-medium text-black/50 mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </p>

                    {/* TITLE */}
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>

                    {/* DESC */}
                    <p className="text-sm text-black/70 leading-[1.6]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-16 text-black/70 max-w-[600px]">
            A streamlined process built to deliver reliable and scalable
            results.
          </div>
        </div>
      </section>
      <div className="relative h-32 bg-white overflow-hidden">
        {/* gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#48cae4]/10 to-white" />

        {/* curve shape */}
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160 C240,240 480,80 720,120 C960,160 1200,240 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      <section className="bg-white py-28">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          {/* HEADER */}
          <p className="text-sm uppercase tracking-[0.12em] text-black/50 mb-4">
            Get Started
          </p>

          <h2 className="text-3xl md:text-[42px] font-semibold mb-6">
            Ready to Build Your Project?
          </h2>

          <p className="text-black/70 max-w-[600px] mx-auto mb-14">
            Every project is tailored to your business. Let’s discuss your
            requirements, define the scope, and build a solution that delivers
            real results.
          </p>

          {/* OPTIONS */}
          <div className="grid md:grid-cols-2 gap-6">
      
      {/* PRICING */}
      <div
        className="group p-8 rounded-2xl border border-black/10 bg-white 
        transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
      >
        <h3 className="text-xl font-semibold mb-3">Explore Pricing</h3>

        <p className="text-black/70 mb-6 text-sm">
          View our pricing structure and understand how we approach
          project costs.
        </p>

        <button
          onClick={() => navigate("/pricing")}
          className="inline-flex items-center justify-center bg-black text-white px-6 h-11 rounded-lg 
          transition hover:scale-[1.03]"
        >
          View Pricing →
        </button>
      </div>

      {/* CONTACT */}
      <div
        className="group p-8 rounded-2xl border border-black/10 
        bg-gradient-to-br from-white via-[#48cae4]/10 to-[#48cae4]/20
        transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
      >
        <h3 className="text-xl font-semibold mb-3 text-black">
          Contact Us
        </h3>

        <p className="text-black/70 mb-6 text-sm">
          Tell us about your project and we’ll help you plan the right
          solution.
        </p>

        <button
          onClick={() => navigate("/pricing")}
          className="inline-flex items-center justify-center 
          bg-black text-white px-6 h-11 rounded-lg 
          transition-all duration-300 
          hover:scale-[1.03] hover:shadow-md"
        >
          Get in Touch →
        </button>
      </div>

    </div>
        </div>
      </section>
    </div>
  );
}
