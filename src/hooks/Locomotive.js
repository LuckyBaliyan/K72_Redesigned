// src/hooks/useLocomotiveScroll.js
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useLocomotiveScroll = (options = {}) => {
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);

   useEffect(() => {
  try {
    if (!scrollRef.current) {
      console.warn("⚠️ Locomotive: scrollRef is not attached yet");
      return;
    }

    console.log("✅ Locomotive initializing on:", scrollRef.current);

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
      multiplier: 1,
      ...options,
    });

    locoScrollRef.current = scroll;

    // 🔹 Log scroll instance
    console.log("🚀 Locomotive instance created:", scroll);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          scroll.scrollTo(value, { duration: 0, disableLerp: true });
        }
        return scroll.scroll?.instance?.scroll?.y || 0;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.addEventListener("refresh", () => {
      scroll.update();
      console.log("♻️ ScrollTrigger refreshed + Locomotive updated");
    });
    ScrollTrigger.refresh();

    const handleResize = () => scroll.update();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      scroll.destroy();
      ScrollTrigger.removeEventListener("refresh", () => scroll.update());
    };
  } catch (error) {
    console.error("❌ Locomotive setup error:", error);
  }
}, [options]);

  return { scrollRef, locoScrollRef };
};

