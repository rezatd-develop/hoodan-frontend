import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    checkIsMobile();

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

export const htmlToPlainText = (html) => {
  let tempElement = document.createElement("div");
  tempElement.innerHTML = html;

  const blockTags = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "LI"];
  blockTags.forEach(tag => {
    tempElement.querySelectorAll(tag).forEach(el => {
      el.innerHTML = "\n" + el.innerHTML;
    });
  });

  return tempElement.textContent || tempElement.innerText;
}