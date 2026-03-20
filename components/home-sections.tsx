'use client'

'use client'

import Link from 'next/link'
import { Building2, Check, Code2, MapPin, Package, ShieldAlert, Waypoints } from 'lucide-react'
import { useEffect, type ReactNode } from 'react'

const problemCards = [
  {
    title: 'Emergency Response Delays',
    description:
      "First responders lose critical minutes navigating buildings without precise location data. When seconds count, a street address isn't enough.",
    icon: ShieldAlert,
    urgent: true,
  },
  {
    title: 'Failed & Misrouted Deliveries',
    description:
      'Lost productivity and re-delivery costs keep stacking up because the last 100 meters still have no infrastructure.',
    icon: Package,
  },
  {
    title: 'Complex Premises Are Invisible',
    description:
      "Apartments, warehouses, office parks, and campuses still don't exist with internal precision in today's mapping systems.",
    icon: Building2,
  },
]

const solutionPoints = [
  {
    title: 'Place the Device',
    description:
      'Install a Keiros device at your property to map exact physical position, floor, and elevation against the address instantly.',
  },
  {
    title: 'Navigate with Precision',
    description:
      'Drivers, paramedics, visitors, and residents can navigate to the exact destination instead of stopping at the front gate.',
  },
  {
    title: 'Works with Your Tools',
    description:
      'Keiros layers into existing maps and business software so teams keep their workflows while gaining address-level precision.',
  },
]

const steps = [
  {
    title: 'Receive Your Device',
    description:
      "Your Keiros device ships without upfront hardware cost and is designed to be live in minutes.",
    icon: Package,
  },
  {
    title: 'Place & Register',
    description:
      'The device maps exact coordinates and elevation, then links them directly to the physical address.',
    icon: MapPin,
  },
  {
    title: 'Navigate with the App',
    description:
      'Users open Keiros, enter an address, and get guided to the exact destination with much less guesswork.',
    icon: Waypoints,
  },
  {
    title: 'Embed with the SDK',
    description:
      'Businesses can integrate precision location directly into dispatch, delivery, and logistics platforms.',
    icon: Code2,
  },
]

const sdkFeatures = [
  'Drop-in SDK for iOS, Android, and web',
  'Real-time location resolution API',
  'Elevation and floor data included',
  'Works with your existing map provider',
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    cycle: '/ month - up to 5 devices',
    features: [
      'Up to 5 devices included',
      'Mobile app access',
      '3-foot accuracy plus elevation',
      'Standard support',
      'Cloud-backed location registry',
    ],
  },
  {
    name: 'Professional',
    price: '$199',
    cycle: '/ month - up to 25 devices',
    featured: true,
    features: [
      'Up to 25 devices included',
      'Full SDK access',
      'Real-time location resolution API',
      'Priority support and onboarding',
      'Analytics dashboard',
      'Multi-property management',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cycle: 'tailored to your deployment',
    features: [
      'Unlimited devices',
      'White-label SDK available',
      'Dedicated account management',
      'SLA-backed uptime',
      'Custom integrations',
      'Government and emergency packages',
    ],
  },
]

function SectionHeading({
  tag,
  children,
}: {
  tag: string
  children: ReactNode
}) {
  return (
    <>
      <div className="section-tag">{tag}</div>
      <h2 className="section-headline">{children}</h2>
    </>
  )
}

