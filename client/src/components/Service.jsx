import React from 'react';
import {Slide, Fade} from "react-reveal"


const Service = () => {
    return (
        <section className="services" id="services">
    <div className="heading white">
      <h2>Our Services</h2>
    </div>
    <div className="content">
      <div className="servicesBx">
        <Fade left>
        <img src="icon1.png" alt="" />
        <h2>SPORTS MANAGEMENT</h2>
        <p>Our agents, experienced people who have studied at the best law universities. are there to guide you, to put you in contact with the clubs to negotiate the closing of your contracts by being your direct intermediary with the clubs.</p>
        </Fade>
      </div>
      <div className="servicesBx">
        <Slide top>
        <img src="icon2.png" alt="" />
        <h2>SPORTS MARKETING</h2>
        <p>Our partnership with the communication agency YIRIBA communication. Goalket Africa ensures to manage your image on social networks, to promote you and to facilitate your access to the media in order to give you more visibility, that's why we work with experts in marketing , communication and social media .</p>
        </Slide>
      </div>
      <div className="servicesBx">
        <Fade right>
        <img src="icon3.png" alt="" />
        <h2>INVESTMENT ADVICE AND WEALTH MANAGEMENT</h2>
        <p>In our concern to enable you to manage your career and especially you , life after football, we provide you with the best investment consultants and managers to enable you to manage your wealth and make the best investments .</p>
        </Fade>
      </div>
    </div>
  </section>
    )
}


export default Service;