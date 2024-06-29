import React from "react";
import Typography from "../../components/Typography/Typography";
import Divider from "../../components/Divider/Divider";
import EmailSignUpForm from "../../components/EmailSignUpForm/EmailSignUpForm";
import SocialLinks from "../SocialLinks/SocialLinks";
import LinksList from "@/components/LinksList/LinksList";
import { categories, copyright, joinUs, menu, ourCompany } from "./data";

function Footer() {
  return (
    <footer className=" flex flex-col gap-6 w-full bg-darkPrimary px-20 pt-20 pb-6 text-white lg:px-6 lg:py-12">
      <div className=" flex justify-between gap-12 lg:flex-col ">
        <div className=" flex w-full gap-36 lg:grid lg:grid-cols-2 lg:gap-6">
          <LinksList title={menu.title} links={menu.links} />
          <LinksList title={categories.title} links={categories.links} />
          <LinksList title={ourCompany.title} links={ourCompany.links} />
        </div>

        <div className=" flex flex-col w-full gap-3 ">
          <Typography fontFamily="secondary" size="16px" color="white" tag="h5">
            {joinUs.title}
          </Typography>

          <EmailSignUpForm variant="dark" className=" w-full " />
        </div>
      </div>

      <Divider />

      <div className=" flex  items-center justify-between lg:justify-center">
        <Typography fontFamily="primary" size="14px" color="white" tag="span">
          {copyright}
        </Typography>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;
