import React from 'react';
// import getS3AssetUrl from '../../../util/aws_url_generator';
import PageGIF from '../../images/a.gif';
import PageVideo from './waterfall.mp4';
import './hero.css';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroImg,
  HeroContent,
  HeroH1,
  HeroP,
  // HeroBtnWrapper,
  // ArrowForward,
  // ArrowRight,
} from './hero_elements';

const HeroSection = () => {
  // const [hover, setHover] = useState(false);
  // const onHoverHandler = () => {
  //   setHover(!hover);
  // };
  // const videoUrl = getS3AssetUrl('homeVideo.mp4');

  return (
    <HeroContainer id="firm">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
        >
          <source
            src={PageVideo}
            type='video/mp4'
          />
        </VideoBg>
        {/* <HeroImg src={PageVideo} alt='intro video' /> */}
      </HeroBg>
      <HeroContent>
      <HeroH1>Empowering</HeroH1>
      <HeroP>
        <span class = "text1">
          Entrepreneurs{' '} | {' '} 
        </span>
        <span class = "text2">
          Businesses{' '} | {' '}
        </span>
        <span class = "text3">
           Economies
        </span>
      </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
