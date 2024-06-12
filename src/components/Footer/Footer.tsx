import { footer } from "@/data/footer";
import Link from "next/link";
import React from "react";
import Typography from "../Typography/Typography";

import Divider from "../Divider/Divider";
import EmailSignUpForm from "../InputForm/EmailSignUpForm";

function Footer() {
  return (
    <footer className=" flex flex-col gap-6 w-full bg-darkPrimary px-20 pt-20 pb-6 text-white">
      <div className=" flex justify-between">
        <div className=" flex w-full gap-36">
          <div className=" flex flex-col gap-3">
            <Typography
              fontFamily="secondary"
              size="16px"
              color="white"
              tag="h5"
            >
              {footer.menu.title}
            </Typography>
            <ul className=" flex flex-col gap-3">
              {footer.menu.links.map((link) => (
                <li key={link.id}>
                  <Link className=" font-primary text-sm" href={link.href}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex flex-col gap-3">
            <Typography
              fontFamily="secondary"
              size="16px"
              color="white"
              tag="h5"
            >
              {footer.categories.title}
            </Typography>
            <ul className=" flex flex-col gap-3">
              {footer.categories.links.map((link) => (
                <li key={link.id}>
                  <Link className=" font-primary text-sm" href={link.href}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex flex-col gap-3">
            <Typography
              fontFamily="secondary"
              size="16px"
              color="white"
              tag="h5"
            >
              {footer.ourCompany.title}
            </Typography>
            <ul className=" flex flex-col gap-3">
              {footer.ourCompany.links.map((link) => (
                <li key={link.id}>
                  <Link className=" font-primary text-sm" href={link.href}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" flex flex-col w-full gap-3 ">
          <Typography fontFamily="secondary" size="16px" color="white" tag="h5">
            {footer.joinUs.title}
          </Typography>

          <EmailSignUpForm variant="dark" className=" w-full" />
        </div>
      </div>

      <Divider />

      <div className=" flex  items-center justify-between">
        <Typography fontFamily="primary" size="14px" color="white" tag="span">
          {footer.copyright}
        </Typography>

        <ul className=" flex items-center justify-center gap-6">
          {footer.socialLinks.map((link) => (
            <li key={link.id}>
              <Link title={link.title} href={link.href} target="_blank">
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;