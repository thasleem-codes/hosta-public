import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

interface GoToTopButtonProps {
  containerId: string;
}

export function GoToTopButton({ containerId }: GoToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const toggleVisibility = () => {
      if (container.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    container.addEventListener("scroll", toggleVisibility);

    return () => container.removeEventListener("scroll", toggleVisibility);
  }, [containerId]);

  const scrollToTop = () => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-emerald-500 text-white p-2 rounded-full shadow-lg hover:bg-emerald-600 transition-colors animate-pulse z-50"
      aria-label="Go to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
