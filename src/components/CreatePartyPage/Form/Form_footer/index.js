import React from "react"
import staticData from "../../../../staticData"
import { Link } from "react-router-dom"
import Slider from "react-slick"

const Form_footer = props => (
  <div className="form-footer-container">
    <div className="box-container">
      <div className="box">
        <label className="birthday-label">
          Telefonnummer för swish
          <input className="birthday-headline input100" rows="2" type="text" />
        </label>
      </div>
      <div className="box align-left">
        <label className="birthday-label">
          Vad vill du göra med överskott?{" "}
        </label>
        <div className=".align-left">
          <div className="input-div">
            <input className="inputauto align-left" type="checkbox" />
            <label className="align-left label-margin">
              Skänk till välgörenhet
            </label>
          </div>
          <div className="input-div">
            <input className="inputauto align-left " type="checkbox" />
            <label className="align-left label-margin">
              Mer påkostat kalas
            </label>
          </div>
        </div>
      </div>
    </div>
    <h2 className="form-headline text-center">Välj välgörenhet</h2>
    <div className="slider-container">
      <div className="slider-content">
        <Slider {...settings}>
          <div className="testdiv">
            <img className="charImg" src="/images/barncancer-fonden.jpg" />
          </div>
          <div className="testdiv">
            <img className="charImg" src="/images/radda-barnen.png" />
          </div>
          <div className="testdiv">
            <img className="charImg" src="/images/bris-ny.jpg" />
          </div>
          <div className="testdiv">
            <img className="charImg" src="/images/sos-ny.jpg" />
          </div>
          <div className="testdiv">
            <img className="charImg" src="/images/redcross.jpg" />
          </div>
          <div className="testdiv">
            <img className="charImg" src="/images/habitat.jpg" />
          </div>
        </Slider>
      </div>
    </div>
    <div className="buttons-container">
      <Link to="/" className="link-cancel">
        Avbryt
      </Link>
      <Link to="/skapa-kalas" className="link-party-page">
        Godkänn
      </Link>
    </div>
  </div>
)

const settings = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 875,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 595,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

export default Form_footer
