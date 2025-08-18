import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jump instantly to top (no smooth scroll)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
