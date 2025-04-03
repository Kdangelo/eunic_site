import './CarouselHome.scss';
import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  const baseURL = import.meta.env.BASE_URL; // GitHub Pages fix

  return (
      <Carousel fade indicators={true} controls={true}>
        <Carousel.Item>
          <picture>
            <source
              srcSet={`${baseURL}src/assets/images/slide1-mobile.jpg`}
              media="(max-width: 576px)"
            />
            <img
              className="d-block w-100"
              src={`${baseURL}src/assets/images/slide1-desktop.jpg`}
              alt="First slide"
              loading="lazy"
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source
              srcSet={`${baseURL}src/assets/images/slide2-mobile.jpg`}
              media="(max-width: 576px)"
            />
            <img
              className="d-block w-100"
              src={`${baseURL}src/assets/images/slide2-desktop.jpg`}
              alt="Second slide"
              loading="lazy"
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source
              srcSet={`${baseURL}src/assets/images/slide3-mobile.jpg`}
              media="(max-width: 576px)"
            />
            <img
              className="d-block w-100"
              src={`${baseURL}src/assets/images/slide3-desktop.jpg`}
              alt="Third slide"
              loading="lazy"
            />
          </picture>
        </Carousel.Item>
      </Carousel>
  );
}

export default CarouselHome;
