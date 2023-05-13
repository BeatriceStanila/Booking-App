import { Typography } from "@material-tailwind/react";
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
      <div className="flex flex-row flex-wrap mx-5 items-center gap-y-6 gap-x-12 text-center justify-between ">
        <a href="/#">
          <img
            src="./hero.svg"
            alt="logo-ct"
            className="w-20 transform hover:scale-125"
          />
        </a>
        <div className="inline-flex gap-6 items-end">
          <a
            href="https://www.instagram.com/cosminacriss/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="text-3xl text-btnHover hover:text-btn transform hover:scale-125" />
          </a>
          <a
            href="https://www.facebook.com/cristea.cosmina"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="text-3xl text-btnHover hover:text-btn transform hover:scale-125 " />
          </a>
          <a
            href="mailto:criss.cosmina97@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <BsFillEnvelopeFill className="text-3xl text-btnHover hover:text-btn transform hover:scale-125" />
          </a>
        </div>
      </div>
      <hr className="my-8 border-title" />

      <div className="m-5 flex justify-between py-5">
        <div>
          <div className="inline-flex gap-3 items-center">
            <BsFillTelephoneFill className="text-btnHover text-2xl" />
            <Typography className=" pr-6 text-lg font-semibold text-btnHover ">
              0729438312
            </Typography>
          </div>
          <div className="inline-flex gap-3 items-center">
            <BsPinMapFill className="text-btnHover text-2xl" />
            <Typography className="text-lg font-semibold text-btnHover pr-2">
              <a
                href="https://www.google.com/maps/place/Strada+Ion+Creang%C4%83,+Hunedoara,+Romania/@45.7557472,22.8964857,15z/data=!3m1!4b1!4m6!3m5!1s0x474e8a5f0be6951b:0x7e32d74997a9accf!8m2!3d45.7557477!4d22.9067854!16s%2Fg%2F1tfc0t8w"
                target="_blank"
                rel="noreferrer"
              >
                Str Ion Creanga, Hunedoara
              </a>
            </Typography>
          </div>
        </div>

        <div className="inline-flex gap-6 items-center">
          <Typography className="text-sm text-btnHover">
            © Copyrights 2023 Beatrice Stanila
          </Typography>
        </div>
      </div>
    </footer>
  );
}
