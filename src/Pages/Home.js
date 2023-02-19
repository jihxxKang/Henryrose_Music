import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import piano from "../img/piano.jpg";
import flute from "../img/flute.jpg";
import violin from "../img/violin.jpg";
import "./Home.css";

function Home() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slicky_container">
      <Slider {...settings}>
        <div className="slicky_element">
          <img src={violin} className="slicky_img" />
          <div className="slicky_text_container">
            <h1>헨리로즈 뮤직에 오신것을 환영합니다</h1>
            <h4>
              - 헨리로즈 뮤직은 최신트렌드 및 검증된 우수한 교육콘텐츠만을
              제공합니다
            </h4>
            <h4>
              - 아이들의 창조력, 지구력을 강화시키는 자기주도형 학습을 목표로
              프로그램을 설계합니다
            </h4>
            <h4>- 개개인의 특성을 고려한 1:1 맞춤형 프로그램을 제공합니다</h4>
          </div>
        </div>
        <div className="slicky_element">
          <img src={flute} className="slicky_img" />
          <div className="slicky_text_container">
            <h1>1:1 맞춤형 음악교육 방문레슨</h1>
            <h4>- 헨리로즈 뮤직의 체계적인 수업 커리큘럼</h4>
            <h4>
              - 헨리로즈 아카데미에서 실시하는 전문교수 과정을 수료한 검증된
              교사
            </h4>
            <h4>- 헨리로즈 뮤직의 유,아동 심리안정 및 케어 시스템</h4>
          </div>
        </div>
        <div className="slicky_element">
          <img src={piano} className="slicky_img" />
          <div className="slicky_text_container">
            <h1>Henry Rose</h1>
            <h4>fhdgxcmhvjbknbn</h4>
            <h4>fdxgchmvjb</h4>
            <h4>rseghdgfjthgjyhkj</h4>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Home;
