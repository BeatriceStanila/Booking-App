import { Typography, Button } from "@material-tailwind/react";
import { BsInstagram, BsFacebook, BsFillEnvelopeFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-8 px-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center lg:justify-between ">
        <img src="./hero.svg" alt="logo-ct" className="w-20 " />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-4 ">
          <li>
            <Typography
              as="a"
              href="#"
              className="font-normal transition-colors hover:text-btn focus:text-btn hover:font-semibold"
            >
              Makeup
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              className="font-normal transition-colors hover:text-btn focus:text-btn hover:font-semibold"
            >
              Lashes
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              className="font-normal transition-colors hover:text-btn focus:text-btn hover:font-semibold"
            >
              Pricing
            </Typography>
          </li>
          <li>
            <Button
              variant="gradient"
              size="sm"
              className="inline-block py-2 px-4 border border-btnHover rounded-md shadow-md text-md font-bold text-white bg-btnHover hover:bg-btn hover:border-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btn"
            >
              <span>Book Now</span>
            </Button>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-title" />

      <div className="flex flex-box justify-between py-2 ">
        <div>
          <Typography className="text-btnHover font-normal tracking-wider">
            PHONE NUMBER: 07376552619
          </Typography>
          <Typography className="text-btnHover font-normal tracking-normal">
            ADDRESS: Str Ion Creanga, Bloc 9, Ap 3
          </Typography>
        </div>

        <div className="inline-flex gap-6 ">
          <a href="https://www.instagram.com/cosminacriss/">
            <BsInstagram className="text-3xl text-btnHover hover:text-btn hover:text-4xl" />
          </a>
          <a href="https://www.facebook.com/cristea.cosmina">
            <BsFacebook className="text-3xl text-btnHover hover:text-btn hover:text-4xl " />
          </a>
          <a href="#">
            <BsFillEnvelopeFill className="text-3xl text-btnHover hover:text-btn hover:text-4xl" />
          </a>
        </div>

        <div>
          <Typography className="text-end font-normal ">
            &copy; 2023 Cosmina Cristea <br /> Makeup & Lash Artist
          </Typography>
        </div>
      </div>
    </footer>
  );
}
