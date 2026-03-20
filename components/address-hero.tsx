'use client'

import Link from 'next/link'

export default function AddressHero() {
  return (
    <section id="hero" className="index-hero">
      <div className="hero-grid" />

      <div className="hero-wrap">
        <div className="hero-content">
          <div className="hero-eyebrow">Precision Location Infrastructure</div>
          <h1 className="hero-headline">
            THE ADDRESS
            <br />
            WAS NEVER
            <br />
            <em>ENOUGH.</em>
          </h1>
          <p className="hero-sub">
            Keiros maps every unit, floor, and corridor to a precise physical
            location so deliveries arrive, ambulances find you, and visitors
            stop getting lost in the last hundred meters.
          </p>
          
        </div>

        <div className="hero-visual">
          <div className="hero-pin">
            <div className="pin-ring" />
            <div className="pin-ring" />
            <div className="pin-ring" />
            <div className="pin-ring" />
            <div className="pin-dot" />
           
            <div className="accuracy-badge">+/- 3 FT ACCURACY</div>
          </div>
        </div>
      </div>

      <div className="hero-stat-strip">
        {[
          ['3 FT', 'Location accuracy including elevation'],
          ['$0', 'Hardware cost on the subscription model'],
          ['ANY', 'Building, campus, or multi-unit property'],
          ['SDK', 'Embed directly into your product'],
        ].map(([value, label]) => (
          <div key={label} className="hero-stat">
            <div className="stat-num">{value}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .index-hero {
          position: relative;
          overflow: hidden;
          background: var(--color-background);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          color: var(--color-foreground);
          font-family: 'DM Sans', sans-serif;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(color-mix(in oklab, var(--color-accent) 20%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in oklab, var(--color-accent) 20%, transparent) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridDrift 20s linear infinite;
        }

        .hero-wrap {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 340px;
          gap: 40px;
          align-items: center;
          min-height: auto;
          max-width: 1280px;
          margin: 0 auto;
          padding: 112px 48px 44px;
        }

        .hero-content {
          max-width: 620px;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          color: var(--color-accent);
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .hero-eyebrow::before {
          content: '';
          width: 32px;
          height: 1px;
          background: var(--color-accent);
        }

        .hero-headline {
          margin: 0 0 32px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          line-height: 0.96;
          letter-spacing: 0.02em;
          max-width: 100%;
        }

        .hero-headline em {
          font-style: normal;
          color: var(--color-accent);
        }

        .hero-sub {
          max-width: 560px;
          margin: 0 0 32px;
          color: rgba(244, 242, 238, 0.7);
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          align-items: center;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-block;
          padding: 16px 36px;
          font-size: 0.9rem;
          letter-spacing: 0.06em;
          text-decoration: none;
          text-transform: uppercase;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }

        .btn-primary {
          background: var(--color-accent);
          color: var(--color-accent-foreground);
          font-weight: 600;
        }

        .btn-primary:hover {
          background: color-mix(in oklab, var(--color-accent) 88%, white);
          transform: translateY(-2px);
        }

        .btn-secondary {
          border: 1px solid rgba(244, 242, 238, 0.3);
          color: var(--color-foreground);
        }

        .btn-secondary:hover {
          border-color: var(--color-foreground);
          transform: translateY(-2px);
        }

        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-pin {
          position: relative;
          width: 320px;
          height: 320px;
        }

        .pin-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid var(--color-accent);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: ringPulse 3s ease-out infinite;
          opacity: 0;
        }

        .pin-ring:nth-child(1) {
          width: 60px;
          height: 60px;
          animation-delay: 0s;
        }

        .pin-ring:nth-child(2) {
          width: 140px;
          height: 140px;
          animation-delay: 0.6s;
        }

        .pin-ring:nth-child(3) {
          width: 240px;
          height: 240px;
          animation-delay: 1.2s;
        }

        .pin-ring:nth-child(4) {
          width: 280px;
          height: 280px;
          animation-delay: 1.8s;
          border-color: color-mix(in oklab, var(--color-accent) 30%, transparent);
        }

        .pin-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: var(--color-accent);
          box-shadow:
            0 0 30px color-mix(in oklab, var(--color-accent) 85%, transparent),
            0 0 60px color-mix(in oklab, var(--color-accent) 35%, transparent);
        }

        .pin-halo {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 56px;
          height: 56px;
          border: 1px solid color-mix(in oklab, var(--color-accent) 45%, transparent);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .accuracy-badge {
          position: absolute;
          top: calc(50% - 42px);
          left: calc(50% + 18px);
          padding: 6px 14px;
          background: color-mix(in oklab, var(--color-accent) 12%, transparent);
          border: 1px solid var(--color-accent);
          color: var(--color-accent);
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          white-space: nowrap;
          animation: badgeFade 2s ease-in-out infinite alternate;
        }

        .hero-stat-strip {
          position: relative;
          z-index: 2;
          display: flex;
          background: rgba(8, 10, 12, 0.6);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
        }

        .hero-stat {
          flex: 1;
          padding: 28px 48px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .hero-stat:last-child {
          border-right: none;
        }

        .stat-num {
          margin-bottom: 4px;
          color: var(--color-accent);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.4rem;
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .stat-label {
          color: var(--color-muted-foreground);
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        @keyframes gridDrift {
          0% {
            transform: translate(0, 0);
          }

          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes ringPulse {
          0% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(0.7);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes badgeFade {
          0% {
            opacity: 0.7;
          }

          100% {
            opacity: 1;
          }
        }

        @media (max-width: 1024px) {
          .hero-wrap {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 96px 24px 36px;
          }
        }

        @media (max-width: 768px) {
          .hero-pin {
            width: 280px;
            height: 280px;
          }

          .pin-ring:nth-child(4) {
            width: 240px;
            height: 240px;
          }

          .hero-stat-strip {
            flex-wrap: wrap;
          }

          .hero-stat {
            min-width: 50%;
            padding: 24px;
          }
        }

        @media (max-width: 640px) {
          .hero-wrap {
            padding-left: 20px;
            padding-right: 20px;
          }

          .hero-headline {
            font-size: 48px;
            max-width: 100%;
          }

          .hero-sub {
            font-size: 0.95rem;
          }

          .hero-stat {
            min-width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
