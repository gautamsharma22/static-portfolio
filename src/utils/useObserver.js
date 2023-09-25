import { useEffect, useContext, useState } from "react";
import { NavBarActive } from "../App";

const useObserver = (componentRef) => {
  const [isVisible, setIsVisible] = useState(false);
  const { setselectedButton } = useContext(NavBarActive);

  useEffect(() => {
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
      { threshold: 0.4 }
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