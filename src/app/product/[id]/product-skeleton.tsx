import Container from "@/components/shared/Container/Container";
import Divider from "@/components/shared/Divider/Divider";

function ProductSkeleton() {
  return (
    <Container className=" lg:px-0 lg:pt-0" bgColor="white">
      <div className=" flex w-full lg:flex-col ">
        <div
          className="animate-pulse bg-lightGrey w-full rounded "
          style={{
            aspectRatio: "607 / 661",
            maxWidth: "100%",
            height: "auto",
          }}
        ></div>

        <div className=" flex w-full flex-col gap-4 p-14 lg:p-6 ">
          <div className=" h-9 w-full bg-lightGrey rounded animate-pulse "></div>
          <div className=" h-11 w-full bg-lightGrey rounded animate-pulse "></div>
          <Divider />
          <div className=" h-8 w-full bg-lightGrey rounded animate-pulse "></div>
          <div className=" h-24 w-full bg-lightGrey rounded animate-pulse "></div>
          <div className=" h-8 w-full bg-lightGrey rounded animate-pulse "></div>
          <div className=" h-[88px] w-full bg-lightGrey rounded animate-pulse "></div>
          <div className=" h-6 w-full bg-lightGrey rounded animate-pulse "></div>
          <div className=" h-12 w-full bg-lightGrey rounded animate-pulse "></div>
          <div className=" h-14 w-full bg-lightGrey rounded animate-pulse "></div>
        </div>
      </div>
    </Container>
  );
}

export default ProductSkeleton;
