// import React from "react";
import Lottie from "lottie-react"
const useLottieAnim = (props) => {
  const { animationData } = props;
  return (
    <>
      <Lottie animationData={animationData}/>
    </>
  );
};
export default useLottieAnim;
