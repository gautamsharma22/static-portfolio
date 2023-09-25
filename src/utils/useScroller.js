const MyScroller = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop;
    if (typeof document.documentElement.scrollTo === "function") {
      document.documentElement.scrollTo({
        top: offsetTop,
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      document.documentElement.scrollTop = offsetTop;
    }
  }
};
export default MyScroller;
