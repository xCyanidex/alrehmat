
import useEmblaCarousel from "embla-carousel-react";

import "./Work.css";
import Autoplay from "embla-carousel-autoplay";
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import work1 from "../../assets/work/d1.jpg"
import work2 from "../../assets/work/d2.jpg";
import work3 from "../../assets/work/d3.jpg";
import work4 from "../../assets/work/d4.jpg";
import work5 from "../../assets/work/d5.jpg";
const autoplayOptions = {
  delay: 4000,
  rootNode: (emblaRoot) => emblaRoot.parentElement,
};


const Work = () => {
   const [emblaRef] = useEmblaCarousel({ loop: true }, [
     Autoplay(autoplayOptions),
   ]);
  return (
    <div className="work-container  grid grid-cols-2 gap-3 mt-32 xl:max-w-[1400px]  lg:max-w-[1000px] md:max-w-[600px]  sm:max-w-[300px]  mx-auto  md:mx-auto md:mt-20 sm:mx-auto">
      <div className="work-text-container  px-10 lg:col-span-1 md:col-span-2 col-span-2">
        <div className="mx-auto mt-8 w-full lg:px-20 sm:px-10">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
            <UsersIcon className="h-6 w-6  text-[#CBA664] " />
          </div>
          <Typography
            variant="h3"
            className="mb-3 font-bold  text-[#CBA664] font-arvo"
            color="blue-gray"
          >
            Working with us is a pleasure
          </Typography>
          <Typography className="mb-8 lg:text-base sm:text-sm font-normal font-arvo text-blue-gray-500">
            Al Rehmat Developers is more than a construction company; we are the
            architects of possibilities. With a legacy of excellence in the
            construction industry, we have established ourselves as visionaries
            who transform concepts into tangible, awe-inspiring structures.
            Whether you're an investor seeking lucrative opportunities, a
            realtor looking for strategic partnerships, or a client envisioning
            your dream project, Al Rehmat Developers is your trusted partner in
            realizing aspirations.
            <br />
            <br />
            For Investors: Al Rehmat Developers offers a platform for strategic
            investment in transformative projects. Join us in shaping the future
            of real estate development, where your investments not only yield
            substantial returns but contribute to the creation of iconic
            landmarks.
          </Typography>
          <Link
            to="/about"
            title="Learn more about Al-Rehmat Developers"
          >
            <Button variant="outlined">read more</Button>
          </Link>
        </div>
      </div>
      <div className="carousal-container  px-10 lg:col-span-1 md:justify-center md:mt-20 md:col-span-2 md:px-10 col-span-2 sm:px-10">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={work1}
                alt="Al Rehmat is trusted"
              />
            </div>
            <div className="embla__slide">
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={work2}
                alt="Al-Rehmat Developers"
              />
            </div>
            <div className="embla__slide">
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={work3}
                alt="Al-Rehmat Developers"
              />
            </div>
            <div className="embla__slide">
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={work4}
                alt="Al-Rehmat Developers"
              />
            </div>
            <div className="embla__slide">
              <img
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={work5}
                alt="Al-Rehmat Developers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Work;