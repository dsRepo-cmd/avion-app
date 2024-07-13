import AppLink from "@/components/shared/AppLink/AppLink";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import PinterestIcon from "@/components/icons/PinterestIcon";
import SkypeIcon from "@/components/icons/SkypeIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";

const socialLinks = [
  {
    id: "linkedin",
    title: "Linkedin",
    icon: <LinkedInIcon size={18} />,
    href: "#",
  },
  {
    id: "facebook",
    title: "Facebook",
    icon: <FacebookIcon size={18} />,
    href: "#",
  },
  {
    id: "instagram",
    title: "Instagram",
    icon: <InstagramIcon size={18} />,
    href: "#",
  },
  {
    id: "skype",
    title: "Skype",
    icon: <SkypeIcon size={18} />,
    href: "#",
  },
  {
    id: "twitter",
    title: "Twitter",
    icon: <TwitterIcon size={18} />,
    href: "#",
  },
  {
    id: "pinterest",
    title: "Pinterest",
    icon: <PinterestIcon size={18} />,
    href: "#",
  },
];
function SocialLinks() {
  return (
    <ul className=" flex items-center justify-center gap-6 lg:hidden">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <AppLink variant="clear-zommed" title={link.title} href={link.href}>
            {link.icon}
          </AppLink>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
