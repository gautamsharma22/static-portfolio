// import React from "react";
import Lottie from "lottie-react"
const useLottieAnim = (props) => {
  const { animationData } = props;

  return (
    <div>
      <Lottie animationData={animationData} loop={true}/>
    </div>
  );
};
export default useLottieAnim;
