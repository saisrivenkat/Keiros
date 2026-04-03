"use client";

import { useEffect, useRef, useState } from "react";
import {
  Ambulance,
  Package,
  UtensilsCrossed,
  Building2,
  Hospital,
  Home,
} from "lucide-react";

const useCases = [
  {
    icon: Ambulance,
    title: "Emergency Services",
    description:
      "Police, fire, and ambulance crews need to reach the right unit — not just the right building. Keiros eliminates deadly navigation delays in dense residential and commercial premises, providing floor-level precision when every second counts.",
    impact: "Reduces on-site search time to near-zero",
    impactIcon: "⚡",
    critical: true,
  },
  {
    icon: Package,
    title: "Last-Mile Delivery",
    description:
      "UPS, FedEx, Amazon, and local couriers lose millions annually to failed deliveries in complex properties. Keiros gives drivers pinpoint navigation from the parking lot to the exact unit — first time, every time.",
    impact: "Eliminate failed delivery attempts",
    impactIcon: "→",
    critical: false,
  },
  {
    icon: UtensilsCrossed,
    title: "Food Delivery",
    description:
      "Hot food gets cold in apartment lobbies. Delivery drivers call endlessly trying to find a unit. Keiros guides them door-to-door in unfamiliar complexes, cutting delivery time and boosting customer satisfaction.",
    impact: "Faster, hotter, happier deliveries",
    impactIcon: "→",
    critical: false,
  },
  {
    icon: Building2,
    title: "Commercial Campuses",
    description:
      "Office parks, industrial complexes, and university campuses span hundreds of acres with dozens of buildings. Keiros makes every entrance, loading dock, and suite addressable and navigable for vendors, visitors, and staff.",
    impact: "End campus navigation confusion",
    impactIcon: "→",
    critical: false,
  },
  {
    icon: Hospital,
    title: "Hospitals & Healthcare",
    description:
      "Patients, families, and medical supply chains navigate sprawling hospital campuses daily. Keiros transforms complex medical facilities into navigable, precisely mapped environments — reducing stress and saving time.",
    impact: "Precision wayfinding for critical facilities",
    impactIcon: "→",
    critical: false,
  },
  {
    icon: Home,
    title: "Property Managers",
    description:
      "From gated communities to high-rise towers, Keiros gives property managers a tool to guide every visitor, service provider, and resident to exactly where they need to be — creating a smarter, safer property experience.",
    impact: "Elevated resident & visitor experience",
    impactIcon: "→",
    critical: false,
  },
];

export default function UseCases() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll(".usecase-card-item");
    const heading = document.querySelector(".usecases-heading");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heading) {
              setHeaderVisible(true);
            } else {
              const index = Number(entry.target.getAttribute("data-index"));
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );

    if (heading) observer.observe(heading);
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="usecases" ref={sectionRef} className="usecases-section">
      <div className="usecases-inner">
        <div className={`usecases-heading ${headerVisible ? "visible" : ""}`}>
          <div className="section-tag">Use Cases</div>
          <h2 className="section-headline">
            WHO NEEDS
            <br />
            <em>KEIROS</em> NOW
          </h2>
        </div>

        <div className="usecase-grid">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            const isVisible = visibleCards.has(i);
            return (
              <div
                key={uc.title}
                className={`usecase-card-item ${uc.critical ? "critical" : ""} ${isVisible ? "visible" : ""}`}
                data-index={i}
                style={{ transitionDelay: `${(i % 3) * 120}ms` }}
              >
                <div className="usecase-card-glow" aria-hidden="true" />
                <div className="usecase-icon-wrap">
                  <Icon className="usecase-icon" />
                </div>
                <h3>{uc.title}</h3>
                <p>{uc.description}</p>
                <div
                  className={`usecase-impact ${uc.critical ? "critical" : ""}`}
                >
                  <span className="impact-icon">{uc.impactIcon}</span>{" "}
                  {uc.impact}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .usecases-section {
          --keiros-accent: #5bc9f0;
          --keiros-red: #ff4d4d;
          color: var(--color-foreground);
          font-family: "DM Sans", sans-serif;
          padding: 120px 48px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          position: relative;
          overflow: hidden;
        }

        .usecases-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Section heading ── */
        .usecases-heading {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .usecases-heading.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--keiros-accent);
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
          background: var(--keiros-accent);
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

        /* ── Card grid ── */
        .usecase-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-top: 64px;
        }

        /* ── Individual card ── */
        .usecase-card-item {
          background: rgba(255, 255, 255, 0.03);
          padding: 48px 40px;
          position: relative;
          overflow: hidden;
          transition:
            background 0.4s ease,
            opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          transform: translateY(48px) scale(0.97);
        }

        .usecase-card-item.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Bottom accent line */
        .usecase-card-item::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--keiros-accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .usecase-card-item:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .usecase-card-item:hover::after {
          transform: scaleX(1);
        }

        .usecase-card-item.critical::after {
          background: var(--keiros-red);
        }

        /* Hover glow effect */
        .usecase-card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(91, 201, 240, 0.06),
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .usecase-card-item:hover .usecase-card-glow {
          opacity: 1;
        }

        .usecase-card-item.critical:hover .usecase-card-glow {
          background: radial-gradient(
            circle at 50% 50%,
            rgba(255, 77, 77, 0.06),
            transparent 60%
          );
        }

        /* ── Icon ── */
        .usecase-icon-wrap {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border-radius: 14px;
          background: rgba(91, 201, 240, 0.08);
          border: 1px solid rgba(91, 201, 240, 0.15);
          transition:
            transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            background 0.4s ease;
        }

        .usecase-card-item:hover .usecase-icon-wrap {
          transform: translateY(-4px) scale(1.05);
          background: rgba(91, 201, 240, 0.14);
        }

        .usecase-card-item.critical .usecase-icon-wrap {
          background: rgba(255, 77, 77, 0.08);
          border-color: rgba(255, 77, 77, 0.15);
        }

        .usecase-card-item.critical:hover .usecase-icon-wrap {
          background: rgba(255, 77, 77, 0.14);
        }

        :global(.usecase-icon) {
          width: 26px;
          height: 26px;
          color: var(--keiros-accent);
        }

        .usecase-card-item.critical :global(.usecase-icon) {
          color: var(--keiros-red);
        }

        /* ── Text ── */
        .usecase-card-item h3 {
          font-family: "Bebas Neue", sans-serif;
          font-size: 1.6rem;
          letter-spacing: 0.04em;
          margin-bottom: 16px;
          color: var(--color-foreground);
          transition: color 0.3s ease;
        }

        .usecase-card-item p {
          font-size: 0.92rem;
          color: var(--color-muted-foreground);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        /* ── Impact line ── */
        .usecase-impact {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--keiros-accent);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .usecase-impact.critical {
          color: var(--keiros-red);
        }

        .impact-icon {
          font-size: 1rem;
          line-height: 1;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .usecase-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .usecases-section {
            padding: 80px 24px;
          }
        }

        @media (max-width: 640px) {
          .usecase-grid {
            grid-template-columns: 1fr;
          }

          .usecases-section {
            padding: 64px 16px;
          }

          .usecase-card-item {
            padding: 36px 28px;
          }

          .section-headline {
            font-size: clamp(2.5rem, 8vw, 3.5rem);
          }
        }
      `}</style>
    </section>
  );
}
