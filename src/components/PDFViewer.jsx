import React, { useEffect, useRef, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import gsap from "gsap";

const PDFViewer = ({ fileUrl }) => {
  const textRef = useRef(null);
  const pdfRef = useRef(null);
  const letterARef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");

    // Animasi masuk teks "LEGALITY"
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" }
    );

    // Animasi PDF Viewer masuk dari bawah dengan fade-in
    gsap.fromTo(
      pdfRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.8 }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start transition-colors duration-300 bg-black text-white">
      {/* Judul LEGALITY dengan Animasi */}
      <h1
        ref={textRef}
        className="title text-[100px] md:text-[140px] special-font hero-heading font-bold uppercase leading-none text-white mt-24"
      >
        LEG
        <b>A</b>
        LITY
      </h1>

      {/* PDF Viewer dengan Animasi */}
      <div
        ref={pdfRef}
        className="w-[90%] md:w-[60%] lg:w-[50%] bg-gray-900 shadow-2xl border border-gray-700 rounded-lg overflow-hidden mt-10 mb-32"
      >
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
          <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPlugin()]} />
        </Worker>
      </div>
    </div>
  );
};

export default PDFViewer;
