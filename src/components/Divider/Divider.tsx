import { type HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}
function Divider({ ...props }: Props) {
  return <div className="  border-b opacity-10" {...props} />;
}

export default Divider;
