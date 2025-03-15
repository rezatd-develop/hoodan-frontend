import { useEffect, useState } from 'react';
import { enumerations } from '../resources/enums/enumerations';

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

export const translateOrderStatus = (orderStatus) => {
  switch (orderStatus) {
    case enumerations.order.orderStatus.registered: return 'registered'
    case enumerations.order.orderStatus.preparing: return 'preparing'
    case enumerations.order.orderStatus.ready: return 'ready'
    default:
      break;
  }
}

export const setCultureToUrl = (url) => {
  let culture = location?.pathname?.slice(1, 3);
  return `/${culture}/${url}`
}

export const isCultureEn = () => location?.pathname?.slice(1, 3) === "en";