import React from "react"
import staticData from "../../../../staticData"
import { Link } from "react-router-dom"
import Slider from "react-slick"

const Form_footer = props => (
  <div className="form-footer-container">
    <div className="box-container">
      <div className="box max-height">
        <h2 className="event-heading">Telefonnummer för swish</h2>
        <label className="birthday-label">
          <input className="birthday-headline input100" rows="2" type="text" />
        </label>
      </div>
      <div className="box align-left">
        <form class="form">
          <h2 className="event-heading">Vad vill du göra med överskott?</h2>
          <div class="inputGroup">
            <input id="radio1" name="radio" type="radio" />
            <label for="radio1">Ge till välgörenhet</label>
          </div>
          <div class="inputGroup">
            <input id="radio2" name="radio" type="radio" />
            <label for="radio2">Mer påkostat kalas</label>
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
