import './CarouselHome.scss';
import { Carousel, Container } from "react-bootstrap";
import slide1Desktop from "../../../assets/images/slide1-desktop.jpg";
import slide1Mobile from "../../../assets/images/slide1-mobile.jpg";
import slide2Desktop from "../../../assets/images/slide2-desktop.jpg";
import slide2Mobile from "../../../assets/images/slide2-mobile.jpg";
import slide5Desktop from "../../../assets/images/slide5-desktop.jpg";
import slide5Mobile from "../../../assets/images/slide5-mobile.jpg";
import slide6Desktop from "../../../assets/images/slide6-desktop.jpg";
import slide6Mobile from "../../../assets/images/slide6-mobile.jpg";
import slide7Desktop from "../../../assets/images/slide7-desktop.jpg";
import slide7Mobile from "../../../assets/images/slide7-mobile.jpg";

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
            <source srcSet={slide5Mobile} media="(max-width: 576px)" />
            <img className="d-block w-100" src={slide5Desktop} alt="Third slide" loading="lazy" />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source srcSet={slide6Mobile} media="(max-width: 576px)" />
            <img className="d-block w-100" src={slide6Desktop} alt="Third slide" loading="lazy" />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source srcSet={slide7Mobile} media="(max-width: 576px)" />
            <img className="d-block w-100" src={slide7Desktop} alt="Third slide" loading="lazy" />
          </picture>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CarouselHome;
