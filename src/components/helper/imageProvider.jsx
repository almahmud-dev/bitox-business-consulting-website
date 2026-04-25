import HeroImage from "../../../public/images/home01/hero/hero-card-icons.png";
import FeatureRoundOne from "../../../public/images/home01/feature-round/feature-round1.png";
import FeatureRoundTwo from "../../../public/images/home01/feature-round/feature-round2.png";
import HeroBanner from "../../../public/images/hero/hero1.png";
import AboutSectionOne from "../../../public/images/home01/about-section/home-about1.png";
import AboutSectionTwo from "../../../public/images/home01/about-section/home-about2.png";

const allImages = {
  heroIocns: HeroImage,
  heroBanner: HeroBanner,
  featureRound: [
    { id: 1, img: FeatureRoundOne },
    { id: 2, img: FeatureRoundTwo },
  ],
  aboutsection: [
    { id: 1, img: AboutSectionOne },
    { id: 2, img: AboutSectionTwo },
  ],
};

export default allImages;
