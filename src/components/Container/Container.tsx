import React from "react";

interface Props {
  children: React.ReactNode;
}
function Container({ children }: Props) {
  return <div className=" flex  justify-between p-20">{children}</div>;
}

export default Container;
