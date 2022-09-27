import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NevbarUl, Nevbarli, HameBig, Hamli,Logo } from "./nevbarComponents";
import styles from "../../styles/hamburgerNevbar.module.css";
// import Autherntication from "../autherntication";

function Nevbar() {
  let NevbarContent = [
    { Name: "Home", Link: "/" },
    { Name: "About", Link: "/about" },
    { Name: "Create", Link: "/create" },
    { Name: "Rooms", Link: "/RoomsPage" },
  ];
  const [Ham, setHam] = useState(false);
  const toggleHeight = {
    width: Ham ? "100vw" : "0",
    transition: "width 0.5s",
  };
  const [navbar, changeNavbar] = useState(true);
  const navbarcolor = () => {
    if (window.scrollY >= 40) {
      changeNavbar(false);
    } else {
      changeNavbar(true);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", navbarcolor);
  }
  return (
    <>
    <NevbarUl
      style={
        !navbar
          ? { backgroundColor: "white" }
          : { backgroundColor: "transparent" }
      }
    >
      {NevbarContent.map((content, index) => {
        return (
          <Link href={content.Link} key={index}>
            <Nevbarli>{content.Name}</Nevbarli>
          </Link>
        );
      })}
      <div
        id={`${styles.navicon1}`}
        className={`${Ham && styles.open}`}
        onClick={() => {
          setHam(!Ham);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <HameBig style={toggleHeight}>
        {NevbarContent.map((content, index) => {
          return (
            <Link href={content.Link} key={index}>
              <Hamli>{content.Name}</Hamli>
            </Link>
          );
        })}
      </HameBig>
    </NevbarUl>
    {/* <Autherntication/> */}
    </>
  );
}

export default Nevbar;
