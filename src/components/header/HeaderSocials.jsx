import React from "react";
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {/* <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a> */}
      <a href="https://github.com/duckee2001" target="_blank">
        <BsGithub />
      </a>
      <a href="https://instagram.com" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://facebook.com">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
