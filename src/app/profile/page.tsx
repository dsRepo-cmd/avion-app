import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";

async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <main className="flex  flex-col items-center justify-between  max-w-[1440px] m-auto">
      <Container>
        <Typography tag="h2">{session?.user?.email}</Typography>
        <Typography tag="h2">{session?.user?.name}</Typography>
      </Container>
    </main>
  );
}

export default Profile;
