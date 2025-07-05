"use client";

import React, { useEffect } from 'react';

const wheelTraits = [
  "Legacy Framing",
  "Pattern Recognition",
  "Reflective Depth",
  "Clarity Architect",
  "High-Agency Thinking",
  "Emotional Insight"
];


export function FullScreenHeroSection() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const wheelContainer = document.getElementById('wheel-container');
      if (wheelContainer) {
        wheelContainer.classList.add('fade-out');
      }
      
      document.getElementById('final-part')?.classList.add('fade-in');
      document.getElementById('cta-button-hero')?.classList.add('fade-in');
    }, 5000);

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
        color: '#f0f2f5',
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
          width: '450px',
          height: '450px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div 
          id="wheel-container"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: 'opacity 0.8s ease-out',
            opacity: 1
          }}
        >
          <div
            className="cognitive-wheel"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              opacity: 0.8,
            }}
          >
            {wheelTraits.map((trait, index) => {
              const angle = index * (360 / wheelTraits.length);
              const style: React.CSSProperties = {
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '120px',
                marginLeft: '-60px',
                marginTop: '-1rem',
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#A9A9A9',
                transform: `rotate(${angle}deg) translate(200px) rotate(${-angle}deg)`,
              };
              return (
                <div key={trait} style={style}>
                  {trait}
                </div>
              );
            })}
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
            fontFamily: "'Space Grotesk', sans-serif",
            zIndex: 10,
          }}
        >
          <h1 id="hero-main-title">How Can I Help?</h1>
        </div>
      </div>

      <button
        onClick={handleScrollToStart}
        id="cta-button-hero"
        style={{
          marginTop: '40px',
          padding: '15px 30px',
          backgroundColor: '#00b894',
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'opacity 1s ease-in 1s, transform 1s ease-in 1s',
          fontFamily: "'Inter', sans-serif",
        }}
        aria-label="Start Your Discovery"
      >
        Start Your Discovery
      </button>
    </section>
  );
}