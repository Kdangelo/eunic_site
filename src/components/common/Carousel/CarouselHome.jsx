import './CarouselHome.scss';
import { Carousel, Container } from "react-bootstrap";
import slide1Desktop from "../../../assets/images/slide1-desktop.jpg";
import slide1Mobile from "../../../assets/images/slide1-mobile.jpg";
import slide2Desktop from "../../../assets/images/slide2-desktop.jpg";
import slide2Mobile from "../../../assets/images/slide2-mobile.jpg";
import slide3Desktop from "../../../assets/images/slide3-desktop.jpg";
import slide3Mobile from "../../../assets/images/slide3-mobile.jpg";

const CarouselHome = () => {
  return (
    <Container>
      <Carousel fade className='carousel-home'>
        <Carousel.Item>
          <picture>
            <source srcSet={slide1Mobile} media="(max-width: 576px)" />
            <img className="d-block w-100" src={slide1Desktop} alt="First slide" loading="lazy" />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source srcSet={slide2Mobile} media="(max-width: 576px)" />
            <img className="d-block w-100" src={slide2Desktop} alt="Second slide" loading="lazy" />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source srcSet={slide3Mobile} media="(max-width: 576px)" />
            <img className="d-block w-100" src={slide3Desktop} alt="Third slide" loading="lazy" />
          </picture>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CarouselHome;
