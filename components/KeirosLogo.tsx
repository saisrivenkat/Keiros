"use client";

import React, { useEffect, useRef, useState } from "react";
import AddressHero from "./address-hero";

const markup = `<div layer-name="Keiros only logo-01 1" style="width:1080px;height:1080px;overflow:hidden;position:relative;left:0;top:0;"><div layer-name="Mask group" style="width:613px;height:295px;position:absolute;left:309px;top:444px"><img src="https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=1227" style="width:613px;height:295px;position:absolute;left:0px;top:0px" alt="Group" /><svg id="1919:8958" style="position:absolute;left:0px;top:92px" width="218" height="204" viewBox="0 0 218 204" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.29 203.12C141.77 133.26 217.1 0 217.1 0C217.1 0 127.32 123.99 0 189.39C34.31 200.84 42.88 203.08 43.29 203.12Z" fill="#A9DFF4"/></svg></div><div layer-name="Mask group" style="width:570px;height:303px;position:absolute;left:355px;top:446px"><img src="https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=1140" style="width:570px;height:303px;position:absolute;left:0px;top:0px" alt="Group" /><svg id="1919:8967" style="position:absolute;left:0px;top:92px" width="174" height="211" viewBox="0 0 174 211" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.00997925 203.12C13.99 207.23 25.13 210.06 31.5 210.78C31.9 210.83 32.37 210.84 32.78 210.89C130.45 121.46 173.81 0 173.81 0C173.81 0 98.41 133.92 0 203.12H0.00997925Z" fill="#76CBF2"/></svg></div><div layer-name="Mask group" style="width:298px;height:612px;position:absolute;left:336px;top:316px"><img src="https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=597" style="width:298px;height:612px;position:absolute;left:0px;top:0px" alt="Group" /><svg id="1919:8976" style="position:absolute;left:0px;top:0px" width="205" height="217" viewBox="0 0 205 217" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 43.37C70.39 141.48 204.05 216.09 204.05 216.09C204.05 216.09 79.58 126.98 13.5 0C2.23 34.37 0.04 42.96 0 43.37Z" fill="#A9DFF4"/></svg></div><div layer-name="Mask group" style="width:306px;height:568px;position:absolute;left:327px;top:361px"><img src="https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=612" style="width:306px;height:568px;position:absolute;left:0px;top:0px" alt="Group" /><svg id="1919:8985" style="position:absolute;left:0px;top:0px" width="212" height="173" viewBox="0 0 212 173" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.59003 0C3.55003 14 0.790006 25.16 0.100006 31.53C0.0600061 31.93 0.04 32.4 0 32.81C89.95 130.01 211.63 172.72 211.63 172.72C211.63 172.72 77.31 98.04 7.58002 0H7.59003Z" fill="#76CBF2"/></svg></div><div layer-name="Mask group" style="width:627px;height:265px;position:absolute;left:143px;top:348px"><img src="https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=1255" style="width:627px;height:265px;position:absolute;left:0px;top:0px" alt="Group" /><svg id="1919:8994" style="position:absolute;left:401px;top:0px" width="227" height="194" viewBox="0 0 227 194" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M184.23 0C82.22 64.6 0 193.72 0 193.72C0 193.72 96.16 74.61 226.74 15.99C193.08 2.75002 184.63 0.07 184.23 0Z" fill="#A9DFF4"/></svg></div><div layer-name="Mask group" style="width:585px;height:274px;position:absolute;left:141px;top:336px"><img src="https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=1170" style="width:585px;height:274px;position:absolute;left:0px;top:0px" alt="Group" /><svg id="1919:9003" style="position:absolute;left:401px;top:0px" width="185" height="204" viewBox="0 0 185 204" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M184.23 9.47C170.49 4.63 159.51 1.23001 153.18 0.170013C152.78 0.100013 152.31 0.06 151.91 0C49.68 84.18 0 203.19 0 203.19C0 203.19 82.32 73.41 184.23 9.47Z" fill="#76CBF2"/></svg></div><div layer-name="Mask group" style="width:298px;height:612px;position:absolute;left:435px;top:152px"><img src="https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=597" style="width:298px;height:612px;position:absolute;left:0px;top:0px" alt="Group" /><svg id="1919:9012" style="position:absolute;left:94px;top:396px" width="205" height="217" viewBox="0 0 205 217" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M204.11 172.65C133.69 74.57 0 0 0 0C0 0 124.5 89.07 190.62 216.02C201.88 181.65 204.06 173.06 204.11 172.65Z" fill="#A9DFF4"/></svg></div><div layer-name="Mask group" style="width:306px;height:568px;position:absolute;left:437px;top:150px"><img src="https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=612" style="width:306px;height:568px;position:absolute;left:0px;top:0px" alt="Group" /><svg id="1919:9021" style="position:absolute;left:94px;top:396px" width="212" height="173" viewBox="0 0 212 173" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M204.1 172.66C208.13 158.66 210.89 147.5 211.58 141.12C211.62 140.72 211.64 140.25 211.68 139.84C121.7 42.68 0 0 0 0C0 0 134.35 74.64 204.11 172.65L204.1 172.66Z" fill="#76CBF2"/></svg></div></div>`;

