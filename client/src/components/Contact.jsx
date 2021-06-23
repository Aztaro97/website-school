import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Fade } from "react-reveal";
import { MdLocalPhone, AiOutlineMail, GiPositionMarker } from "react-icons/all";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (value) => {
      const body = JSON.stringify(value, null, 2);
      axios
        .post("/api/form", body)
        .then((res) => {
          console.log("Message envoyer");
        })
        .catch((err) => {
          console.log("Non envoyer")
        });
    },
  });

  return (
    <section className="contact" id="contact">
      <div className="heading white">
        <h2>Contact Us</h2>
      </div>
      <div className="content">
        <div className="contactInfo">
          <Fade left>
            <h3>Contact Info</h3>
            <div className="contactInfoBx">
              <div className="box">
                <div className="icon">
                  <GiPositionMarker />
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>
                    Plateau Dokui
                    <br />
                    Abidjan,Cote d'ivoire
                    <br />
                    00225
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <MdLocalPhone />
                </div>
                <div className="text">
                  <h3>Phone</h3>
                  <p>+225 0788411455</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <AiOutlineMail />
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <p>contact@goalketafrica.com</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="formBx">
          <form method="POST" action="" onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Fade right>
              <h3>Message Me</h3>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <textarea
                placeholder="Your Message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
              ></textarea>
              <input type="submit" value="Send" name="" />
            </Fade>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
