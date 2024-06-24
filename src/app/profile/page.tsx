import Container from "@/components/Container/Container";
import Page from "@/components/Page/Page";
import Typography from "@/components/Typography/Typography";
import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <Page>
      <Container className=" gap-5 justify-start">
        <div className=" flex justify-between w-full">
          <Typography size="24px" tag="h2">
            Wellcome {session?.user?.name}
          </Typography>
          <div className=" flex gap-4 items-top">
            <div className=" rounded-full overflow-hidden self-center">
              <Image
                src={
                  session?.user?.image
                    ? session.user.image
                    : "/google-square.svg"
                }
                alt={session?.user?.name ? session.user.name : "user-avatar"}
                width={22}
                height={22}
              />
            </div>
            <Typography size="20px" tag="h2">
              {session?.user?.email}
            </Typography>
          </div>
        </div>
      </Container>
    </Page>
  );
}

export default Profile;
