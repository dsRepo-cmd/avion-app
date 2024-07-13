export default function PurchaseIcon({
  className,
  size = 18,
}: {
  className?: string;
  size?: string | number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      <path
        fill="currentColor"
        d="M21 4.5H3A1.50002 1.50002 0 0 0 1.5 6v12c0 .3978.15804.7794.43934 1.0607S2.60218 19.5 3 19.5h18c.3978 0 .7794-.158 1.0607-.4393A1.5001 1.5001 0 0 0 22.5 18V6c0-.39782-.158-.77936-.4393-1.06066A1.50015 1.50015 0 0 0 21 4.5ZM21 6v2.25H3V6h18ZM3 18V9.75h18V18H3Z"
      />
      <path fill="currentColor" d="M12 15H4.5v1.5H12V15Z" />
    </svg>
  );
}
