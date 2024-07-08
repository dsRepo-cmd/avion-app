import AppLink from "@/components/AppLink/AppLink";
import Icon from "@/components/Icon/Icon";
import LinkedinIcon from "@/assets/linkedin.svg";
import FacebookIcon from "@/assets/facebook.svg";
import InstagramIcon from "@/assets/instagram.svg";
import SkypeIcon from "@/assets/skype.svg";
import TwitterIcon from "@/assets/twitter.svg";
import PinterestIcon from "@/assets/pinterest.svg";

const socialLinks = [
  {
    id: "linkedin",
    title: "Linkedin",
    icon: LinkedinIcon,
    href: "#",
  },
  {
    id: "facebook",
    title: "Facebook",
    icon: FacebookIcon,
    href: "#",
  },
  {
    id: "instagram",
    title: "Instagram",
    icon: InstagramIcon,
    href: "#",
  },
  {
    id: "skype",
    title: "Skype",
    icon: SkypeIcon,
    href: "#",
  },
  {
    id: "twitter",
    title: "Twitter",
    icon: TwitterIcon,
    href: "#",
  },
  {
    id: "pinterest",
    title: "Pinterest",
    icon: PinterestIcon,
    href: "#",
  },
];
function SocialLinks() {
  return (
    <ul className=" flex items-center justify-center gap-6 lg:hidden">
      {socialLinks.map((link) => (
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
  );
}

export default SocialLinks;
