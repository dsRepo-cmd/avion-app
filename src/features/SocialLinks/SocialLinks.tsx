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
    id: "17",
    title: "Linkedin",
    href: "#",
    icon: LinkedinIcon,
  },
  {
    id: "18",
    title: "Facebook",
    href: "#",
    icon: FacebookIcon,
  },
  {
    id: "19",
    title: "Instagram",
    href: "#",
    icon: InstagramIcon,
  },
  {
    id: "20",
    title: "Skype",
    href: "#",
    icon: SkypeIcon,
  },
  {
    id: "21",
    title: "Twitter",
    href: "#",
    icon: TwitterIcon,
  },
  {
    id: "22",
    title: "Pinterest",
    href: "#",
    icon: PinterestIcon,
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
