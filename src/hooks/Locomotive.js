
// for later u still a kid to understand the nonsense of locomotive 
// App.jsx
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocomotiveScroll = (options = {}) => {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  useEffect(() => {
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp:0.1,
      ...options,
    });

    return () => locoScroll.current.destroy();
  }, []);

  return { scrollRef, locoScroll };
};
