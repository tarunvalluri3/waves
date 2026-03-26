import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const navigate = useNavigate();
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      gsap.to(".grid-bg", {
        backgroundPosition: "200px 200px",
        duration: 25,
        ease: "none",
        repeat: -1,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className=" overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-[#48CAE4] min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-80px)] flex items-center overflow-hidden pt-10 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24">
        {/* grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-black/10 blur-3xl rounded-full" />

        {/* circles */}
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 hidden md:block">
          <div className="w-40 h-40 border border-black/10 rounded-full" />
          <div className="mt-6 ml-12 w-64 h-64 border border-black/5 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl">
            <p className="fade text-xs sm:text-sm text-black/70 mb-4">
              Digital Solutions. Built for Modern Businesses.
            </p>

            <h1 className="fade text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.1] tracking-tight mb-6">
              Websites Engineered for Performance, Scalability, and Business
              Growth.
            </h1>

            <p className="fade text-sm sm:text-base text-black/80 mb-8 max-w-lg leading-[1.6]">
              We deliver end-to-end web solutions across websites, e-commerce
              platforms, SaaS applications, and custom dashboards—strategically
              built to optimize operations, enhance user experience, and drive
              sustainable growth.
            </p>

            <div className="fade flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate("/pricing")} className="bg-black text-white px-6 h-12 rounded-xl hover:scale-[1.03] hover:shadow-lg transition-all duration-300">
                Get Started →
              </button>

              <button onClick={() => navigate("/services")} className="border border-black px-6 h-12 rounded-xl hover:bg-black hover:text-white transition-all duration-300">
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="relative bg-white py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden">
          <div className="grid-bg absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:80px_80px]" />

          <div className="absolute inset-0 flex justify-center">
            <div className="w-[500px] h-[250px] bg-black/5 blur-3xl rounded-full" />
          </div>

          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 reveal">
              Built for Performance. Trusted for Quality.
            </h2>

            <p className="text-black/70 mb-16 reveal">
              We don’t just build websites—we engineer systems that perform
              reliably, scale efficiently, and support real business growth.
            </p>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {[
              "Modern Technology Stack",
              "Business-Focused Approach",
              "Production-Ready Systems",
              "Scalable Architecture",
            ].map((item, i) => (
              <div key={i} className="reveal text-center group">
                <div className="mx-auto mb-4 h-[2px] w-8 bg-black group-hover:w-14 transition-all" />

                <p className="text-sm font-medium text-black/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[80px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#0A0A0A"
              d="M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128V320H0Z"
            />
          </svg>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-[#0A0A0A] text-white py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 reveal">
              What We Build for Businesses
            </h2>

            <p className="text-white/80 reveal">
              A comprehensive range of web solutions designed to help businesses
              build and scale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              "Business Websites",
              "E-Commerce Platforms",
              "Custom Web Applications",
              "Landing Pages",
              "UI/UX Design",
              "Performance & Optimization",
            ].map((title, i) => (
              <div
                key={i}
                className="reveal p-6 sm:p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/15 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(255,255,255,0.08)] transition-all duration-500"
              >
                <h3 className="text-lg font-medium mb-3">{title}</h3>

                <p className="text-sm text-white/80 leading-[1.6]">
                  High-quality, scalable solutions tailored for modern
                  businesses.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 reveal">
            <button onClick={() => navigate("/services")} className="bg-white text-black px-6 h-12 rounded-xl text-sm font-medium hover:scale-[1.03] transition-all duration-300">
              Explore All Services →
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[80px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,176C840,192,960,192,1080,165.3C1200,139,1320,85,1380,58.7L1440,32V320H0Z"
            />
          </svg>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="relative bg-white py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
          {/* HEADER */}
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-black font-semibold mb-3 reveal">
              What makes us Unique from Others?
            </p>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 reveal">
              We Built Differently from Typical Web Development
            </h2>

            <p className="text-black reveal">
              We focus on building systems that deliver real business value—not
              just visually appealing websites.
            </p>
          </div>

          {/* COMPARISON */}
          <div className="relative grid md:grid-cols-2 gap-6 md:gap-10">
            {/* divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

            {/* TYPICAL */}
            <div className="reveal p-6 sm:p-8 rounded-2xl border border-black">
              <h3 className="text-lg font-semibold mb-6 text-black/60">
                Typical Approach
              </h3>

              <ul className="space-y-4 text-sm text-black">
                <li>Design-focused only</li>
                <li>Template-based builds</li>
                <li>Generic user experience</li>
                <li>Limited scalability</li>
                <li>One-time delivery</li>
              </ul>
            </div>

            {/* WAVES */}
            <div className="reveal p-6 sm:p-8 rounded-2xl bg-black text-white">
              <h3 className="text-lg font-semibold mb-6">Waves Approach</h3>

              <ul className="space-y-4 text-sm text-white/90">
                <li>Strategy + Design + Development</li>
                <li>Fully tailored solutions</li>
                <li>Business-focused UX</li>
                <li>Built for long-term growth</li>
                <li>Structured, scalable systems</li>
              </ul>
            </div>
          </div>

          {/* END LINE */}
          <p className="mt-16 text-black reveal whitespace-nowrap overflow-hidden text-ellipsis">
            We don’t just build websites — we build digital systems that support
            and scale your business.
          </p>

          {/* CTA */}
          <div className="mt-8 reveal">
            <button onClick={() => navigate("/pricing")} className="bg-black text-white px-6 h-12 rounded-xl text-sm font-medium hover:scale-[1.03] transition-all">
              Let’s Discuss Your Project →
            </button>
          </div>
        </div>
      </section>

      {/* PROCESS - EDITORIAL ELITE */}
      <section className="relative bg-[#90E0EF] py-28 sm:py-32">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-20">
          {/* HEADER */}
          <div className="max-w-3xl mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-tight mb-4 reveal">
              Our Structured Way To Approach Every Project
            </h2>

            <p className="text-black/80 reveal">
              From initial discovery to final delivery, our process ensures
              clarity, efficiency, and high-quality outcomes at every stage.
            </p>
          </div>

          {/* STEPS */}
          <div className="space-y-28">
            {[
              {
                no: "01",
                title: "Discovery",
                desc: "We begin by understanding your business, goals, and requirements to define a clear direction.",
              },
              {
                no: "02",
                title: "Strategy",
                desc: "We plan the structure, user experience, and technical approach to align with your business objectives.",
              },
              {
                no: "03",
                title: "Design & Development",
                desc: "We design and build your product with a focus on performance, usability, and scalability.",
              },
              {
                no: "04",
                title: "Launch & Optimization",
                desc: "We deploy your project and continuously refine it to ensure performance and long-term success.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`reveal grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* NUMBER SIDE */}
                <div className="flex items-center justify-start md:justify-center">
                  <span className="text-[48px] sm:text-[64px] font-semibold text-black/20">
                    {step.no}
                  </span>
                </div>

                {/* CONTENT SIDE */}
                <div className="max-w-md">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    {step.title}
                  </h3>

                  <p className="text-black/80 leading-[1.7]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="mt-32 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-black/80 reveal">
              A streamlined process designed to deliver results—efficiently and
              reliably.
            </p>

            <button onClick={() => navigate("/pricing")} className="bg-black text-white px-6 h-12 rounded-xl text-sm font-medium hover:scale-[1.03] transition-all reveal">
              Start Your Project →
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none">
          {/* Gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />

          {/* Soft blur glow */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[120px] bg-white/40 blur-3xl rounded-full" />
        </div>
      </section>

      {/* WHY CHOOSE WAVES */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-black/60 mb-3 reveal">
              Why Choose Waves
            </p>

            <h2 className="text-3xl md:text-[40px] font-semibold mb-6 reveal">
              Built for Businesses That Expect More
            </h2>

            <p className="text-black/80 reveal">
              We combine structured execution, clear communication, and
              high-quality development to deliver reliable digital solutions.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              "Performance-Driven Development",
              "Business-Aligned Approach",
              "Scalable Architecture",
              "Reliable Delivery",
            ].map((item, i) => (
              <p key={i} className="text-sm reveal">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-white py-28 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl md:text-[40px] font-semibold mb-6 reveal">
            Ready to Build Your Website?
          </h2>

          <button onClick={() => navigate("/pricing")} className="bg-white text-black px-8 h-12 rounded-xl hover:scale-105 transition reveal">
            Get Started →
          </button>
        </div>
      </section>
    </div>
  );
}
