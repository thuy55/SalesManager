import { useEffect } from "react";
import "./ripple.css";

const GlobalRipple = () => {
  useEffect(() => {
    const handleTouch = (e: MouseEvent | TouchEvent) => {
      const x =
        e instanceof TouchEvent ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const y =
        e instanceof TouchEvent ? e.touches[0].clientY : (e as MouseEvent).clientY;

      const ripple = document.createElement("div");
      ripple.className = "ripple";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    document.body.addEventListener("click", handleTouch);
    document.body.addEventListener("touchstart", handleTouch);

    return () => {
      document.body.removeEventListener("click", handleTouch);
      document.body.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  return null;
};

export default GlobalRipple;
