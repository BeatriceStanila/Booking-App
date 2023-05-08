import { Typography, Button } from "@material-tailwind/react";
import {
  BsInstagram,
  BsFacebook,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsPinMapFill,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-8 px-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center lg:justify-between ">
        <a href="/#">
          <img src="./hero.svg" alt="logo-ct" className="w-20 " />
        </a>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-4 ">
          <li>
            <Typography
              as="a"
              href="/#makeup"
              className="font-normal transition-colors hover:text-btn focus:text-btn hover:font-semibold"
            >
              Makeup
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/#lashes"
              className="font-normal transition-colors hover:text-btn focus:text-btn hover:font-semibold"
            >
              Lashes
            </Typography>
          </li>

          <li>
            <a href="/#book">
              <Button
                variant="gradient"
                size="sm"
                className="inline-block py-2 px-4 border border-btnHover rounded-md shadow-md text-md font-bold text-white bg-btnHover hover:bg-btn hover:border-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btn"
              >
                <span>Book Now</span>
              </Button>
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-title" />

      <div className="flex flex-box justify-between py-2 ">
        <div className="flex-inline">
          <Typography className="text-btnHover text-2xl font-normal tracking-wider">
            <BsFillTelephoneFill />
          </Typography>
          <Typography>0729438312</Typography>

          <Typography className="text-btnHover text-2xl font-normal tracking-normal">
            <BsPinMapFill />
          </Typography>
          <Typography className="text-md text-btnHover">Ion Creanga</Typography>
        </div>

        <div className="inline-flex gap-6 ">
          <a
            href="https://www.instagram.com/cosminacriss/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="text-3xl text-btnHover hover:text-btn hover:text-4xl" />
          </a>
          <a
            href="https://www.facebook.com/cristea.cosmina"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="text-3xl text-btnHover hover:text-btn hover:text-4xl " />
          </a>
          <a
            href="mailto:criss.cosmina97@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
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
