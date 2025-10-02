import './CarouselHome.scss';
import { Carousel } from "react-bootstrap";

import slide1Desktop from "../../../assets/images/slide1-desktop.jpg";
import slide1Tablet from "../../../assets/images/slide1-tablet.jpg";
import slide1Mobile from "../../../assets/images/slide1-mobile.jpg";

import slide2Desktop from "../../../assets/images/slide2-desktop.jpg";
import slide2Tablet from "../../../assets/images/slide2-tablet.jpg";
import slide2Mobile from "../../../assets/images/slide2-mobile.jpg";

import slide3Desktop from "../../../assets/images/slide3-desktop.jpg";
import slide3Tablet from "../../../assets/images/slide3-tablet.jpg";
import slide3Mobile from "../../../assets/images/slide3-mobile.jpg";

import slide4Desktop from "../../../assets/images/slide4-desktop.jpg";
import slide4Tablet from "../../../assets/images/slide4-tablet.jpg";
import slide4Mobile from "../../../assets/images/slide4-mobile.jpg";

import slide5Desktop from "../../../assets/images/slide5-desktop.jpg";
import slide5Tablet from "../../../assets/images/slide5-tablet.jpg";
import slide5Mobile from "../../../assets/images/slide5-mobile.jpg";

import slide6Desktop from "../../../assets/images/slide6-desktop.jpg";
import slide6Tablet from "../../../assets/images/slide6-tablet.jpg";
import slide6Mobile from "../../../assets/images/slide6-mobile.jpg";

import slide7Desktop from "../../../assets/images/slide7-desktop.jpg";
import slide7Tablet from "../../../assets/images/slide7-tablet.jpg";
import slide7Mobile from "../../../assets/images/slide7-mobile.jpg";

import slide8Desktop from "../../../assets/images/slide8-desktop.jpg";
import slide8Tablet from "../../../assets/images/slide8-tablet.jpg";
import slide8Mobile from "../../../assets/images/slide8-mobile.jpg";

import slide9Desktop from "../../../assets/images/slide9-desktop.jpg";
import slide9Tablet from "../../../assets/images/slide9-tablet.jpg";
import slide9Mobile from "../../../assets/images/slide9-mobile.jpg";

const slides = [
  { desktop: slide1Desktop, tablet: slide1Tablet, mobile: slide1Mobile, alt: "Slide 1" },
  { desktop: slide2Desktop, tablet: slide2Tablet, mobile: slide2Mobile, alt: "Slide 2" },
  { desktop: slide3Desktop, tablet: slide3Tablet, mobile: slide3Mobile, alt: "Slide 3" },
  { desktop: slide4Desktop, tablet: slide4Tablet, mobile: slide4Mobile, alt: "Slide 4" },
  { desktop: slide5Desktop, tablet: slide5Tablet, mobile: slide5Mobile, alt: "Slide 5" },
  { desktop: slide6Desktop, tablet: slide6Tablet, mobile: slide6Mobile, alt: "Slide 6" },
  { desktop: slide7Desktop, tablet: slide7Tablet, mobile: slide7Mobile, alt: "Slide 7" },
  { desktop: slide8Desktop, tablet: slide8Tablet, mobile: slide8Mobile, alt: "Slide 8" },
  { desktop: slide9Desktop, tablet: slide9Tablet, mobile: slide9Mobile, alt: "Slide 9" },
];

const CarouselHome = () => {
  return (
    <Carousel fade className="carousel-home">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <picture>
            {/* Mobile (up to 576px) */}
            <source srcSet={slide.mobile} media="(max-width: 576px)" />
            {/* Tablet (577px - 992px) */}
            <source srcSet={slide.tablet} media="(max-width: 992px)" />
            {/* Default: Desktop */}
            <img
              className="d-block w-100"
              src={slide.desktop}
              alt={slide.alt}
              loading="lazy"
            />
          </picture>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselHome;