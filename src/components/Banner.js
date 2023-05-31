import { useStat, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import React, { Component }  from 'react';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Web Developer", "Full Stack Developer", "Backend Developer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    },delta);

    return () => { clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm André `}<span className="wrap"> <br></br>{text} </span></h1>
            <p>I'm a recent graduate of Le Wagon's Web Development bootcamp and I'm passionate about full-stack development.

Before diving into the world of tech, I spent several years working in tourism and events management.<br></br>
<br></br>I'm constantly learning and exploring new technologies, and I'm excited to take on new challenges and continue growing my skills.

I am currently broadening my skill stack with Python and React, while working on some personal projects. <br></br>

<br></br> In my free time, I enjoy to play drums 🥁, listening to music for hours 🎧, play football ⚽️ and I'm always looking for new ways to expand my horizons. <br></br>

<br></br>Thanks for taking the time to learn a bit more about me!</p>
<button onClick={() => {
  const url = 'https://drive.google.com/file/d/10kdNWevhNkmT03WdDWiTbsGIi0NIlkqw/view?usp=share_link';
  const element = document.createElement('a');
  element.href = url;
  element.target = '_blank';
  element.download = 'André Nelas CV-J.pdf';
  document.body.appendChild(element);
  element.click();
}}>
  You can check my CV <ArrowRightCircle size={25}/>
</button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>

    </section>
  )
}
