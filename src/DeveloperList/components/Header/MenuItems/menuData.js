import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CtxOfDev } from "../../../CtxAndReducer/CtxAndReducer";
import { useContext } from "react";


export const logOutLinks = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/crud",
    text: "Crud",
  },
  {
    id: 4,
    url: "/team",
    text: "Team",
  },
  {
    id: 5,
    url: "/login",
    text: "Login",
  },
  {
    id: 6,
    url: "/register",
    text: "Register",
  },
]


export const loginLinks = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/profile",
    text: "Profile",
  },
  {
    id: 3,
    url: "/team",
    text: "Team",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];
