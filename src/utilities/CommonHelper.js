export const isMobile = () => {
    if (typeof window !== "undefined") {
        const width = window.innerWidth;
        return width <= 768;
    }
    return "unknown";
};
