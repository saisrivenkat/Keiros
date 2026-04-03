"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Check,
  Code2,
  MapPin,
  Package,
  ShieldAlert,
  Waypoints,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const problemCards = [
  {
    title: "Emergency Response Delays",
    description:
      "First responders lose critical minutes navigating buildings without precise location data. When seconds count, inaccurate locations turn into critical loss of life.",
    icon: ShieldAlert,
    urgent: true,
  },
  {
    title: "Failed & Misrouted Deliveries",
    description:
      "Lost productivity and re-delivery costs keep stacking up because the last 100 meters still have no infrastructure.",
    icon: Package,
  },
  {
    title: "Complex Premises Are Invisible",
    description:
      "Apartments, warehouses, office parks, and campuses still don't exist with internal precision in today's mapping systems.",
    icon: Building2,
  },
];

const solutionPoints = [
  {
    title: "Place the Device",
    description:
      "Install a Keiros device at your property to map exact physical position, floor, and elevation against the address instantly.",
  },
  {
    title: "Navigate with Precision",
    description:
      "Drivers, paramedics, visitors, and residents can navigate to the exact destination instead of stopping at the front gate.",
  },
  {
    title: "Works with Your Tools",
    description:
      "Keiros layers into existing maps and business software so teams keep their workflows while gaining address-level precision.",
  },
];

const steps = [
  {
    title: "Receive Your Device",
    description:
      "Your Keiros device ships without upfront hardware cost and is designed to be live in minutes.",
    icon: Package,
  },
  {
    title: "Place & Register",
    description:
      "The device maps exact coordinates and elevation, then links them directly to the physical address.",
    icon: MapPin,
  },
  {
    title: "Navigate with the App",
    description:
      "Users open Keiros, enter an address, and get guided to the exact destination with much less guesswork.",
    icon: Waypoints,
  },
];

const sdkFeatures = [
  "Drop-in SDK for iOS, Android, and web",
  "Real-time location resolution API",
  "Elevation and floor data included",
  "Works with your existing map provider",
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    cycle: "/ month - up to 5 devices",
    features: [
      "Up to 5 devices included",
      "Mobile app access",
      "3-foot accuracy plus elevation",
      "Standard support",
      "Cloud-backed location registry",
    ],
  },
  {
    name: "Professional",
    price: "$199",
    cycle: "/ month - up to 25 devices",
    featured: true,
    features: [
      "Up to 25 devices included",
      "Full SDK access",
      "Real-time location resolution API",
      "Priority support and onboarding",
      "Analytics dashboard",
      "Multi-property management",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cycle: "tailored to your deployment",
    features: [
      "Unlimited devices",
      "White-label SDK available",
      "Dedicated account management",
      "SLA-backed uptime",
      "Custom integrations",
      "Government and emergency packages",
    ],
  },
];

function SectionHeading({
  tag,
  children,
}: {
  tag: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="section-tag">{tag}</div>
      <h2 className="section-headline">{children}</h2>
    </>
  );
}

