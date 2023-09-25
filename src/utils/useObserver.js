import { useEffect, useContext, useState } from "react";
import { NavBarActive } from "../App";

const useObserver = (componentRef) => {
  const [isVisible, setIsVisible] = useState(false);
  const { setselectedButton } = useContext(NavBarActive);
  const isMobileDevice = () => {
    return window.innerWidth < 768;
  };
  useEffect(() => {
    const getThreshold = () => {
      if (isMobileDevice()) {
        return 0.2;
      } else {
        return 0.4;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setselectedButton(componentRef.current.id);
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: getThreshold() }
    );

    const currentRef = componentRef.current;
    if (currentRef) {
      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, [componentRef, setselectedButton]);

  return isVisible;
};

export default useObserver;
