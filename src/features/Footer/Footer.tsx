import { footer } from "@/data/footer";
import Link from "next/link";
import React from "react";
import Typography from "../../components/Typography/Typography";

import Divider from "../../components/Divider/Divider";
import EmailSignUpForm from "../../components/EmailSignUpForm/EmailSignUpForm";
import AppLink from "../../components/AppLink/AppLink";
import Icon from "@/components/Icon/Icon";

function Footer() {
  return (
    <footer className=" flex flex-col gap-6 w-full bg-darkPrimary px-20 pt-20 pb-6 text-white lg:px-6 lg:py-12">
      <div className=" flex justify-between gap-12 lg:flex-col ">
        <div className=" flex w-full gap-36 lg:grid lg:grid-cols-2 lg:gap-6">
          <div className=" flex flex-col w-full  gap-3 ">
            <Typography
              className=" text-nowrap"
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
                  <AppLink
                    variant="clear"
                    className=" text-sm"
                    href={link.href}
                  >
                    {link.title}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex flex-col w-full  gap-3 ">
            <Typography
              className=" text-nowrap"
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
                  <AppLink
                    variant="clear"
                    className=" text-sm"
                    href={link.href}
                  >
                    {link.title}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex flex-col w-full gap-3">
            <Typography
              className=" text-nowrap"
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
                  <AppLink
                    variant="clear"
                    className=" text-sm"
                    href={link.href}
                  >
                    {link.title}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" flex flex-col w-full gap-3 ">
          <Typography fontFamily="secondary" size="16px" color="white" tag="h5">
            {footer.joinUs.title}
          </Typography>

          <EmailSignUpForm variant="dark" className=" w-full " />
        </div>
      </div>

      <Divider />

      <div className=" flex  items-center justify-between lg:justify-center">
        <Typography fontFamily="primary" size="14px" color="white" tag="span">
          {footer.copyright}
        </Typography>

        <ul className=" flex items-center justify-center gap-6 lg:hidden">
          {footer.socialLinks.map((link) => (
            <li key={link.id}>
              <AppLink
                variant="clear"
                className=" duration-200 hover-hover:hover:scale-[1.2] hover-none:active:scale-[1.2]"
                title={link.title}
                href={link.href}
              >
                <Icon width={18} height={18} Svg={link.icon} />
              </AppLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
