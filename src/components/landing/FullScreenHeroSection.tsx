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
  
  const wheelSize = 420;
  const radius = 170;

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
          width: `${wheelSize}px`,
          height: `${wheelSize}px`,
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
          {/* This is the rotating element. It can contain a visual graphic of a wheel if needed. */}
          <div
            className="cognitive-wheel"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              opacity: 0.8,
              border: '2px dashed rgba(169, 169, 169, 0.2)', // Optional: A faint circle graphic
            }}
          >
          </div>
          
          {/* This container holds the text items, positioned absolutely so they don't rotate. */}
          {wheelTraits.map((trait, index) => {
              // We subtract Math.PI / 2 to start the first item at the top of the circle (12 o'clock).
              const angleInRadians = (index / wheelTraits.length) * 2 * Math.PI - (Math.PI / 2); 
              const x = radius * Math.cos(angleInRadians) + wheelSize / 2;
              const y = radius * Math.sin(angleInRadians) + wheelSize / 2;
              
              const style: React.CSSProperties = {
                position: 'absolute',
                top: `${y}px`,
                left: `${x}px`,
                transform: 'translate(-50%, -50%)',
                width: '120px',
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#A9A9A9',
              };
              return (
                <div key={trait} style={style}>
                  {trait}
                </div>
              );
            })}
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
