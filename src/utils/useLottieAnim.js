import Lottie from "react-lottie";
const useLottieAnim = (props) => {
  const { animationData } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      clearCanvas: "false",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};
export default useLottieAnim;