export default function HomeSections() {
  useEffect(() => {
    const points = document.querySelectorAll('.solution-point')
    const stepCards = document.querySelectorAll('.step')
    const howHeading = document.querySelector('.howitworks-section .section-headline')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -10% 0px' },
    )

    points.forEach((point) => observer.observe(point))
    stepCards.forEach((step) => observer.observe(step))
    if (howHeading) observer.observe(howHeading)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="index-banner-section">
        <div className="banner-inner">
          <div className="banner-frame">
            <img src="/banner-hero.png" alt="Keiros banner" className="banner-image" />
          </div>
        </div>
      </section>

      <section id="problem" className="index-section problem-section">
        <div className="section-tag">The Problem</div>
  <h2 className="section-headline">YOUR ADDRESS<br/>STOPS AT THE <em>FRONT DOOR.</em></h2>

        <div className="problem-grid">
          <div className="problem-statement">
            <p>
              Traditional addresses point to a building. <strong>Not a unit. Not a floor. Not a corridor.</strong>
            </p>
            <p>
              In dense apartment complexes, hospitals, office campuses, and logistics hubs,
              the final stretch is still left to guesswork.
            </p>
            <p>
              For a delivery driver, that means wasted time. For an ambulance crew,
              <strong> it can cost lives.</strong>
            </p>
          </div>

          <div className="problem-cards fade-up">
            {problemCards.map(({ title, description, icon: Icon, urgent }) => (
              <div key={title} className={`problem-card ${urgent ? 'urgent' : ''}`}>
                <Icon className={`problem-icon ${urgent ? 'urgent-icon' : ''}`} />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="index-section-block solution-section">
        <div className="section-inner">
          <div className="section-tag">The Solution</div>
    <h2 className="section-headline">PLACE IT.<br/>MAP IT.<br/><em>FIND IT.</em></h2>


          <div className="solution-layout">
            <div className="solution-visual">
              <div className="building">
                <div className="building-label">RESIDENTIAL COMPLEX A</div>
                {[
                  'FLOOR 6 - ROOFTOP',
                  'FLOOR 5',
                  'FLOOR 4',
                  'FLOOR 3 - UNIT 304',
                  'FLOOR 2',
                  'FLOOR 1 - LOBBY',
                ].map((floor, index) => (
                  <div key={floor} className={`floor ${index === 3 ? 'active' : ''}`}>
                    {floor}
                    {index === 3 ? <span className="floor-pin" /> : null}
                  </div>
                ))}
              </div>
              <div className="accuracy-callout">+/- 3 FT + ELEVATION</div>
            </div>

            <div className="solution-points">
              {solutionPoints.map((point, index) => (
                <div key={point.title} className="solution-point">
                  <div className="point-num">{String(index + 1).padStart(2, '0')}</div>
                  <div className="point-content">
                    <h3>{point.title.toUpperCase()}</h3>
                    <p>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*
        Remaining extra section hidden for now:
        Use Cases
      */}

      <section id="howitworks" className="index-section-block howitworks-section">
        <div className="section-inner">
          <div className="section-tag">How It Works</div>
    <h2 className="section-headline">SIMPLE TO DEPLOY.<br/><em>POWERFUL</em> AT SCALE.</h2>


          <div className="steps">
            {steps.map(({ title, description, icon: Icon }, index) => (
              <div
                key={title}
                className="step"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="step-num">{String(index + 1).padStart(2, '0')}</div>
                <Icon className="step-icon" />
                <h3>{title.toUpperCase()}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="developers" className="index-section developers-section">
        <div className="section-tag">For Developers</div>
  <h2 className="section-headline">BUILT TO<br/><em>INTEGRATE,</em><br/>NOT REPLACE.</h2>


        <div className="dev-layout">
          <div className="dev-text">
            <p>
              Keiros plugs into the tools your team already ships. That means
              precision location can live inside delivery, dispatch, logistics,
              and property workflows without forcing users into a new stack.
            </p>

            <div className="sdk-features">
              {sdkFeatures.map((feature) => (
                <div key={feature} className="sdk-feature">
                  <Check className="sdk-check" />
                  <div>{feature}</div>
                </div>
              ))}
            </div>

            <Link href="#contact" className="btn-primary">
              Request SDK Access
            </Link>
          </div>

          <div className="code-block">
            <div className="code-toolbar">
              <div className="code-dots">
                <span className="code-dot red" />
                <span className="code-dot amber" />
                <span className="code-dot green" />
              </div>
              <div className="code-filename">resolve-location.ts</div>
            </div>
            <pre className="editor-code">
              <code>
                <span className="code-line">
                  <span className="line-no">1</span>
                  <span>
                    <span className="token-keyword">import</span>{' '}
                    <span className="token-punctuation">{'{'}</span>{' '}
                    <span className="token-class">KeirosClient</span>{' '}
                    <span className="token-punctuation">{'}'}</span>{' '}
                    <span className="token-keyword">from</span>{' '}
                    <span className="token-string">'@keiros/sdk'</span>
                  </span>
                </span>
                <span className="code-line">
                  <span className="line-no">2</span>
                  <span />
                </span>
                <span className="code-line">
                  <span className="line-no">3</span>
                  <span>
                    <span className="token-keyword">const</span>{' '}
                    <span className="token-variable">keiros</span>{' '}
                    <span className="token-operator">=</span>{' '}
                    <span className="token-keyword">new</span>{' '}
                    <span className="token-class">KeirosClient</span>
                    <span className="token-punctuation">(</span>
                    <span className="token-punctuation">{'{'}</span>
                  </span>
                </span>
                <span className="code-line">
                  <span className="line-no">4</span>
                  <span>
                    {'  '}
                    <span className="token-property">apiKey</span>
                    <span className="token-punctuation">:</span>{' '}
                    <span className="token-variable">process</span>
                    <span className="token-punctuation">.</span>
                    <span className="token-variable">env</span>
                    <span className="token-punctuation">.</span>
                    <span className="token-constant">KEIROS_API_KEY</span>
                    <span className="token-punctuation">,</span>
                  </span>
                </span>
                <span className="code-line">
                  <span className="line-no">5</span>
                  <span>
                    <span className="token-punctuation">{'}'}</span>
                    <span className="token-punctuation">)</span>
                  </span>
                </span>
                <span className="code-line">
                  <span className="line-no">6</span>
                  <span />
                </span>
                <span className="code-line">
                  <span className="line-no">7</span>
                  <span>
                    <span className="token-keyword">const</span>{' '}
                    <span className="token-variable">location</span>{' '}
                    <span className="token-operator">=</span>{' '}
                    <span className="token-keyword">await</span>{' '}
                    <span className="token-variable">keiros</span>
                    <span className="token-punctuation">.</span>
                    <span className="token-function">resolve</span>
                    <span className="token-punctuation">(</span>
                    <span className="token-punctuation">{'{'}</span>
                  </span>
                </span>
                <span className="code-line">
                  <span className="line-no">8</span>
                  <span>
                    {'  '}
                    <span className="token-property">address</span>
                    <span className="token-punctuation">:</span>{' '}
                    <span className="token-string">'Apt 304, Sunset Towers'</span>
                    <span className="token-punctuation">,</span>
                  </span>
                </span>
                <span className="code-line">
                  <span className="line-no">9</span>
                  <span>
                    <span className="token-punctuation">{'}'}</span>
                    <span className="token-punctuation">)</span>
                  </span>
                </span>
                <span className="code-line">
                  <span className="line-no">10</span>
                  <span />
                </span>
                <span className="code-line">
                  <span className="line-no">11</span>
                  <span>
                    <span className="token-keyword">await</span>{' '}
                    <span className="token-variable">mapProvider</span>
                    <span className="token-punctuation">.</span>
                    <span className="token-function">navigateTo</span>
                    <span className="token-punctuation">(</span>
                    <span className="token-variable">location</span>
                    <span className="token-punctuation">)</span>
                  </span>
                </span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section id="pricing" className="index-section-block pricing-section">
        <div className="pricing-inner">
          <div className="section-tag">Pricing</div>
    <h2 className="section-headline">THE DEVICE IS <em>FREE.</em><br/>PAY ONLY FOR WHAT YOU USE.</h2>


          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                <div className="plan-tag">{plan.featured ? 'Most Popular' : plan.name}</div>
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">{plan.price}</div>
                <div className="plan-cycle">{plan.cycle}</div>
                <ul className="feature-list">
                  {plan.features.map((feature) => (
                    <li key={feature} className="feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className={plan.featured ? 'btn-primary' : 'btn-secondary'}>
                  {plan.name === 'Enterprise' ? 'Talk to Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>

          <div className="device-note">
            All plans include Keiros hardware devices at no additional cost.
          </div>
        </div>
      </section>

      <section id="contact" className="index-section contact-section">
        <div className="section-tag">Get Early Access</div>
    <h2 className="section-headline">BE FIRST.<br/>BE <em>PRECISE.</em></h2>
    
        <p className="contact-sub">
          Keiros is onboarding early access partners across logistics,
          emergency services, property operations, and developer platforms.
        </p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" className="form-input" placeholder="First Name" />
            <input type="text" className="form-input" placeholder="Last Name" />
          </div>
          <input type="email" className="form-input" placeholder="Work Email" />
          <input type="text" className="form-input" placeholder="Company / Organization" />
          <select className="form-input" defaultValue="">
            <option value="" disabled>
              I am a...
            </option>
            <option>Property Manager / Owner</option>
            <option>Logistics / Delivery Platform</option>
            <option>Emergency Services / Government</option>
            <option>Investor / VC</option>
            <option>Software Developer</option>
            <option>Other</option>
          </select>
          <textarea rows={4} className="form-input" placeholder="Tell us about your use case" />
          <button type="submit" className="form-submit">
            Request Early Access
          </button>
        </form>

        <div className="contact-alts">
          <div>
            Investor inquiries: <a href="mailto:invest@keiros.io">invest@keiros.io</a>
          </div>
          <div>
            Partnerships: <a href="mailto:partners@keiros.io">partners@keiros.io</a>
          </div>
          <div>
            Press: <a href="mailto:press@keiros.io">press@keiros.io</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .index-banner-section,
        .index-section,
        .index-section-block {
          color: var(--color-foreground);
          font-family: 'DM Sans', sans-serif;
        }

        .index-banner-section {
          padding: 48px;
          background: var(--color-background);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .banner-inner,
        .index-section,
        .pricing-inner,
        .section-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .banner-frame {
          overflow: hidden;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 40%, transparent 70%);
        }

        .banner-image {
          display: block;
          width: 100%;
          height: auto;
        }

        .index-section {
          padding: 120px 48px;
        }

        .index-section-block {
          padding: 120px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .problem-section,
        .solution-section,
        .howitworks-section,
        .developers-section,
        .pricing-section,
        .contact-section {
          scroll-margin-top: 110px;
        }

        .section-inner,
        .pricing-inner {
          padding: 0 48px;
        }

        .solution-section {
          background: linear-gradient(180deg, var(--color-background) 0%, color-mix(in oklab, var(--color-background) 78%, var(--color-accent) 22%) 100%);
        }

        .howitworks-section {
          background: #0a0c0f;
        }

        .howitworks-section .section-headline {
          opacity: 0.22;
          transform: translateY(28px);
          transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .howitworks-section .section-headline.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .pricing-section {
          background: var(--color-background);
        }

         .section-tag {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .section-tag::before {
    content: '';
    display: inline-block;
    width: 24px; height: 1px;
    background: var(--accent);
  }

        .section-headline {
          margin: 0 0 32px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .section-headline em {
          font-style: normal;
          color: var(--color-accent);
        }

        .problem-grid,
        .solution-layout,
        .dev-layout {
          display: grid;
          gap: 80px;
          margin-top: 64px;
        }

        .problem-grid {
          grid-template-columns: 1fr;
          gap: 36px;
        }

        .dev-layout {
          grid-template-columns: 1fr 1fr;
        }

        .solution-layout {
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 100px;
        }

        .problem-statement {
          color: rgba(244, 242, 238, 0.75);
          font-size: 1.25rem;
          font-weight: 300;
          line-height: 1.75;
        }

        .problem-statement p {
          margin: 0 0 24px;
        }

        .problem-statement strong {
          color: var(--color-foreground);
          font-weight: 500;
        }

        .problem-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .problem-card {
          position: relative;
          min-height: 100%;
          padding: 34px 32px 30px;
          background: transparent;
          border-top: 2px solid rgba(255, 255, 255, 0.16);
          border-right: 1px solid rgba(255, 255, 255, 0.16);
          border-top-right-radius: 50px;
          overflow: hidden;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .problem-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background: none;
        }

        .problem-card:hover {
          transform: translateY(-3px);
          border-top-color: rgba(255, 255, 255, 0.24);
          border-right-color: rgba(255, 255, 255, 0.24);
          box-shadow: none;
        }

        .problem-card.urgent {
          border-top-color: rgba(255, 255, 255, 0.16);
          border-right-color: rgba(255, 255, 255, 0.16);
        }

        .problem-card.urgent:hover {
          border-top-color: rgba(255, 255, 255, 0.24);
          border-right-color: rgba(255, 255, 255, 0.24);
        }

        .problem-icon {
          position: relative;
          z-index: 1;
          margin-bottom: 18px;
          color: color-mix(in oklab, var(--color-accent) 88%, white 12%);
        }

        .problem-icon.urgent-icon {
          color: color-mix(in oklab, var(--color-destructive) 88%, white 12%);
        }

        .problem-card h3 {
          position: relative;
          z-index: 1;
          margin: 0 0 10px;
          color: var(--color-foreground);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          letter-spacing: 0.04em;
        }

        .problem-card p {
          position: relative;
          z-index: 1;
          margin: 0;
          color: color-mix(in oklab, var(--color-foreground) 68%, transparent);
          font-size: 0.98rem;
          line-height: 1.78;
        }

        .solution-visual {
          position: sticky;
          top: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 480px;
          align-self: start;
        }

        .building {
          position: relative;
          width: 220px;
          height: 360px;
          border: 2px solid color-mix(in oklab, var(--color-accent) 20%, transparent);
        }

        .building-label {
          position: absolute;
          top: -32px;
          left: 0;
          right: 0;
          color: var(--color-muted-foreground);
          text-align: center;
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .floor {
          position: absolute;
          left: 0;
          right: 0;
          height: 60px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          border-bottom: 1px solid color-mix(in oklab, var(--color-accent) 15%, transparent);
          color: color-mix(in oklab, var(--color-accent) 40%, transparent);
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
        }

        .floor:nth-child(2) {
          bottom: 300px;
        }

        .floor:nth-child(3) {
          bottom: 240px;
        }

        .floor:nth-child(4) {
          bottom: 180px;
        }

        .floor:nth-child(5) {
          bottom: 120px;
          background: color-mix(in oklab, var(--color-accent) 4%, transparent);
        }

        .floor:nth-child(6) {
          bottom: 60px;
        }

        .floor:nth-child(7) {
          bottom: 0;
        }

        .floor.active {
          color: var(--color-accent);
          background: color-mix(in oklab, var(--color-accent) 8%, transparent);
          border-left: 3px solid var(--color-accent);
        }

        .floor-pin {
          width: 8px;
          height: 8px;
          margin-left: auto;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 0 8px var(--color-accent);
          animation: blink 1.4s ease-in-out infinite;
        }

        .accuracy-callout {
          position: absolute;
          top: 40%;
          right: -60px;
          padding: 10px 16px;
          white-space: nowrap;
          background: var(--color-accent);
          color: var(--color-accent-foreground);
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
        }

        .accuracy-callout::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -8px;
          transform: translateY(-50%);
          border: 8px solid transparent;
          border-right-color: var(--color-accent);
          border-left: none;
        }

        .solution-points {
          display: flex;
          flex-direction: column;
          gap: 34px;
          padding: 12px 0 24px;
        }

        .solution-point {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          min-height: 26vh;
          padding: 18px 0;
          opacity: 0.18;
          transform: translateY(72px);
          transition: opacity 0.85s ease, transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .solution-point.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .point-num {
          min-width: 48px;
          color: color-mix(in oklab, var(--color-accent) 15%, transparent);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3rem;
          line-height: 1;
          transition: color 0.2s;
        }

        .solution-point:hover .point-num {
          color: var(--color-accent);
        }

        .point-content h3,
        .step h3 {
          margin: 0 0 8px;
          color: var(--color-foreground);
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.04em;
        }

        .point-content h3 {
          font-size: 1.5rem;
        }

        .point-content p,
        .step p,
        .dev-text p {
          margin: 0;
          color: var(--color-muted-foreground);
          line-height: 1.65;
        }

        .point-content p {
          font-size: 0.95rem;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          margin-top: 64px;
          position: relative;
        }

        .step {
          position: relative;
          padding: 40px 32px;
          background: #1c1f23;
          overflow: hidden;
          opacity: 0;
          transform: translateY(56px) scale(0.985);
          transition:
            opacity 0.75s ease,
            transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.25s ease;
        }

        .step::before {
          content: '';
          position: absolute;
          inset: 0 0 auto 0;
          height: 2px;
          background: linear-gradient(90deg, var(--color-accent), transparent 78%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .step::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 42%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .step.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .step.visible::before {
          transform: scaleX(1);
        }

        .step:hover {
          background: color-mix(in oklab, #1c1f23 86%, var(--color-accent) 14%);
          transform: translateY(-6px);
        }

        .step:hover::after {
          opacity: 1;
        }

        .step-num {
          margin-bottom: 16px;
          color: color-mix(in oklab, var(--color-accent) 8%, transparent);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          line-height: 1;
        }

        .step-icon {
          position: relative;
          z-index: 1;
          margin-bottom: 16px;
          color: var(--color-accent);
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .step h3 {
          font-size: 1.4rem;
        }

        .step:hover .step-icon {
          transform: translateY(-2px) scale(1.06);
        }

        .step:hover .step-num {
          color: color-mix(in oklab, var(--color-accent) 22%, transparent);
        }

        .step p {
          font-size: 0.88rem;
        }

        .dev-text p {
          margin-bottom: 32px;
          color: rgba(244, 242, 238, 0.7);
          font-size: 1.1rem;
          font-weight: 300;
          line-height: 1.75;
        }

        .sdk-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        .sdk-feature {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px;
          background: #1c1f23;
          border-left: 2px solid transparent;
          transition: border-color 0.2s;
        }

        .sdk-feature:hover {
          border-left-color: var(--color-accent);
        }

        .sdk-check {
          min-width: 20px;
          margin-top: 2px;
          color: var(--color-accent);
        }

        .sdk-feature div {
          color: var(--color-muted-foreground);
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .code-block {
          position: relative;
          overflow: hidden;
          border: 1px solid color-mix(in oklab, var(--color-foreground) 10%, transparent);
          border-radius: 26px;
          background: #0f1117;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 20px 60px rgba(0, 0, 0, 0.25);
          color: #d4d4d4;
          font-family: 'DM Mono', monospace;
          font-size: 0.85rem;
          line-height: 1.9;
        }

        .code-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: #151925;
        }

        .code-dots {
          display: flex;
          gap: 8px;
        }

        .code-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
        }

        .code-dot.red {
          background: #ff5f57;
        }

        .code-dot.amber {
          background: #febc2e;
        }

        .code-dot.green {
          background: #28c840;
        }

        .code-filename {
          color: #8b93a7;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .editor-code {
          margin: 0;
          padding: 22px 0 22px 0;
        }

        .editor-code code {
          display: block;
        }

        .code-line {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 18px;
          padding: 0 22px;
          white-space: pre-wrap;
        }

        .line-no {
          color: #5c6370;
          text-align: right;
          user-select: none;
        }

        .token-keyword {
          color: #c678dd;
        }

        .token-class {
          color: #61afef;
        }

        .token-function {
          color: #dcdcaa;
        }

        .token-variable {
          color: #e5e9f0;
        }

        .token-property {
          color: #9cdcfe;
        }

        .token-string {
          color: #ce9178;
        }

        .token-constant {
          color: #4fc1ff;
        }

        .token-operator,
        .token-punctuation {
          color: #abb2bf;
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

        .pricing-inner {
          text-align: center;
        }

        .pricing-inner .section-tag,
        .contact-section .section-tag {
          justify-content: center;
        }

        .pricing-inner .section-tag::before,
        .contact-section .section-tag::before {
          display: none;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-top: 64px;
          text-align: left;
        }

        .pricing-card {
          padding: 48px 40px;
          background: #1c1f23;
          transition: background 0.2s;
        }

        .pricing-card:hover {
          background: #20252b;
        }

        .pricing-card.featured {
          background: var(--color-accent);
          color: var(--color-accent-foreground);
        }

        .pricing-card.featured * {
          color: var(--color-accent-foreground);
        }

        .plan-tag {
          display: inline-block;
          margin-bottom: 24px;
          padding: 4px 12px;
          background: rgba(255, 255, 255, 0.06);
          color: var(--color-muted-foreground);
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .pricing-card.featured .plan-tag {
          background: rgba(0, 0, 0, 0.15);
        }

        .plan-name {
          margin-bottom: 8px;
          color: var(--color-foreground);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem;
          letter-spacing: 0.04em;
        }

        .plan-price {
          margin-bottom: 4px;
          color: var(--color-accent);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3.5rem;
          line-height: 1;
        }

        .plan-cycle {
          margin-bottom: 32px;
          color: var(--color-muted-foreground);
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 0 0 36px;
          padding: 0;
          list-style: none;
        }

        .feature-item {
          position: relative;
          padding-left: 20px;
          color: var(--color-muted-foreground);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .feature-item::before {
          content: '->';
          position: absolute;
          left: 0;
          color: var(--color-accent);
        }

        .pricing-card.featured .feature-item::before {
          color: var(--color-accent-foreground);
        }

        .device-note {
          margin-top: 40px;
          color: var(--color-muted-foreground);
          font-size: 0.95rem;
        }

        .contact-section {
          text-align: center;
        }

        .contact-sub {
          max-width: 760px;
          margin: 0 auto 52px;
          color: rgba(244, 242, 238, 0.7);
          font-size: 1.08rem;
          font-weight: 300;
          line-height: 1.75;
        }

        .contact-form {
          max-width: 760px;
          margin: 0 auto;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .form-input {
          width: 100%;
          margin-bottom: 18px;
          padding: 18px 20px;
          background: #1c1f23;
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--color-foreground);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          outline: none;
        }

        .form-input::placeholder {
          color: var(--color-muted-foreground);
        }

        .form-input:focus {
          border-color: var(--color-accent);
        }

        .form-submit {
          display: inline-block;
          margin-top: 6px;
          padding: 16px 36px;
          border: none;
          background: var(--color-accent);
          color: var(--color-accent-foreground);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
        }

        .contact-alts {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 28px;
          color: var(--color-muted-foreground);
          font-size: 0.92rem;
        }

        .contact-alts a {
          color: var(--color-foreground);
          text-decoration: none;
        }

        .contact-alts a:hover {
          color: var(--color-accent);
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.2;
          }
        }

        @media (max-width: 1024px) {
          .index-banner-section,
          .index-section,
          .section-inner,
          .pricing-inner {
            padding-left: 24px;
            padding-right: 24px;
          }

          .solution-layout,
          .dev-layout,
          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .solution-visual {
            position: relative;
            top: auto;
          }

          .solution-point {
            min-height: auto;
            opacity: 1;
            transform: none;
          }

          .howitworks-section .section-headline,
          .step {
            opacity: 1;
            transform: none;
          }

          .step::before {
            transform: scaleX(1);
          }

          .problem-cards {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .steps {
            grid-template-columns: 1fr 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .accuracy-callout {
            right: auto;
            left: 50%;
            top: auto;
            bottom: -56px;
            transform: translateX(-50%);
          }

          .accuracy-callout::before {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .index-banner-section,
          .index-section,
          .section-inner,
          .pricing-inner {
            padding-left: 20px;
            padding-right: 20px;
          }

          .section-headline {
            font-size: 48px;
          }

          .steps {
            grid-template-columns: 1fr;
          }

          .contact-alts {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  )
}
