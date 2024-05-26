// src/hooks/useScrollThreshold.ts
import { useEffect, useState, useCallback } from "react";

const useScrollThreshold = (
  threshold: number,
  onThresholdCross: () => void
) => {
  const [hasCrossedThreshold, setHasCrossedThreshold] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > threshold && !hasCrossedThreshold) {
      setHasCrossedThreshold(true);
      onThresholdCross();
    } else if (scrollPosition <= threshold && hasCrossedThreshold) {
      setHasCrossedThreshold(false);
    }
  }, [threshold, hasCrossedThreshold, onThresholdCross]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return hasCrossedThreshold;
};

export default useScrollThreshold;
