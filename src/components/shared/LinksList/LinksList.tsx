import type { Link } from "@/types/types";
import AppLink from "../AppLink/AppLink";
import Typography from "../Typography/Typography";

interface Props {
  links: Link[];
  title: string;
}

function LinksList({ links, title }: Props) {
  return (
    <div className=" flex flex-col w-full  gap-3 ">
      <Typography
        className=" text-nowrap"
        fontFamily="secondary"
        size="16px"
        color="white"
        tag="h3"
      >
        {title}
      </Typography>
      <ul className=" flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.id}>
            <AppLink variant="clear" className=" text-sm" href={link.href}>
              {link.title}
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinksList;
