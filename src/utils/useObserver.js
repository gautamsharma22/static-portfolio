import { useEffect, useContext } from "react";
import { NavBarActive } from "../App";

const useObserver = (componentRef) => {
  const { setselectedButton } = useContext(NavBarActive);
  const isMobileDevice = () => {
    return window.innerWidth < 540;
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!isMobileDevice() && entry.isIntersecting)
          setselectedButton(componentRef.current.id);
      }
    );
    const currentRef = componentRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      observer.unobserve(currentRef);
    };
  }, [componentRef,setselectedButton]);

  return true;
};
export default useObserver;
