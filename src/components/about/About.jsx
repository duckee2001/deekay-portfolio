import React from "react";
import "./about.css";
import ME from "../../assets/me_2.jpg";
import { FaAward } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5"
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <IoBookSharp className="about__icon" />
              <h5>Education</h5>
              <small>3+ Years At University</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Months Working As A Freelancer</small>
            </article>

            <article className="about__card">
              <RiEnglishInput className="about__icon" />
              <h5>English</h5>
              <small>Intermediate</small>
            </article>
          </div>

          <p>
            I am getting to be a final year student at Sai Gon University. Well,
            I would like to work as a Front-end Developer specializing in React
            language. Hope to have a opportunity to work with you.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
