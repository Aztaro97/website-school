import React from "react";
import { Container, Image } from "react-bootstrap";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Flip } from "react-reveal";
import "./css/players.css";
import { v4 as uuidv4 } from "uuid";
import { FaYoutube } from "react-icons/fa";

import pic__Bahi from "../img/portfolio/wili.jpg";
import pic__charlie from "../img/portfolio/charlie.jpg";
import pic__ely from "../img/portfolio/ely.jpg";
import pic__ste from "../img/portfolio/ste.jpg";
import pic__alamu from "../img/portfolio/alamu.jpg";
import pic__stan from "../img/portfolio/stan.jpg";
import pic__diab from "../img/portfolio/diab.jpg";

const Players = () => {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <GrNext />,
    prevArrow: <GrPrevious />,
  };

  const Info_player = [
    {
      name: "BAHI WILLY",
      post: "FORWARD STRIKER",
      age: 21,
      pic: pic__Bahi,
      url_yt: "https://www.youtube.com/watch?v=nuJXLS2Fsp4",
    },
    {
      name: "TEHE GOSSIO CHARLES",
      post: "RIGHT SIDE",
      age: 19,
      pic: pic__charlie,
      url_yt: "https://www.youtube.com/watch?v=nuJXLS2Fsp4",
    },
    {
      name: "ZADI PRINCE ELYSEÉ",
      post: "MIDFIELDER",
      age: 35,
      pic: pic__ely,
      url_yt: "https://www.youtube.com/watch?v=nuJXLS2Fsp4",
    },
    {
      name: "KOUAME STEPHANO",
      post: "LEFT LATTERAL",
      age: 7,
      pic: pic__ste,
      url_yt: "https://www.youtube.com/watch?v=nuJXLS2Fsp4",
    },
    {
      name: "ALAMU OLAWALE",
      post: "MIDFIELDER",
      age: 47,
      pic: pic__alamu,
      url_yt: "https://www.youtube.com/watch?v=nuJXLS2Fsp4",
    },
    {
      name: "STANISLAS YEBOU",
      post: "RIGHT/LEFT WINGER",
      age: 23,
      pic: pic__stan,
      url_yt: "https://www.youtube.com/watch?v=nuJXLS2Fsp4",
    },
    {
      name: "MOHAMED DIABATÉ",
      post: "MIDELFIELDER",
      age: 36,
      pic: pic__diab,
      url_yt: "https://www.youtube.com/watch?v=nuJXLS2Fsp4",
    },
  ];

  return (
    <section className="player__section py-5" id="players">
      <Container>
        <h2 className="mb-4 text-center">Team Players</h2>
        <Slider {...settings} className="text-center">
          {Info_player.map((player) => {
            return (
              <div
                className="profile-card"
                key={uuidv4()}
                onClick={() => window.open(player.url_yt, "_blank")}
              >
                <Flip bottom>
                  <Image src={player.pic} className="img img-responsive" />
                </Flip>
                <div className="profile-name">{player.name}</div>
                <div className="profile-username">{player.post}</div>
                <FaYoutube className="profile-icons" size={50} />
              </div>
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default Players;
