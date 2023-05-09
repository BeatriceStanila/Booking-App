import React, { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold  text-fafa text-md"
      >
        <a href="/#makeup" className="flex  items-center">
          Makeup
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-fafa  font-semibold text-md"
      >
        <a href="/#lashes" className="flex items-center">
          Lashes
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-fafa  font-semibold text-md"
      >
        <a href="/#contact" className="flex items-center scroll-smooth ">
          Contact
        </a>
      </Typography>
    </ul>
  );

  const mobileNavList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold  text-fafa text-md"
        onClick={() => {
          setOpenNav(!openNav);
        }}
      >
        <a href="/#makeup" className="flex  items-center">
          Makeup
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-fafa  font-semibold text-md"
        onClick={() => {
          setOpenNav(!openNav);
        }}
      >
        <a href="/#lashes" className="flex items-center">
          Lashes
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-fafa  font-semibold text-md"
        onClick={() => {
          setOpenNav(!openNav);
        }}
      >
        <a href="/#contact" className="flex items-center scroll-smooth ">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className=" inset-0 z-10 h-max  max-w-full rounded-none py-2 px-2 lg:px-20 lg:py-2 bg-navbar  border-none ">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <img src="./hero.svg" alt="logo" className="w-20" />
            <Typography
              as="a"
              href="/#home"
              className=" cursor-pointer tracking-widest text-white text-md font-semibold font-serif "
            >
              CC | MAKEUP & LASHES
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <a href="/#book" className=" scroll-m-5">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block py-2 px-4 border border-btn rounded-md shadow-md text-md font-bold text-white bg-btn hover:bg-btnHover hover:border-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btnHover"
              >
                <span>Book Now</span>
              </Button>
            </a>
            <IconButton
              variant="text"
              className="h-10 w-20 pb-5 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        {openNav && (
          <Collapse open={openNav}>
            {mobileNavList}
            <a href="/#book">
              <Button
                variant="gradient"
                size="sm"
                fullWidth
                onClick={() => {
                  setOpenNav(!openNav);
                }}
                className="mb-2 text-fafa w-1/3 py-2 px-4 border border-btn rounded-md shadow-md text-md font-bold bg-btn hover:bg-btnHover hover:border-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btnHover"
              >
                <span>Book Now</span>
              </Button>
            </a>
          </Collapse>
        )}
      </Navbar>
    </>
  );
}
