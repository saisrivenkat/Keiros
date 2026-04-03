'use client'

import Link from 'next/link'

export default function AddressHero() {
  const heroCtaStyle = {
    backgroundColor: 'var(--accent)',
    color: 'var(--accent-foreground)',
    borderColor: 'transparent',
    padding:'10px',
    borderRadius: '10px',
  } as const

  return (
    <section id="hero" className="index-hero">
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
          <div className="hero-actions">
            <Link href="#contact" className="hero-cta" style={heroCtaStyle}>
              Request Early Access
            </Link>
            <Link href="#solution" className="hero-cta" style={heroCtaStyle}>
              How It Works
            </Link>
          </div>
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
          {
            label: 'Location accuracy including elevation',
            kind: 'accuracy',
            symbol: '+/-',
            value: '3',
            unit: 'FT',
          },
          {
            label: 'Building, campus, or multi-unit property',
            kind: 'default',
            value: 'ANY',
          },
          {
            label: 'Embed directly into your product',
            kind: 'default',
            value: 'SDK',
          },
        ].map((stat) => (
          <div key={stat.label} className="hero-stat">
            {stat.kind === 'accuracy' ? (
              <div className="stat-accuracy" aria-label="Plus or minus 3 feet">
                <span className="stat-accuracy__symbol">{stat.symbol}</span>
                <span className="stat-accuracy__value">{stat.value}</span>
                <span className="stat-accuracy__unit">{stat.unit}</span>
              </div>
            ) : (
              <div className="stat-num">{stat.value}</div>
            )}
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .index-hero {
          --keiros-accent: #5bc9f0;
          --keiros-accent-foreground: #050607;
          position: relative;
          overflow: hidden;
          background: var(--color-background);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          color: var(--color-foreground);
          font-family: 'DM Sans', sans-serif;
        }

        .hero-wrap {
          position: relative;
          z-index: 2;
          display: block;
          align-items: center;
          min-height: auto;
          width: 100%;
          margin: 0 auto;
          padding: 112px 48px 44px;
        }

        .hero-content {
          max-width: none;
          width: min(58vw, 760px);
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          color: var(--keiros-accent);
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .hero-eyebrow::before {
          content: '';
          width: 32px;
          height: 1px;
          background: var(--keiros-accent);
        }

        .hero-headline {
          margin: 0 0 32px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem, 6vw, 5.1rem);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: 0.035em;
          max-width: 100%;
        }

        .hero-headline em {
          font-style: normal;
          color: var(--keiros-accent);
        }

        .hero-sub {
          max-width: none;
          margin: 0 0 32px;
          color: rgba(244, 242, 238, 0.7);
          font-size: 1.18rem;
          font-weight: 300;
          line-height: 1.65;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          align-items: center;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 56px;
          padding: 16px 30px;
          background: var(--accent);
          color: var(--accent-foreground);
          border: 1px solid transparent;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.06em;
          line-height: 1;
          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
          text-decoration: none;
          text-transform: uppercase;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s, opacity 0.2s;
        }

        .hero-cta:hover {
          background: color-mix(in oklab, var(--accent) 88%, white);
          transform: translateY(-2px);
          box-shadow:
            0 18px 36px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.18);
        }

        .hero-visual {
          position: absolute;
          top: 50%;
          left: 75%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, -50%);
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
          border: 1px solid var(--keiros-accent);
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
          border-color: color-mix(in oklab, var(--keiros-accent) 30%, transparent);
        }

        .pin-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: var(--keiros-accent);
          box-shadow:
            0 0 30px color-mix(in oklab, var(--keiros-accent) 85%, transparent),
            0 0 60px color-mix(in oklab, var(--keiros-accent) 35%, transparent);
        }

        .pin-halo {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 56px;
          height: 56px;
          border: 1px solid color-mix(in oklab, var(--keiros-accent) 45%, transparent);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .accuracy-badge {
          position: absolute;
          top: calc(50% - 42px);
          left: calc(50% + 18px);
          padding: 6px 14px;
          background: color-mix(in oklab, var(--keiros-accent) 12%, transparent);
          border: 1px solid var(--keiros-accent);
          color: var(--keiros-accent);
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
          color: var(--keiros-accent);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.4rem;
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .stat-accuracy {
          display: inline-flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 6px;
          padding: 0;
          color: var(--keiros-accent);
          line-height: 1;
        }

        .stat-accuracy__symbol {
          font-family: 'DM Mono', monospace;
          font-size: 0.84rem;
          letter-spacing: 0.08em;
          opacity: 0.88;
        }

        .stat-accuracy__value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem;
          letter-spacing: 0.05em;
        }

        .stat-accuracy__unit {
          color: rgba(244, 242, 238, 0.82);
          font-family: 'DM Mono', monospace;
          font-size: 0.8rem;
          letter-spacing: 0.14em;
        }

        .stat-label {
          color: var(--color-muted-foreground);
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
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
            padding: 96px 24px 36px;
          }

          .hero-content {
            width: 100%;
          }

          .hero-visual {
            position: relative;
            top: auto;
            left: auto;
            justify-content: center;
            transform: none;
            margin-top: 12px;
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
            font-size: clamp(2.9rem, 12vw, 4rem);
            max-width: 100%;
          }

          .hero-sub {
            font-size: 0.95rem;
          }

          .hero-actions {
            gap: 14px;
          }

          .hero-cta {
            width: 100%;
            padding: 15px 22px;
          }

          .hero-stat {
            min-width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
