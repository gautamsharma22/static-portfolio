import ABOUT_Background from "../backgrounds/sun-tornado.svg";
import PROJECT_Background from "../backgrounds/zig-zag.svg";
import HOME_Background from "../backgrounds/zig-zag.svg";
import MESSAGE_Background from "../backgrounds/scattered-forcefields.svg";
import TECH_Background from "../backgrounds/wavey-fingerprint.svg";

import DevImage from "../assets/profile.jpg";

const ABOUT_BOX1_OUTER = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  background: `url(${ABOUT_Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  mt: 1,
};
const ABOUT_BOX2_OUTER = {
  width: { xs: "100vw", sm: "30vw" },
  height: { xs: "100vw", sm: "30vw" },
  backgroundImage: `url(${DevImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "50%",
  m: 1,
};
const ABOUT_BOX1_INNNER1 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  width: { xs: "100vw", sm: "70vw" },
};
const ABOUT_BOX2_INNER = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const ABOUT_BOX1_INNNER2 = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "60%",
};
const PARA1 =
  "I am Gautam Sharma, currently in my first year of master's studies. My passion lies in web development and problem-solving, and I am dedicated to honing my skills in these areas.I have invested time and effort in learning the MERN (MongoDB, Express.js, React.js, Node.js) stack and React Native, and I have attained an intermediate level of proficiency in these technologies. Alongside my web development skills, I have also acquired intermediate knowledge in Data Structures and Algorithms (DSA). These skills have enabled me to approach problem-solving in a systematic manner.";
const PARA2 =
  "As I progress through my master's program, I am actively seeking internship opportunities to apply and further develop my skills. I am eager to gain real-world experience and contribute to web development projects. Through internships, I aim to broaden my understanding of industry practices, enhance my technical abilities, and collaborate with professionals in the field. I am excited about the opportunity to learn from experienced mentors and work on challenging projects that will allow me to grow both professionally and personally.";
const PROJECT_CONTAINER = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  background: `url(${PROJECT_Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  mt: 1,
};
const PROJECT_CHILD1 = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
};
const PROJECT_CHILD2 = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "center",
  alignItems: "center",
  m: 3,
};
const HOME_BOX4 = {
  display: "flex",
  justifyContent: { xs: "", sm: "center" },
  flexDirection: "column",
  height: { xs: "100%", sm: "60%" },
  width: "80%",
};
const HOME_BOX3 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: { xs: "60vh", sm: "100vh" },
  width: { xs: "100vw", sm: "50vw" },
};
const HOME_BOX2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: { xs: "50vh", sm: "100vh" },
  width: { xs: "100vw", sm: "50vw" },
};
const HOME_BOX1 = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  background: `url(${HOME_Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};
const MESSAGE_BOX4 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "60%",
  width: "80%",
};
const MESSAGE_BOX2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: { xs: "50vh", sm: "100vh" },
  width: { xs: "100vw", sm: "50vw" },
};
const MESSAGE_BOX1 = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  background: `url(${MESSAGE_Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  mt: 2,
};
const MESSAGE_BOX3 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: { xs: "85vh", sm: "100vh" },
  width: { xs: "100vw", sm: "50vw" },
};
const TECH_STYLE1 = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: `url(${TECH_Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  mt: 1,
};
const TECH_STYLE2 = {
  textAlign: "center",
  fontWeight: "bold",
  mt: 3,
};
const TECH_STYLE3 = {
  display: "flex",
  m: 3,
  flexDirection: { xs: "column", sm: "row" },
  alignItems: "center",
  justifyContent: "center",
};
export {
  ABOUT_BOX1_OUTER,
  ABOUT_BOX2_OUTER,
  ABOUT_BOX1_INNNER1,
  ABOUT_BOX1_INNNER2,
  ABOUT_BOX2_INNER,
  PARA1,
  PARA2,
  PROJECT_CONTAINER,
  PROJECT_CHILD1,
  PROJECT_CHILD2,
  HOME_BOX1,
  HOME_BOX2,
  HOME_BOX3,
  HOME_BOX4,
  MESSAGE_BOX1,
  MESSAGE_BOX2,
  MESSAGE_BOX3,
  MESSAGE_BOX4,
  TECH_STYLE1,
  TECH_STYLE2,
  TECH_STYLE3,
};
