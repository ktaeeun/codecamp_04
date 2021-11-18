import { SliderItem, Wrapper } from "./Banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/layoutImage/nyang.png" />
        </div>
        <div>
          <SliderItem src="/images/layoutImage/nyang2.png" />
        </div>
        <div>
          <SliderItem src="/images/layoutImage/nyang.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
