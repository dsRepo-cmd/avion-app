"use client";
import SignInIcon from "@/components/icons/SignInIcon";
import SignOutIcon from "@/components/icons/SignOutIcon";
import SignUpIcon from "@/components/icons/SignUpIcon";
import UserAvatarIcon from "@/components/icons/UserAvatarIcon";
import Dropdown, { DropdownItem } from "@/components/shared/Dropdown/Dropdown";
import Typography from "@/components/shared/Typography/Typography";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

function UserDropdown() {
  const session = useSession();

  const items: DropdownItem[] = session.data
    ? [
        {
          id: "1",
          content: (
            <Typography tag="span" size="16px" fontFamily="primary">
              Profile
            </Typography>
          ),
          href: "/profile",
          svg: <UserAvatarIcon size={20} />,
        },
        {
          id: "2",
          content: (
            <Typography tag="span" size="16px" fontFamily="primary">
              Sign Out
            </Typography>
          ),
          onClick: () => signOut({ callbackUrl: "/" }),
          svg: <SignOutIcon size={20} />,
        },
      ]
    : [
        {
          id: "3",
          content: (
            <Typography tag="span" size="16px" fontFamily="primary">
              Sign in
            </Typography>
          ),
          href: "/signin",
          svg: <SignInIcon size={20} />,
        },
        {
          id: "4",
          content: (
            <Typography tag="span" size="16px" fontFamily="primary">
              Sign up
            </Typography>
          ),
          href: "/signup",
          svg: <SignUpIcon size={20} />,
        },
      ];
  return (
    <Dropdown
      className=" w-[210px]"
      items={items}
      trigger={
        <>
          {session?.data ? (
            <Image
              src={session.data.user?.image || ""}
              alt="user avatar"
              width={96}
              height={96}
              className=" w-5 h-5 rounded-full duration-200 hover-hover:hover:scale-[1.2] hover-none:active:scale-[1.2] active:scale-[1]"
            />
          ) : (
            <UserAvatarIcon size={16} />
          )}
        </>
      }
    />
  );
}

export default UserDropdown;
