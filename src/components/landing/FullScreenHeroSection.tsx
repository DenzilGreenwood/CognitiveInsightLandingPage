
"use client";

import React, { useEffect } from 'react';

export function FullScreenHeroSection() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const scrollingPart = document.getElementById('scrolling-part');
      if (scrollingPart) {
        scrollingPart.classList.add('fade-out');
        // Remove inline opacity to let CSS transition take full effect
        scrollingPart.style.opacity = ''; 
      }
      document.getElementById('final-part')?.classList.add('fade-in');
      document.getElementById('cta-button-hero')?.classList.add('fade-in');
    }, 5000); // Animation starts after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleScrollToStart = () => {
    document.getElementById('start')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero-fullscreen"
      aria-labelledby="hero-main-title"
      style={{
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#1a1a1a',
        color: '#f0f2f5', // Light text for contrast on dark background
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        className="animation-container"
        style={{
          width: '90%',
          maxWidth: '1000px',
          height: '200px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          id="scrolling-part"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: 'opacity 0.8s ease-out',
            opacity: 0.6, // Initial opacity for scrolling words
          }}
        >
          <div
            className="line line1"
            style={{
              position: 'absolute',
              top: '25%',
              whiteSpace: 'nowrap',
              fontSize: '1.8rem',
              width: '200%',
              animation: 'scroll-right-to-left 30s linear infinite',
            }}
          >
            <span>Legacy Framing &nbsp; Pattern Recognition &nbsp; Clarity Architect &nbsp; Systems Mapping &nbsp; Reflective Depth &nbsp; Synthesis &nbsp; </span>
            <span>Legacy Framing &nbsp; Pattern Recognition &nbsp; Clarity Architect &nbsp; Systems Mapping &nbsp; Reflective Depth &nbsp; Synthesis &nbsp; </span>
          </div>
          <div
            className="line line2"
            style={{
              position: 'absolute',
              top: '55%',
              whiteSpace: 'nowrap',
              fontSize: '1.8rem',
              width: '200%',
              animation: 'scroll-left-to-right 30s linear infinite',
            }}
          >
            <span>Validate &nbsp; Stabilize &nbsp; Reframe &nbsp; Guide &nbsp; Empower &nbsp; Facilitate &nbsp; Align &nbsp; </span>
            <span>Validate &nbsp; Stabilize &nbsp; Reframe &nbsp; Guide &nbsp; Empower &nbsp; Facilitate &nbsp; Align &nbsp; </span>
          </div>
        </div>

        <div
          id="final-part"
          style={{
            position: 'absolute',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 1s ease-in 0.5s, transform 1s ease-in 0.5s',
            fontFamily: "'Space Grotesk', sans-serif", // Headline font for impact
          }}
        >
          <h1 id="hero-main-title">How Can I Help?</h1>
        </div>
      </div>

      <button
        onClick={handleScrollToStart}
        id="cta-button-hero"
        className="cta-button" // Keep class if needed for global styling not overridden
        style={{
          marginTop: '40px',
          padding: '15px 30px',
          backgroundColor: '#00b894', // Accent green/teal
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          opacity: 0,
          transition: 'opacity 1s ease-in 1s', // Transition for the button itself
          fontFamily: "'Inter', sans-serif",
        }}
        aria-label="Start Your Discovery"
      >
        Start Your Discovery
      </button>
    </section>
  );
}
