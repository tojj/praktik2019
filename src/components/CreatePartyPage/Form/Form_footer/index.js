import React from "react"
import staticData from "../../../../staticData"
import { Link } from "react-router-dom"
import Slider from "react-slick"

const Form_footer = props => (
  <div className="form-footer-container">
    <div className="box-container">
      <div className="box">
        <img className="box-img" src="/images/present.png" alt="event" />
      </div>
      <div className="box align-left">
        <form className="form">
          <h2 className="event-heading text-center">
            Vad vill du göra med överskott?
          </h2>
          <div className="input-group">
            <input
              className="radio-input"
              id="radio1"
              name="radio"
              type="radio"
            />
            <label className="radio-label" htmlFor="radio1">
              Ge till välgörenhet
            </label>
          </div>
          <div className="input-group">
            <input
              className="radio-input"
              id="radio2"
              name="radio"
              type="radio"
            />
            <label className="radio-label" htmlFor="radio2">
              Mer påkostat kalas
            </label>
          </div>
        </form>
      </div>
    </div>
    <h2 className="form-headline text-center">Välj välgörenhet</h2>
    <div className="slider-container">
      <div className="slider-content">
        <Slider {...settings}>
          {staticData.carouselData.map(renderImage)}
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

const renderImage = ({ id, img }) => {
  return (
    <div className="slider-div" key={id}>
      <img className="charImg" src={img} alt="" />
    </div>
  )
}

const settings = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 875,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 595,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
}

export default Form_footer
