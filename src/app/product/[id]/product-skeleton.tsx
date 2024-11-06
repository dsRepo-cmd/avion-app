import Container from "@/components/shared/Container/Container";
import Divider from "@/components/shared/Divider/Divider";
import Skeleton from "@/components/shared/Skeleton/Skeleton";

function ProductSkeleton() {
  return (
    <Container className=" lg:px-0 lg:pt-0" bgColor="white">
      <div className=" flex w-full lg:flex-col ">
        <Skeleton
          className="w-full rounded "
          style={{
            aspectRatio: "607 / 661",
            maxWidth: "100%",
            height: "auto",
          }}
        />

        <div className=" flex w-full flex-col gap-4 p-14 lg:p-6 ">
          <Skeleton className=" h-9 w-full" />
          <Skeleton className=" h-11 w-full" />
          <Divider />
          <Skeleton className=" h-8 w-full" />
          <Skeleton className=" h-24 w-full" />
          <Skeleton className=" h-8 w-full" />
          <Skeleton className=" h-[88px] w-full" />
          <Skeleton className=" h-6 w-full" />
          <Skeleton className=" h-12 w-full" />
          <Skeleton className=" h-14 w-full" />
        </div>
      </div>
    </Container>
  );
}

export default ProductSkeleton;
