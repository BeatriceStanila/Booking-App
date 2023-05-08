import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
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
        className="p-1 font-normal"
      >
        <a href="#makeup" className="flex items-center">
          Makeup
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#lashes" className="flex items-center">
          Lashes
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#price" className="flex items-center">
          Price List
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#contact" className="flex items-center">
          Contact Me
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className=" inset-0 z-10 h-max max-w-full rounded-none py-2 px-2 lg:px-8 lg:py-2 bg-base border-none ">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <img src="./logo.svg" alt="logo" className="w-20" />
            <Typography
              as="a"
              href="#"
              className=" cursor-pointer tracking-widest text-logo text-sm font-serif "
            >
              CC | MAKEUP & LASHES
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block bg-btn"
            >
              <span>Book Now</span>
            </Button>
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
            {navList}
            <Button
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2 bg-btn px-3 py-2"
            >
              <span>Book Now</span>
            </Button>
          </Collapse>
        )}
      </Navbar>
    </>
  );
}
