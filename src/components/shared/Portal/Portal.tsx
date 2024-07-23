"use client";

import * as React from "react";
import { createPortal } from "react-dom";

type MountId = "header";

interface PortalProps extends React.PropsWithChildren {
  mountId?: MountId;
}

export default function Portal({ children, mountId }: PortalProps) {
  const [mounted, setMounted] = React.useState(false);
  const [mountElement, setMountElement] = React.useState<HTMLElement | null>(
    null
  );

  React.useEffect(() => {
    setMounted(true);
    if (mountId) {
      setMountElement(document.getElementById(mountId));
    } else {
      setMountElement(document.body);
    }
  }, [mountId]);

  return mounted && mountElement
    ? createPortal(<>{children}</>, mountElement)
    : null;
}
