import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import simpleParallax from "simple-parallax-js";
import ReactMarkdown from 'react-markdown';
import ReactDom from 'react-dom';



export default class Home extends Component {
  render() {
    return (
      <>
        <div className="bgcolor">
          <CarouselBox />
          <p className="ramkahome">
            <p className="hometext">
              Данный сайт сделан для публикации мыслей и фотокарточек автора.
              <br></br> все слова переданные в статьях или ещё где либо являются
              сугубо личными мыслями автора, и спокойно могут поддаваться
              критике со стороны.
            </p>
          </p>
          
        </div>
        <div class="particles" id="particles"></div>
      </>
    );
  }
}
