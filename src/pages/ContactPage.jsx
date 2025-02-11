"use client"

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const titleRef = useRef(null);
  const sectionRefs = useRef([]);

  // Function to add elements to refs safely
  const addToRefs = useCallback((el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current = [...sectionRefs.current, el];
    }
  }, []);

  useEffect(() => {
    if (!titleRef.current) return;

    // Animate the main title
    gsap.fromTo(
      titleRef.current.children,
      { y: 100, opacity: 0 },
      { duration: 1, y: 0, opacity: 1, stagger: 0.2, ease: "power3.out" }
    );

    // Animate each section
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
          duration: 1,
          y: 0,
          opacity: 1,
          delay: index * 0.2,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#E6E6FA] p-6 space-y-16 text-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl mb-4">GOT A QUESTION?</h1>

        <h2 ref={titleRef} className="text-6xl font-black tracking-tight mb-20 overflow-hidden">
          <span className="inline-block">GET IN TOUCH</span>
          <br />
          <span className="inline-block">WITH US</span>
        </h2>

        <div className="space-y-24">
          {/* General Enquiries */}
          <div ref={addToRefs} className="grid grid-cols-[auto,1fr] gap-x-12 items-start">
            <div className="text-xl">001</div>
            <div className="space-y-6">
              <h3 className="text-5xl font-black">GENERAL ENQUIRIES</h3>
              <p className="text-xl">Got questions? Reach out to us for any information you need!</p>
              <a href="mailto:hello@umbrella.com" className="inline-block px-8 py-3 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
                HELLO@KEIKEN.COM
              </a>
            </div>
          </div>

          {/* Careers */}
          <div ref={addToRefs} className="grid grid-cols-[auto,1fr] gap-x-12 items-start">
            <div className="text-xl">002</div>
            <div className="space-y-6">
              <h3 className="text-5xl font-black">CAREERS</h3>
              <p className="text-xl">Join our team! Explore career opportunities and grow with us.</p>
              <a href="mailto:rzkylimit@gmail.com" className="inline-block px-8 py-3 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
                CAREER@UMBRELLA.COM
              </a>
            </div>
          </div>

          {/* Partner Enquiries */}
          <div ref={addToRefs} className="grid grid-cols-[auto,1fr] gap-x-12 items-start">
            <div className="text-xl">003</div>
            <div className="space-y-6">
              <h3 className="text-5xl font-black">PARTNER ENQUIRIES</h3>
              <p className="text-xl">Interested in partnering? Lets collaborate and create value together.</p>
              <a href="mailto:partner@umbrella.com" className="inline-block px-8 py-3 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
                PARTNER@UMBRELLA.COM
              </a>
            </div>
          </div>

          {/* Partner Enquiries */}
          <div ref={addToRefs} className="grid grid-cols-[auto,1fr] gap-x-12 items-start">
            <div className="text-xl">004</div>
            <div className="space-y-6">
              <h3 className="text-5xl font-black">CONTACT NUMBER</h3>
              <p className="text-xl">This is Number.</p>
              <a href="https://wa.me/6281234567890" className="inline-block px-8 py-3 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
                +62 812 3456 7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
