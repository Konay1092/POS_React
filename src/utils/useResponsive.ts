import { useState, useEffect } from "react";

const breakpoints = {
  sm: 640,
  md: 760,
  lg: 1028,
  xl: 1280,
  "2xl": 1536,
};

const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [screen, setScreen] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    //clean up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let screenSize = "";

    switch (true) {
      case windowWidth < breakpoints.sm:
        screenSize = "xs";
        break;
      case windowWidth < breakpoints.md:
        screenSize = "sm";
        break;
      case windowWidth < breakpoints.lg:
        screenSize = "md";
        break;
      case windowWidth < breakpoints.xl:
        screenSize = "lg";
        break;
      case windowWidth < breakpoints["2xl"]:
        screenSize = "xl";
        break;
      default:
        screenSize = "2xl";
        break;
    }
    setScreen(screenSize);
  }, [windowWidth]);

  const desktopResponsive =
    screen === "lg" || screen === "xl" || screen === "2xl";
  const tabletResponsive = screen === "md";

  const mobileResponsive = screen === "xs" || screen === "sm";

  return { desktopResponsive, mobileResponsive, tabletResponsive, screen };
};

export default useResponsive;
