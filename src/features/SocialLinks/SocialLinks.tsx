import AppLink from "@/components/AppLink/AppLink";

const socialLinks = [
  {
    id: "linkedin",
    title: "Linkedin",
    href: "#",
  },
  {
    id: "facebook",
    title: "Facebook",
    href: "#",
  },
  {
    id: "instagram",
    title: "Instagram",
    href: "#",
  },
  {
    id: "skype",
    title: "Skype",
    href: "#",
  },
  {
    id: "twitter",
    title: "Twitter",
    href: "#",
  },
  {
    id: "pinterest",
    title: "Pinterest",
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
            <svg width={18} height={18} className={"  text-white "}>
              <use href={`/svg/social-links.svg#${link.id}`} />
            </svg>
          </AppLink>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
