import React from "react";
import pic from "../img/farouk2.png";
import { Fade } from "react-reveal";
import "./css/about.css"

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="heading">
          <h2>About Agency</h2>
        </div>
        <div className="content">
          <div className="w50 text-center">
            <Fade left>
              <img src={pic} className="img text-center " alt="" />
              <p className="mt-2 h4 title">Farouck Sylla <span>CEO-MANAGER</span></p>
            </Fade>
          </div>
          <div className="conetntBx w50 px-3 px-md-0">
            <Fade right>
              <p className="description">
                <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                  Goalket Africa
                </span>{" "}
                is a sports management agency with many years of experience in
                sports marketing. Our agency is an experienced agency in the
                field of management, we intervene to develop certain talents
                that can make the happiness of your clubs. We do not only focus
                on sports, but also on personal development, that is why we
                coach, advise and follow up each player to be a leader who can
                not only help you to rise, but also be a leader to help you to
                get better results and develop the mindset of your team. With us
                it's 100% follow up of your career
              </p>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
