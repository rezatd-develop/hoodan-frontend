import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    // Check on mount
    checkIsMobile();

    // Optional: Re-check on window resize
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

export const convertDateToDayMonth = (date) => {
  let convertedDate = new Date(date);
  const formattedDate = convertedDate.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
  return formattedDate;
}