const KeirosLogo = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [viewportScale, setViewportScale] = useState(1);
  const targetStepRef = useRef(0);
  const currentStepRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const stepLockRef = useRef(false);
  const unlockTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const updateViewportScale = () => {
      const widthScale = window.innerWidth / 1080;
      const heightScale = window.innerHeight / 1080;
      const fitted = Math.min(widthScale, heightScale, 1);
      setViewportScale(Math.max(fitted * 1.08, 0.34));
    };

    const isSectionLocked = () => {
      if (!sectionRef.current) return false;
      const rect = sectionRef.current.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= window.innerHeight;
    };

    const unlockStep = () => {
      stepLockRef.current = false;
      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current);
        unlockTimerRef.current = null;
      }
    };

    const queueUnlock = () => {
      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current);
      }
      unlockTimerRef.current = window.setTimeout(unlockStep, 520);
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isSectionLocked()) return;

      const direction = Math.sign(event.deltaY);
      if (direction === 0) return;

      const canAdvance = direction > 0 && targetStepRef.current < 5;
      const canRewind = direction < 0 && targetStepRef.current > 0;

      if (!canAdvance && !canRewind) {
        return;
      }

      event.preventDefault();
      if (stepLockRef.current) return;

      stepLockRef.current = true;
      targetStepRef.current += direction > 0 ? 1 : -1;
      queueUnlock();
    };

    const animate = () => {
      const current = currentStepRef.current;
      const target = targetStepRef.current;
      const next = current + (target - current) * 0.11;

      currentStepRef.current = next;
      setProgress(next / 5);
      rafRef.current = requestAnimationFrame(animate);
    };

    updateViewportScale();
    window.addEventListener("resize", updateViewportScale);
    window.addEventListener("wheel", handleWheel, { passive: false });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateViewportScale);
      window.removeEventListener("wheel", handleWheel);
      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current);
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const easeInOut = (value: number) => 0.5 - 0.5 * Math.cos(Math.PI * value);
  const exactStep = progress * 5;
  const stageOne = easeInOut(Math.min(exactStep, 1));
  const stageTwo = easeInOut(Math.min(Math.max(exactStep - 1, 0), 1));
  const stageThree = easeInOut(Math.min(Math.max(exactStep - 2, 0), 1));
  const stageFour = easeInOut(Math.min(Math.max(exactStep - 3, 0), 1));
  const stageFive = easeInOut(Math.min(Math.max(exactStep - 4, 0), 1));

  const rotateDeg = (stageOne + stageTwo + stageThree + stageFour + stageFive) * 360;
  const scale =
    1.04 +
    stageOne * 0.68 +
    stageTwo * 0.52 +
    stageThree * 0.76 +
    stageFour * 0.96;
  const translateY = -(stageOne * 14 + stageTwo * 20 + stageThree * 28 + stageFour * 12);
  const logoOpacity = stageFour < 0.42 ? 1 : Math.max(0, 1 - (stageFour - 0.42) / 0.58);
  const handoffClip = Math.max(0, 140 - (stageFour * 120 + stageFive * 20));
  const heroReveal = Math.min(140, stageFour * 88 + stageFive * 52);
  const hideLogo = stageFour > 0.94;

  return (
    <section ref={sectionRef} className="relative h-screen bg-black">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            clipPath: `circle(${heroReveal}% at 50% 50%)`,
            WebkitClipPath: `circle(${heroReveal}% at 50% 50%)`,
          }}
        >
          <AddressHero />
        </div>

        <div
          className="will-change-transform relative z-10"
          style={{
            transform: `translateY(${translateY}px) rotate(${rotateDeg}deg) scale(${viewportScale * scale})`,
            transformOrigin: "50% 50%",
            opacity: logoOpacity,
            clipPath: `circle(${handoffClip}% at 50% 50%)`,
            WebkitClipPath: `circle(${handoffClip}% at 50% 50%)`,
            filter: `blur(${stageFour * 2.4}px)`,
            visibility: hideLogo ? "hidden" : "visible",
            pointerEvents: hideLogo ? "none" : "auto",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: markup }} />
        </div>
      </div>
    </section>
  );
};

export default KeirosLogo;
