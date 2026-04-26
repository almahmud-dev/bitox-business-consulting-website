import HeroImage from "../../../public/images/home01/hero/hero-card-icons.png";
import FeatureRoundOne from "../../../public/images/home01/feature-round/feature-round1.png";
import FeatureRoundTwo from "../../../public/images/home01/feature-round/feature-round2.png";
import HeroBanner from "../../../public/images/hero/hero1.png";
import AboutSectionOne from "../../../public/images/home01/about-section/home-about1.png";
import AboutSectionTwo from "../../../public/images/home01/about-section/home-about2.png";
import HomeBrandOne from "../../../public/images/home01/brand/brand1.png";
import HomeBrandTwo from "../../../public/images/home01/brand/brand2.png";
import HomeBrandThree from "../../../public/images/home01/brand/brand3.png";
import HomeBrandFour from "../../../public/images/home01/brand/brand4.png";
import HomeBrandFive from "../../../public/images/home01/brand/brand5.png";
import HomeBrandSix from "../../../public/images/home01/brand/brand6.png";
import Plus from "../../../public/images/home01/services/plus.png";
import VideoShowcase from "../../../public/images/home01/videoshowcase/service-banner.png";
import Quote from "../../../public/images/home01/testimonial/quote.png";
import ProjetctOne from "../../../public/images/home01/portfolioSection/portfolio1.png";
import projectTwo from "../../../public/images/home01/portfolioSection/portfolio2.png";
import ProjetctThree from "../../../public/images/home01/portfolioSection/portfolio3.png";
import projectFour from "../../../public/images/home01/portfolioSection/portfolio4.png";
import projectFive from "../../../public/images/home01/portfolioSection/portfolio5.png";
import Home2Testimonials1 from "../../../public/images/home2_Testimonials/Sophia_Rahman.png";
import Home2Testimonials2 from "../../../public/images/home2_Testimonials/videoimg.png";
import Home2Testimonials3 from "../../../public/images/home2_Testimonials/Michael_Torres.png";
import Home2Testimonials4 from "../../../public/images/home2_Testimonials/Michael_Hayes.png";

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
  homeOneBrand: [
    { id: 1, img: HomeBrandOne },
    { id: 2, img: HomeBrandTwo },
    { id: 3, img: HomeBrandThree },
    { id: 4, img: HomeBrandFour },
    { id: 5, img: HomeBrandFive },
    { id: 6, img: HomeBrandSix },
  ],
  plus: Plus,
  videoShowcase: VideoShowcase,
  quote: Quote,
  projectImages: [
    [
      {
        id: 1,
        img: ProjetctOne,
        title: "Brand Identity",
        subtitleOne: "Branding",
        subtitleTwo: "(2024)",
      },
      {
        id: 2,
        img: projectTwo,
        title: "E-Commerce Platform",
        subtitleOne: "Web Design",
        subtitleTwo: "(2024)",
      },
    ],
    [
      {
        id: 1,
        img: ProjetctThree,
        title: "Social Media Campaign",
        subtitleOne: "Marketing",
        subtitleTwo: "(2023)",
      },
      {
        id: 2,
        img: projectFour,
        title: "Mobile App UI",
        subtitleOne: "UI/UX",
        subtitleTwo: "(2025)",
      },
      {
        id: 3,
        img: projectFive,
        title: "SEO Strategy",
        subtitleOne: "Digital Marketing",
        subtitleTwo: "(2025)",
      },
    ],
  ],
  home2Testimonials: [
    { id: 1, img: Home2Testimonials1 },
    { id: 2, img: Home2Testimonials2 },
    { id: 3, img: Home2Testimonials3 },
    { id: 4, img: Home2Testimonials4 },
  ],
};

export default allImages;
