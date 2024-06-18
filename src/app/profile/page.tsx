import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <main className="flex  flex-col justify-between  max-w-[1440px]">
      <Container className=" gap-5">
        <Image
          src={session?.user?.image ? session.user.image : "/google-square.svg"}
          alt={session?.user?.name ? session.user.name : "user-avatar"}
          width={96}
          height={96}
        />
        <Typography size="32px" tag="h2">
          {session?.user?.email}
        </Typography>
        <Typography size="24px" tag="h2">
          {session?.user?.name}
        </Typography>
      </Container>
    </main>
  );
}

export default Profile;
