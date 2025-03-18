import { useState, useEffect, useCallback } from "react";

const useScrollAnimation = (threshold = 200) => {
  const [isInView, setIsInView] = useState(false);
  const [hasFaded, setHasFaded] = useState(false); 

  const handleScroll = useCallback(() => {
    const position = window.scrollY;
    if (position > threshold && !hasFaded) {
      setIsInView(true); 
      setHasFaded(true);  
    }
  }, [threshold, hasFaded]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return isInView;
};

export default useScrollAnimation;
