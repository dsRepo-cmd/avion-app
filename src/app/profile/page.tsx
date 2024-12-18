import Image from "next/image";
import dynamic from "next/dynamic";
import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";
import Container from "@/components/shared/Container/Container";
import Page from "@/components/shared/Page/Page";
import Typography from "@/components/shared/Typography/Typography";
import ListingsSkeleton from "@/components/shared/ListingsSkeleton/ListingsSkeleton";

const PopularProductListings = dynamic(
  () =>
    import(
      "@/components/features/PopularProductListings/PopularProductListings"
    ),
  {
    ssr: false,
    loading: () => <ListingsSkeleton />,
  }
);
async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <Page>
      <Container bgColor={"light"}>
        <div className=" flex justify-between w-full lg:flex-col gap-10">
          <Typography fontFamily="secondary" size="32px" tag="h2">
            Welcome, {session?.user?.name}
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