export default function HomeSections() {
  const problemIntroRef = useRef<HTMLDivElement | null>(null);
  const howItWorksRef = useRef<HTMLElement | null>(null);
  const [problemIntroProgress, setProblemIntroProgress] = useState(0);
  const [howItWorksProgress, setHowItWorksProgress] = useState(0);
  const [desktopHowItWorks, setDesktopHowItWorks] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const [caretVisible, setCaretVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const howItWorksTargetRef = useRef(0);
  const howItWorksCurrentRef = useRef(0);
  const howItWorksRafRef = useRef<number | null>(null);
  const HEADLINE_TEXT = "Traditional addresses often miss exact locations.";

  useEffect(() => {
    const points = document.querySelectorAll(".solution-point");
    const howHeading = document.querySelector(
      ".howitworks-section .section-headline",
    );
    const problemCardsEls = document.querySelectorAll(".problem-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" },
    );

    points.forEach((point) => observer.observe(point));
    problemCardsEls.forEach((card) => observer.observe(card));
    if (howHeading) observer.observe(howHeading);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (vid.paused) {
            vid.currentTime = 0;
            const playPromise = vid.play();
            if (playPromise && typeof playPromise.catch === "function") {
              playPromise.catch(() => {});
            }
          }
        } else {
          if (!vid.paused) vid.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.35,
    });
    observer.observe(vid);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateDesktopHowItWorks = () => {
      setDesktopHowItWorks(window.innerWidth > 1024);
    };

    updateDesktopHowItWorks();
    window.addEventListener("resize", updateDesktopHowItWorks);

    return () => {
      window.removeEventListener("resize", updateDesktopHowItWorks);
    };
  }, []);

  useEffect(() => {
    let timer: number | null = null;
    let doneTimeout: number | null = null;

    const startTyping = () => {
      if (timer) window.clearInterval(timer);
      if (doneTimeout) window.clearTimeout(doneTimeout);
      setTypedCount(0);
      setCaretVisible(true);
      timer = window.setInterval(() => {
        setTypedCount((prev) => {
          if (prev >= HEADLINE_TEXT.length) {
            if (timer) window.clearInterval(timer);
            timer = null;
            doneTimeout = window.setTimeout(() => setCaretVisible(false), 600);
            return prev;
          }
          return prev + 1;
        });
      }, 90);
    };

    const refEl = problemIntroRef.current;
    if (!refEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTyping();
          }
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(refEl);

    return () => {
      if (timer) window.clearInterval(timer);
      if (doneTimeout) window.clearTimeout(doneTimeout);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const updateProblemIntroProgress = () => {
      if (!problemIntroRef.current) return;

      const rect = problemIntroRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.92;
      const end = -rect.height * 0.2;
      const total = start - end || 1;
      const raw = (start - rect.top) / total;
      const next = Math.min(Math.max(raw, 0), 1);

      setProblemIntroProgress(next);
    };

    updateProblemIntroProgress();
    window.addEventListener("scroll", updateProblemIntroProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateProblemIntroProgress);

    return () => {
      window.removeEventListener("scroll", updateProblemIntroProgress);
      window.removeEventListener("resize", updateProblemIntroProgress);
    };
  }, []);

  useEffect(() => {
    const updateHowItWorksProgress = () => {
      if (!howItWorksRef.current) return;

      const rect = howItWorksRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = Math.max(rect.height - viewportHeight, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
      howItWorksTargetRef.current = scrolled / totalScrollable;
    };

    const animateHowItWorks = () => {
      const current = howItWorksCurrentRef.current;
      const target = howItWorksTargetRef.current;
      const next = current + (target - current) * 0.12;

      howItWorksCurrentRef.current = next;
      setHowItWorksProgress(next);
      howItWorksRafRef.current = requestAnimationFrame(animateHowItWorks);
    };

    updateHowItWorksProgress();
    window.addEventListener("scroll", updateHowItWorksProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateHowItWorksProgress);
    howItWorksRafRef.current = requestAnimationFrame(animateHowItWorks);

    return () => {
      window.removeEventListener("scroll", updateHowItWorksProgress);
      window.removeEventListener("resize", updateHowItWorksProgress);
      if (howItWorksRafRef.current)
        cancelAnimationFrame(howItWorksRafRef.current);
    };
  }, []);

  const activeStepFloat = howItWorksProgress * (steps.length - 1);
  const activeStepIndex = Math.round(activeStepFloat);
  /* ── Problem section cinematic animation values ── */
  const p = problemIntroProgress;
  const problemReveal = Math.min(p * 2.8, 1);

  // Image: dramatic 3D perspective zoom-out + tilt correction
  const imgScale = 1.12 - p * 0.14;
  const imgRotateY = 7 - p * 7;
  const imgRotateX = 4 - p * 4;
  const imgTranslateY = 50 - p * 68;
  const imgInnerZoom = 1.28 - p * 0.24;
  const imgBrightness = 1;
  const glowOpacity = p * 0.36;
  const overlayActive = Math.min(Math.max((p - 0.08) / 0.3, 0), 1);
  const scanLineY = 12 + 76 * overlayActive;

  // Text: staggered reveals
  const tagSlide = -30 + Math.min(p * 52, 12 + 30);
  const tagOpacity = Math.min(Math.max((p - 0.06) / 0.2, 0), 1);
  const headlineReveal = Math.min(Math.max((p - 0.1) / 0.4, 0), 1);
  const stmt1 = Math.min(Math.max((p - 0.25) / 0.3, 0), 1);
  const stmt2 = Math.min(Math.max((p - 0.35) / 0.3, 0), 1);
  const stmt3 = Math.min(Math.max((p - 0.45) / 0.3, 0), 1);
  const copyTranslateY = 44 - p * 60;

  return (
    <>
      {/* <section className="index-banner-section">
        <div className="banner-inner">
          <div className="banner-frame">
            <img src="/banner-hero.png" alt="Keiros banner" className="banner-image" />
          </div>
        </div>
      </section> */}

      <section id="problem" className="index-section problem-section">
        <div ref={problemIntroRef} className="problem-intro">
          <div
            className="problem-image-wrap"
            style={{
              opacity: problemReveal,
              transform: `perspective(1400px) translate3d(0, ${imgTranslateY}px, 0) rotateY(${imgRotateY}deg) rotateX(${imgRotateX}deg) scale(${imgScale})`,
            }}
          >
            <div className="problem-image-frame">
              <Image
                src="/building.jpeg"
                alt="Modern multi-unit building exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="problem-image"
                quality={90}
                style={{
                  transform: `scale(${imgInnerZoom})`,
                }}
              />
            </div>
          </div>

          <div
            className="problem-copy"
            style={{
              opacity: problemReveal,
              transform: `translate3d(0, ${copyTranslateY}px, 0) scale(${0.985 + problemIntroProgress * 0.015})`,
            }}
          >
            <div
              className="section-tag problem-tag"
              style={{
                opacity: tagOpacity,
                transform: `translateY(${tagSlide}px)`,
              }}
            >
              The Problem
            </div>
            <h2
              className="section-headline problem-headline"
            >
              TRADITIONAL ADDRESSES OFTEN MISS{" "}
              <em>EXACT LOCATIONS.</em>
            </h2>

            <div
              className="problem-statement animate"
              aria-live="polite"
            >
              <p style={{ opacity: stmt1 }}>
                The last mile or feet of locating the destination often becomes{" "}
                <strong>guess work.</strong>
              </p>
              <p style={{ opacity: stmt2 }}>
                This problem is exacerbated in dense apartment complexes,
                hospitals, office campuses, and logistics hubs.
              </p>
              <p style={{ opacity: stmt3 }}>
                For a delivery driver, that means wasted time. For an ambulance
                crew,
                <strong> it can cost lives.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="problem-grid">
          <div className="problem-cards fade-up">
            {problemCards.map(({ title, description, icon: Icon, urgent }) => (
              <div
                key={title}
                className={`problem-card ${urgent ? "urgent" : ""}`}
              >
                <Icon
                  className={`problem-icon ${urgent ? "urgent-icon" : ""}`}
                />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="index-section video-break" aria-label="Keiros in action">
        <div className="video-shell">
          <div className="video-frame">
            <video
              ref={videoRef}
              className="hero-video"
              src="/video.mp4"
              muted
              loop
              playsInline
              poster="/banner-hero.png"
            />
            <span className="video-sheen" aria-hidden="true" />
            <span className="video-grid" aria-hidden="true" />
            <div className="video-hud" aria-hidden="true">
              <span className="hud-dot" />
              <span className="hud-pill">±3 ft + elevation</span>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="index-section-block solution-section">
        <div className="section-inner">
           <div className="section-tag">The Solution</div>
    {/*<h2 className="section-headline">PLACE IT.<br/>MAP IT.<br/><em>FIND IT.</em></h2> */}
    <div className="solution-header">
            <h2 className="section-headline">
              PLACE IT.
              <br />
              MAP IT.
              <br />
              <em>FIND IT.</em>
            </h2>
            <div className="solution-banner">
              <Image
                src="/banner-hero.png"
                alt="Keiros precision mapping"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="solution-banner-img"
                priority
              />
              <div className="banner-glow" aria-hidden="true" />
            </div>
          </div>


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

      <section
        id="howitworks"
        ref={howItWorksRef}
        className="index-section-block howitworks-section"
      >
        <div className="section-inner">
          <div className="section-tag">How It Works</div>
          <h2 className="section-headline">
            SIMPLE TO DEPLOY.
            <br />
            <em>POWERFUL</em> AT SCALE.
          </h2>

          <div className="steps-viewport">
            <div
              className="steps-track"
              style={
                desktopHowItWorks
                  ? ({
                      transform: `translate3d(calc(-${activeStepFloat} * (min(78vw, 880px) + 28px)), 0, 0)`,
                    } as CSSProperties)
                  : undefined
              }
            >
              {steps.map(({ title, description, icon: Icon }, index) => (
                <article
                  key={title}
                  className={`step ${activeStepIndex === index ? "active-step" : ""}`}
                  style={(() => {
                    if (!desktopHowItWorks) return {} as CSSProperties;

                    const distance = Math.abs(index - activeStepFloat);

                    return {
                      opacity: Math.max(0.42, 1 - distance * 0.22),
                      transform: `translateY(${Math.min(distance * 10, 14)}px) scale(${1 - Math.min(distance * 0.04, 0.08)})`,
                    } as CSSProperties;
                  })()}
                >
                  <div className="step-topline">
                    <span className="step-chip">
                      STEP {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="step-seq">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(steps.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="step-num">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="step-icon-wrap">
                    <Icon className="step-icon" />
                  </div>
                  <div className="step-body">
                    <h3>{title.toUpperCase()}</h3>
                    <p>{description}</p>
                  </div>
                  <div className="step-footer">
                    <span className="step-rail" />
                    <span className="step-footnote">
                      Keiros deployment flow
                    </span>
                  </div>
                </article>
              ))}
            </div>
            <div className="steps-dots" aria-hidden="true">
              {steps.map((step, index) => (
                <span
                  key={step.title}
                  className={`steps-dot ${activeStepIndex === index ? "active-dot" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="developers" className="index-section developers-section">
        <div className="section-tag">For Commercial Use</div>
        <h2 className="section-headline">
          BUILT TO
          <br />
          <em>INTEGRATE,</em>
          <br />
          NOT REPLACE.
        </h2>

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
                    <span className="token-keyword">import</span>{" "}
                    <span className="token-punctuation">{"{"}</span>{" "}
                    <span className="token-class">KeirosClient</span>{" "}
                    <span className="token-punctuation">{"}"}</span>{" "}
                    <span className="token-keyword">from</span>{" "}
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
                    <span className="token-keyword">const</span>{" "}
                    <span className="token-variable">keiros</span>{" "}
                    <span className="token-operator">=</span>{" "}
                    <span className="token-keyword">new</span>{" "}
                    <span className="token-class">KeirosClient</span>
                    <span className="token-punctuation">(</span>
                    <span className="token-punctuation">{"{"}</span>
                  </span>
                </span>
                <span className="code-line">
                  <span className="line-no">4</span>
                  <span>
                    {"  "}
                    <span className="token-property">apiKey</span>
                    <span className="token-punctuation">:</span>{" "}
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
                    <span className="token-punctuation">{"}"}</span>
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
                    <span className="token-keyword">const</span>{" "}
                    <span className="token-variable">location</span>{" "}
                    <span className="token-operator">=</span>{" "}
                    <span className="token-keyword">await</span>{" "}
                    <span className="token-variable">keiros</span>
                    <span className="token-punctuation">.</span>
                    <span className="token-function">resolve</span>
                    <span className="token-punctuation">(</span>
                    <span className="token-punctuation">{"{"}</span>
                  </span>
                </span>
                <span className="code-line">
                  <span className="line-no">8</span>
                  <span>
                    {"  "}
                    <span className="token-property">address</span>
                    <span className="token-punctuation">:</span>{" "}
                    <span className="token-string">
                      'Apt 304, Sunset Towers'
                    </span>
                    <span className="token-punctuation">,</span>
                  </span>
                </span>
                <span className="code-line">
                  <span className="line-no">9</span>
                  <span>
                    <span className="token-punctuation">{"}"}</span>
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
                    <span className="token-keyword">await</span>{" "}
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

      {/* Pricing section hidden for now
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
      */}

      <section id="contact" className="index-section contact-section">
        <div className="contact-inner">
          <div className="section-tag">Get Early Access</div>
          <h2 className="section-headline">
            BE FIRST.
            <br />
            BE <em>PRECISE.</em>
          </h2>

          <p className="contact-sub">
            Keiros is onboarding early access partners across logistics,
            emergency services, property operations, and developer platforms.
          </p>

          <form className="contact-form">
            <div className="form-row">
              <input
                type="text"
                className="form-input"
                placeholder="First Name"
              />
              <input
                type="text"
                className="form-input"
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              className="form-input"
              placeholder="Work Email"
            />
            <input
              type="text"
              className="form-input"
              placeholder="Company / Organization"
            />
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
            <textarea
              rows={4}
              className="form-input"
              placeholder="Tell us about your use case"
            />
            <button type="submit" className="form-submit">
              Request Early Access
            </button>
          </form>

          <div className="contact-alts">
            <div>
              Investor inquiries:{" "}
              <a href="mailto:invest@keiros.ai">invest@keiros.ai</a>
            </div>
            <div>
              Sales: <a href="mailto:sales@keiros.ai">sales@keiros.ai</a>
            </div>
            <div>
              Partners:{" "}
              <a href="mailto:partners@keiros.ai">partners@keiros.ai</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .index-banner-section,
        .index-section,
        .index-section-block {
          --keiros-accent: #5bc9f0;
          --keiros-accent-foreground: #050607;
          color: var(--color-foreground);
          font-family: "DM Sans", sans-serif;
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

        .developers-section {
          width: 100vw;
          max-width: none;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
        }

        .contact-section {
          width: 100vw;
          max-width: none;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
        }

        .banner-frame {
          overflow: hidden;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.14),
            rgba(255, 255, 255, 0.03) 40%,
            transparent 70%
          );
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
          background: linear-gradient(
            180deg,
            var(--color-background) 0%,
            color-mix(
                in oklab,
                var(--color-background) 78%,
                var(--keiros-accent) 22%
              )
              100%
          );
        }

        .howitworks-section {
          background: #0a0c0f;
          min-height: 340vh;
        }

        .howitworks-section .section-inner {
          position: sticky;
          top: 0;
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          justify-content: center;
        }

        .developers-section {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background: #000;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .developers-section::before {
          content: "";
          position: absolute;
          top: -224px;
          right: -112px;
          width: 1080px;
          height: 400px;
          border-radius: 9999px;
          pointer-events: none;
          background: linear-gradient(to right, #5bc9f0 0%, #053949 100%);
          opacity: 1;
          filter: saturate(1.45) brightness(1.12) blur(64px);
        }

        .developers-section::after {
          content: "";
          position: absolute;
          top: -176px;
          right: 0;
          width: 860px;
          height: 360px;
          border-radius: 9999px;
          pointer-events: none;
          background: linear-gradient(to right, #5bc9f0 0%, #053949 100%);
          opacity: 0.92;
          mix-blend-mode: screen;
          filter: blur(48px);
        }

        .developers-section .section-tag,
        .developers-section .section-headline,
        .developers-section .dev-layout {
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
        }

        .developers-section .section-tag,
        .developers-section .section-headline {
          position: relative;
          z-index: 2;
          padding-left: 48px;
          padding-right: 48px;
        }

        .howitworks-section .section-headline {
          opacity: 0.22;
          transform: translateY(28px);
          transition:
            opacity 0.9s ease,
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
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
          content: "";
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--accent);
        }

        .section-headline {
          margin: 0 0 32px;
          font-family: "Bebas Neue", sans-serif;
          font-size: clamp(3.5rem, 6vw, 5.25rem);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: 0.035em;
          text-wrap: balance;
        }

        .section-headline em {
          font-style: normal;
          color: var(--keiros-accent);
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

        .problem-intro {
          display: grid;
          grid-template-columns: minmax(300px, 0.95fr) minmax(0, 1.05fr);
          gap: 48px;
          align-items: start;
          margin-top: 12px;
        }

        .problem-copy {
          display: flex;
          flex-direction: column;
          will-change: transform, opacity;
          transition:
            transform 0.22s ease-out,
            opacity 0.22s ease-out;
          gap: 10px;
        }

        .problem-tag {
          will-change: transform, opacity;
        }

        .problem-headline {
          will-change: clip-path, opacity;
          transition: clip-path 0.38s ease-out;
          overflow: hidden;
        }

        .typewriter-live {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: pre-wrap;
          min-height: 1.1em;
        }

        .typewriter-text {
          display: inline;
        }

        .typewriter-accent {
          color: var(--keiros-accent);
        }

        .typewriter-live .caret {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: var(--keiros-accent);
          animation: caret 0.8s step-end infinite;
        }

        .dev-layout {
          grid-template-columns: 1fr 1fr;
          position: relative;
          z-index: 2;
        }

        .solution-layout {
          grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
          align-items: start;
          gap: 80px;
        }

        .solution-header {
          display: grid;
          grid-template-columns: 1fr minmax(320px, 520px);
          gap: 48px;
          align-items: center;
          margin-bottom: 36px;
        }

        .solution-banner {
          position: relative;
          width: 100%;
          height: clamp(260px, 40vw, 460px);
          border-radius: 32px;
          overflow: hidden;
          isolation: isolate;
        }

        .solution-banner-img {
          object-fit: cover;
        }

        .banner-glow {
          position: absolute;
          inset: auto auto 8% 8%;
          width: 52%;
          height: 34%;
          filter: blur(38px);
          opacity: 0.55;
          pointer-events: none;
        }

        .problem-statement {
          color: rgba(244, 242, 238, 0.75);
          font-size: 1.25rem;
          font-weight: 300;
          line-height: 1.75;
          padding-top: 10px;
          display: grid;
          gap: 12px;
        }

        .problem-statement p {
          margin: 0;
          opacity: 0;
          transform: translateY(24px);
          filter: blur(6px);
        }

        .problem-statement p:last-child {
          margin-bottom: 0;
        }

        .problem-statement strong {
          color: var(--color-foreground);
          font-weight: 500;
        }

        .problem-statement.animate p:nth-child(1) {
          animation: bubbleUp 0.55s 0.08s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .problem-statement.animate p:nth-child(2) {
          animation: bubbleUp 0.58s 0.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .problem-statement.animate p:nth-child(3) {
          animation: bubbleUp 0.62s 0.32s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .problem-image-wrap {
          display: flex;
          justify-content: flex-start;
          will-change: transform, opacity;
          transition:
            transform 0.22s ease-out,
            opacity 0.22s ease-out;
        }

        .problem-image-frame {
          position: relative;
          width: 100%;
          max-width: 460px;
          aspect-ratio: 4 / 4.8;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-top-right-radius: 80px;
          border-bottom-left-radius: 80px;
          background: rgba(255, 255, 255, 0.02);
          box-shadow:
            0 22px 60px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          isolation: isolate;
          backdrop-filter: blur(2px);
          overflow: clip;
        }

        .problem-image-glow {
          position: absolute;
          inset: auto auto -14% -10%;
          width: 58%;
          height: 36%;
          border-radius: 999px;
          background: color-mix(
            in oklab,
            var(--keiros-accent) 34%,
            transparent
          );
          filter: blur(38px);
          pointer-events: none;
          z-index: 1;
          transition: opacity 0.22s ease-out;
        }

        .problem-image-scan {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 22%;
          background: linear-gradient(
            180deg,
            rgba(91, 201, 240, 0) 0%,
            rgba(91, 201, 240, 0.18) 48%,
            rgba(91, 201, 240, 0) 100%
          );
          mix-blend-mode: screen;
          filter: blur(2px);
          pointer-events: none;
          z-index: 2;
          transition:
            transform 0.28s ease-out,
            opacity 0.28s ease-out;
        }

        .problem-image-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 24px 24px;
          mix-blend-mode: soft-light;
          opacity: 0.28;
          pointer-events: none;
          z-index: 1;
        }

        .problem-image-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(8, 10, 12, 0.02) 0%,
            rgba(8, 10, 12, 0.28) 100%
          );
          pointer-events: none;
        }

        .problem-image {
          object-fit: cover;
          transform: scale(1.04);
          transition:
            transform 0.26s ease-out,
            filter 0.26s ease-out;
          will-change: transform, filter;
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
          transition:
            transform 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            box-shadow 0.35s ease,
            opacity 0.4s ease;
          transform: translate3d(0, 38px, 0) rotateX(10deg);
          opacity: 0;
          will-change: transform, opacity;
        }

        .problem-card::before {
          content: "";
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

        .problem-card.visible {
          opacity: 1;
          transform: translate3d(0, 0, 0) rotateX(0deg);
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
          color: color-mix(in oklab, var(--keiros-accent) 88%, white 12%);
        }

        .problem-icon.urgent-icon {
          color: color-mix(in oklab, var(--color-destructive) 88%, white 12%);
        }

        .problem-card h3 {
          position: relative;
          z-index: 1;
          margin: 0 0 10px;
          color: var(--color-foreground);
          font-family: "Bebas Neue", sans-serif;
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

        .video-break {
          padding: 0;
          background: #000;
          border-block: 1px solid rgba(255, 255, 255, 0.06);
        }

        .video-shell {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 32px 48px 64px;
        }

        .video-frame {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow:
            0 24px 60px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          background: radial-gradient(
              circle at 20% 20%,
              color-mix(in oklab, var(--keiros-accent) 10%, transparent),
              transparent 40%
            ),
            #06080c;
          isolation: isolate;
          animation: videoPulse 12s ease-in-out infinite alternate;
        }

        .hero-video {
          width: 100%;
          height: clamp(260px, 58vw, 620px);
          object-fit: cover;
          display: block;
          transform-origin: center;
          animation: videoDrift 18s ease-in-out infinite alternate;
        }

        .video-sheen {
          position: absolute;
          inset: -20%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.12) 18%,
            rgba(255, 255, 255, 0.02) 28%,
            transparent 44%
          );
          mix-blend-mode: screen;
          animation: sheen 6s linear infinite;
          pointer-events: none;
          z-index: 2;
        }

        .video-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 30px 30px;
          mix-blend-mode: soft-light;
          opacity: 0.14;
          pointer-events: none;
          z-index: 1;
        }

        .video-hud {
          position: absolute;
          top: 18px;
          right: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(0, 0, 0, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          backdrop-filter: blur(6px);
          z-index: 3;
        }

        .hud-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--keiros-accent);
          box-shadow: 0 0 12px var(--keiros-accent);
          animation: pulse 1.8s ease-in-out infinite;
        }

        .hud-pill {
          font-family: "DM Mono", monospace;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(244, 242, 238, 0.9);
        }

        .video-overlay {
          position: absolute;
          left: 64px;
          bottom: 64px;
          padding: 14px 18px;
          background: rgba(0, 0, 0, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          backdrop-filter: blur(8px);
          max-width: min(540px, 80vw);
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
          border: 2px solid color-mix(in oklab, var(--keiros-accent) 20%, transparent);
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
          border-bottom: 1px solid color-mix(in oklab, var(--keiros-accent) 15%, transparent);
          color: color-mix(in oklab, var(--keiros-accent) 40%, transparent);
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
          background: color-mix(in oklab, var(--keiros-accent) 4%, transparent);
        }

        .floor:nth-child(6) {
          bottom: 60px;
        }

        .floor:nth-child(7) {
          bottom: 0;
        }

        .floor.active {
          color: var(--keiros-accent);
          background: color-mix(in oklab, var(--keiros-accent) 8%, transparent);
          border-left: 3px solid var(--keiros-accent);
        }

        .floor-pin {
          width: 8px;
          height: 8px;
          margin-left: auto;
          border-radius: 50%;
          background: var(--keiros-accent);
          box-shadow: 0 0 8px var(--keiros-accent);
          animation: blink 1.4s ease-in-out infinite;
        }

        .accuracy-callout {
          position: absolute;
          top: 40%;
          right: -60px;
          padding: 10px 16px;
          white-space: nowrap;
          background: var(--keiros-accent);
          color: var(--keiros-accent-foreground);
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
          border-right-color: var(--keiros-accent);
          border-left: none;
        }

        .video-tag {
          display: inline-block;
          font-family: "DM Mono", monospace;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--keiros-accent);
          margin-bottom: 6px;
        }

        .video-caption {
          margin: 0;
          color: rgba(244, 242, 238, 0.86);
          font-size: 1rem;
          line-height: 1.6;
        }

        @keyframes sheen {
          0% {
            transform: translateX(-40%);
          }
          100% {
            transform: translateX(40%);
          }
        }

        @keyframes videoPulse {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(-6px) scale(1.01);
          }
        }

        @keyframes videoDrift {
          0% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1.06);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.18);
            opacity: 0.6;
          }
        }

        .solution-header {
          display: grid;
          grid-template-columns: 1fr minmax(320px, 520px);
          gap: 48px;
          align-items: center;
          margin-bottom: 32px;
        }

        .solution-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: clamp(260px, 40vw, 520px);
        }

        .solution-banner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 32px;
          overflow: hidden;
          isolation: isolate;
        }

        .solution-banner-img {
          object-fit: cover;
        }

        .banner-glow {
          position: absolute;
          inset: auto auto 8% 8%;
          width: 52%;
          height: 34%;
          border-radius: 999px;
          background: color-mix(in oklab, var(--keiros-accent) 30%, transparent);
          filter: blur(38px);
          opacity: 0.55;
          pointer-events: none;
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
          transition:
            opacity 0.85s ease,
            transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .solution-point.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .point-num {
          min-width: 48px;
          color: color-mix(in oklab, var(--keiros-accent) 15%, transparent);
          font-family: "Bebas Neue", sans-serif;
          font-size: 3rem;
          line-height: 1;
          transition: color 0.2s;
        }

        .solution-point:hover .point-num {
          color: var(--keiros-accent);
        }

        .point-content h3,
        .step h3 {
          margin: 0 0 8px;
          color: var(--color-foreground);
          font-family: "Bebas Neue", sans-serif;
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

        .steps-viewport {
          position: relative;
          margin-top: 64px;
          min-height: 560px;
          overflow: hidden;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
        }

        .steps-track {
          display: flex;
          align-items: stretch;
          gap: 28px;
          padding-left: calc((100vw - min(78vw, 880px)) / 2);
          padding-right: calc((100vw - min(78vw, 880px)) / 2);
          will-change: transform;
          transition: transform 0.18s linear;
        }

        .step {
          position: relative;
          flex: 0 0 min(78vw, 880px);
          min-height: 500px;
          padding: 34px 38px 38px;
          background:
            radial-gradient(
              circle at top right,
              color-mix(in oklab, var(--keiros-accent) 18%, transparent),
              transparent 34%
            ),
            linear-gradient(180deg, rgba(18, 25, 34, 0.98), rgba(8, 12, 17, 1));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 34px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 28px 80px rgba(0, 0, 0, 0.32);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform-origin: center center;
          transition:
            opacity 0.35s ease,
            transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
          will-change: transform, opacity;
        }

        .step::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.04), transparent 38%),
            radial-gradient(
              circle at bottom left,
              color-mix(in oklab, var(--keiros-accent) 10%, transparent),
              transparent 32%
            );
          pointer-events: none;
        }

        .step::after {
          content: "";
          position: absolute;
          inset: auto 0 0 0;
          height: 4px;
          background: linear-gradient(
            90deg,
            var(--keiros-accent),
            transparent 70%
          );
          opacity: 0.4;
          pointer-events: none;
        }

        .step.active-step {
          background:
            radial-gradient(
              circle at top right,
              color-mix(in oklab, var(--keiros-accent) 22%, transparent),
              transparent 34%
            ),
            linear-gradient(180deg, rgba(22, 32, 42, 1), rgba(10, 14, 19, 1));
          border-color: color-mix(
            in oklab,
            var(--keiros-accent) 24%,
            rgba(255, 255, 255, 0.12)
          );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 34px 90px rgba(0, 0, 0, 0.38);
        }

        .step.active-step::after {
          opacity: 1;
        }

        .step-topline {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .step-chip,
        .step-seq,
        .step-footnote {
          font-family: "DM Mono", monospace;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .step-chip {
          padding: 10px 14px;
          border: 1px solid
            color-mix(
              in oklab,
              var(--keiros-accent) 18%,
              rgba(255, 255, 255, 0.08)
            );
          border-radius: 999px;
          color: var(--keiros-accent);
          background: color-mix(in oklab, var(--keiros-accent) 6%, transparent);
        }

        .step-seq {
          color: rgba(255, 255, 255, 0.42);
        }

        .step-num {
          position: absolute;
          top: 88px;
          right: 34px;
          color: color-mix(in oklab, var(--keiros-accent) 12%, transparent);
          font-family: "Bebas Neue", sans-serif;
          font-size: clamp(5.5rem, 10vw, 8rem);
          line-height: 0.85;
          letter-spacing: 0.04em;
        }

        .step-icon-wrap {
          position: relative;
          z-index: 1;
          display: grid;
          width: 76px;
          height: 76px;
          place-items: center;
          margin-bottom: 26px;
          border: 1px solid
            color-mix(
              in oklab,
              var(--keiros-accent) 22%,
              rgba(255, 255, 255, 0.1)
            );
          border-radius: 24px;
          background: linear-gradient(
            180deg,
            rgba(10, 17, 24, 0.96),
            rgba(5, 9, 13, 0.96)
          );
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .step-icon {
          position: relative;
          z-index: 1;
          color: var(--keiros-accent);
          transition:
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            color 0.3s ease;
        }

        .step h3 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          line-height: 0.95;
          max-width: 70%;
          margin-bottom: 14px;
        }

        .step.active-step .step-icon {
          transform: translateY(-2px) scale(1.08);
        }

        .step.active-step .step-num {
          color: color-mix(in oklab, var(--keiros-accent) 20%, transparent);
        }

        .step p {
          max-width: 58ch;
          font-size: 1rem;
          line-height: 1.75;
        }

        .step-body {
          position: relative;
          z-index: 1;
          padding-top: 18px;
          padding-bottom: 28px;
        }

        .step-footer {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .step-rail {
          display: block;
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            var(--keiros-accent),
            rgba(255, 255, 255, 0.08)
          );
        }

        .steps-dots {
          position: absolute;
          left: 50%;
          bottom: 18px;
          z-index: 12;
          display: flex;
          gap: 10px;
          transform: translateX(-50%);
        }

        .steps-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.18);
          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .steps-dot.active-dot {
          background: var(--keiros-accent);
          transform: scale(1.3);
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
          background: linear-gradient(
            180deg,
            rgba(8, 13, 18, 0.86),
            rgba(5, 9, 13, 0.92)
          );
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-left: 2px solid transparent;
          border-radius: 22px;
          backdrop-filter: blur(10px);
          transition:
            border-color 0.2s,
            transform 0.2s,
            background 0.2s;
        }

        .sdk-feature:hover {
          border-left-color: var(--keiros-accent);
          transform: translateY(-2px);
          background: linear-gradient(
            180deg,
            rgba(10, 18, 24, 0.94),
            rgba(6, 10, 14, 0.98)
          );
        }

        .sdk-check {
          min-width: 20px;
          margin-top: 2px;
          color: var(--keiros-accent);
        }

        .sdk-feature div {
          color: var(--color-muted-foreground);
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .code-block {
          position: relative;
          overflow: hidden;
          border: 1px solid
            color-mix(
              in oklab,
              var(--keiros-accent) 18%,
              rgba(255, 255, 255, 0.1)
            );
          border-radius: 26px;
          background: linear-gradient(
            180deg,
            rgba(10, 15, 21, 0.98),
            rgba(7, 10, 15, 1)
          );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 24px 80px rgba(0, 0, 0, 0.28);
          color: #d4d4d4;
          font-family: "DM Mono", monospace;
          font-size: 0.85rem;
          line-height: 1.9;
        }

        .code-block::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(
            circle at top left,
            color-mix(in oklab, var(--keiros-accent) 12%, transparent),
            transparent 34%
          );
        }

        .code-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(18, 24, 34, 0.92);
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
          transition:
            background 0.2s,
            border-color 0.2s,
            transform 0.2s;
        }

        .btn-primary {
          background: var(--keiros-accent);
          color: var(--keiros-accent-foreground);
          font-weight: 600;
        }

        .btn-primary:hover {
          background: color-mix(in oklab, var(--keiros-accent) 88%, white);
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
          background: var(--keiros-accent);
          color: var(--keiros-accent-foreground);
        }

        .pricing-card.featured * {
          color: var(--keiros-accent-foreground);
        }

        .plan-tag {
          display: inline-block;
          margin-bottom: 24px;
          padding: 4px 12px;
          background: rgba(255, 255, 255, 0.06);
          color: var(--color-muted-foreground);
          font-family: "DM Mono", monospace;
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
          font-family: "Bebas Neue", sans-serif;
          font-size: 2.2rem;
          letter-spacing: 0.04em;
        }

        .plan-price {
          margin-bottom: 4px;
          color: var(--keiros-accent);
          font-family: "Bebas Neue", sans-serif;
          font-size: 3.5rem;
          line-height: 1;
        }

        .plan-cycle {
          margin-bottom: 32px;
          color: var(--color-muted-foreground);
          font-family: "DM Mono", monospace;
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
          content: "->";
          position: absolute;
          left: 0;
          color: var(--keiros-accent);
        }

        .pricing-card.featured .feature-item::before {
          color: var(--keiros-accent-foreground);
        }

        .device-note {
          margin-top: 40px;
          color: var(--color-muted-foreground);
          font-size: 0.95rem;
        }

        .contact-section {
          position: relative;
          overflow: hidden;
          text-align: center;
          background: linear-gradient(135deg, #0d1117 0%, #080a0c 100%);
        }

        .contact-section::before {
          content: "KEIROS";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: center;
          color: color-mix(in oklab, var(--keiros-accent) 6%, transparent);
          font-family: "Bebas Neue", sans-serif;
          font-size: min(24vw, 18rem);
          letter-spacing: 0.05em;
          line-height: 1;
          white-space: nowrap;
          pointer-events: none;
        }

        .contact-inner {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 48px;
          padding-right: 48px;
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
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          outline: none;
        }

        .form-input::placeholder {
          color: var(--color-muted-foreground);
        }

        .form-input:focus {
          border-color: var(--keiros-accent);
        }

        .form-submit {
          display: inline-block;
          margin-top: 6px;
          padding: 16px 36px;
          border: none;
          background: var(--keiros-accent);
          color: var(--keiros-accent-foreground);
          font-family: "DM Sans", sans-serif;
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
          color: var(--keiros-accent);
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

        @keyframes bubbleUp {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.985);
            filter: blur(6px);
          }

          60% {
            opacity: 1;
            transform: translateY(-4px) scale(1.005);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes caret {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
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

          .contact-inner {
            padding-left: 24px;
            padding-right: 24px;
          }

          .solution-header {
            grid-template-columns: 1fr;
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

          .howitworks-section {
            min-height: auto;
          }

          .howitworks-section .section-inner {
            position: static;
            min-height: auto;
            display: block;
          }

          .howitworks-section .section-headline,
          .step {
            opacity: 1;
            transform: none;
          }

          .step::before {
            transform: scaleX(1);
          }

          .steps-viewport {
            overflow: visible;
            min-height: auto;
            width: 100%;
            margin-left: 0;
            margin-right: 0;
          }

          .steps-track {
            display: grid;
            gap: 16px;
            padding-left: 0;
            padding-right: 0;
            transform: none !important;
          }

          .step {
            position: relative;
            flex: initial;
            width: 100%;
            min-height: auto;
            padding: 40px 32px;
            margin-bottom: 16px;
            opacity: 1;
            transform: none;
            z-index: auto;
          }

          .step h3 {
            max-width: 100%;
          }

          .step-num {
            top: 72px;
            right: 24px;
          }

          .steps-dots {
            display: none;
          }

          .problem-cards {
            grid-template-columns: 1fr;
          }

          .problem-intro {
            grid-template-columns: 1fr;
          }

          .problem-image-wrap {
            justify-content: flex-start;
            transform: none !important;
          }

          .problem-copy {
            transform: none !important;
          }
        }

        @media (max-width: 768px) {
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

          .contact-inner {
            padding-left: 20px;
            padding-right: 20px;
          }

          .section-headline {
            font-size: clamp(2.9rem, 12vw, 4rem);
          }

          .contact-alts {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
}
