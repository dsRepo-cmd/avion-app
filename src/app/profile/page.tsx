import Container from "@/components/Container/Container";
import Page from "@/components/Page/Page";
import Typography from "@/components/Typography/Typography";
import { authConfig } from "@/configs/auth";
import PopularProductListings from "@/features/PopularProductListings/PopularProductListings";
import { getServerSession } from "next-auth";
import Image from "next/image";

async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <Page>
      <Container className="">
        <div className=" flex justify-between w-full">
          <Typography fontFamily="secondary" size="32px" tag="h2">
            Welcome {session?.user?.name}
          </Typography>
          <div className=" flex items-center gap-4">
            <div>
              <Image
                className=" rounded-full"
                src={
                  session?.user?.image
                    ? session.user.image
                    : "/google-square.svg"
                }
                alt={session?.user?.name ? session.user.name : "user-avatar"}
                width={20}
                height={20}
              />
            </div>

            <Typography fontFamily="primary" size="20px" tag="h2">
              {session?.user?.email}
            </Typography>
          </div>
        </div>
      </Container>

      <PopularProductListings />
    </Page>
  );
}

export default Profile;
