import Container from "@/components/Container/Container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Container>
        <div className=" flex">
          <div className=" w-2/3 h-full bg-darkPrimary">
            <h2 className=" text-white font-second text-3xl">
              The furniture brand for the future, with timeless designs
            </h2>
          </div>
        </div>
      </Container>
    </main>
  );
}
