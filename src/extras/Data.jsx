import ReactImage from "../assets/react.png";
import NodeImage from "../assets/nodejs.png";
import ExpressImage from "../assets/express.png";
import MDImage from "../assets/mongodb.png";
import CouponImage from "../assets/coupon.png";
import VisitorImage from "../assets/visitor.png";
import WeatherImage from "../assets/weather.png";
import CPPImage from "../assets/cpp.png";
import JSImage from "../assets/js.png";
import GITImage from "../assets/git.png";
import SellerImage from "../assets/seller.jpg";
import CleanUIImage from "../assets/cleanUIUX.png";

export const Tech = [
  {
    Name: "MongoDB",
    Info: "MongoDB is a popular NoSQL database that provides high scalability, flexibility, and performance. It stores data in a flexible, JSON-like format called BSON and supports powerful querying and indexing capabilities.",
    Image: MDImage,
  },
  {
    Name: "Express",
    Info: "Express is a fast and minimalist web application framework for Node.js. It provides a set of robust features for building web and mobile applications, including routing, middleware support, and template engines.",
    Image: ExpressImage,
  },
  {
    Name: "React",
    Info: "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update and render them based on data changes.",
    Image: ReactImage,
  },
  {
    Name: "Node.js",
    Info: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It runs JavaScript on the server-side and provides a vast ecosystem of packages and modules that enable building scalable and efficient web applications.",
    Image: NodeImage,
  },
];

export const CurrTech = [
  {
    Name: "C++",
    Info: "I really like using C++ as my main language. I have a good understanding of it, ranging from basic to intermediate level. I mainly use it for solving problems and working with algorithms.",
    Image: CPPImage,
  },
  {
    Name: "JavaScript",
    Info: "I have a basic to intermediate level of knowledge in JavaScript. I primarily use it for creating interactive web pages and full-stack web applications. While I generally enjoy working with it, there are times when I find it most challenging.",
    Image: JSImage,
  },
  {
    Name: "GIT",
    Info: "I am familiar with GIT at a basic to intermediate level. It is a widely used distributed version control system that enables collaboration among multiple developers and helps track code changes.",
    Image: GITImage,
  },
  {
    Name: "Clean UI/UX",
    Info: "I love creating user interfaces that are visually appealing, intuitive, and provide a good user experience to enhance usability. Sometimes I spend hours designing a single button sometimes I just render it without CSS :)",
    Image: CleanUIImage,
  },
];
export const ProjectData = [
  {
    title: "Weather App",
    date: "January-2023",
    link: "https://gautamsharma22.github.io/weather-build/",
    Image: WeatherImage,
    color: "#3da9fc",
    info: "My first React Application. It shows information about weather by inputting city from user. In this learned Basics of React, How to make API calls.",
  },
  {
    title: "Coupons Array",
    color: "#d9376e",
    date: "December-2022",
    link: "https://gautamsharma22.github.io/coupansArray/#/",
    Image: CouponImage,
    info: "It is Coupon Sharing website in which users can share coupons among them when required. This project was developed under the mentorship of my elder brother.",
  },
  {
    title: "VISOR",
    date: "June-2023",
    link: "https://github.com/gautamsharma22/visitor-tracker",
    Image: VisitorImage,
    color: "#7f5af0",
    info: "It is advanced Version of Normal Visitor Tracking. It was developed by as semester project using MERN stack and have many useful features and clean UI.",
  },
  {
    title: "SellerSync",
    date: "December-2023",
    link: "https://github.com/gautamsharma22/SellerSync",
    Image: SellerImage,
    color: "#2cb67d",
    info: "An online marketplace facilitating vendors to showcase products and enabling customers to place orders, and vendors can accept/reject orders.",
  },
];
