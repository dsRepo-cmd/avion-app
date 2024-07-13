export default function ArrowUpIcon({
  className,
  size = 24,
}: {
  className?: string;
  size?: string | number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      <path d="M12 5v14M18 11l-6-6M6 11l6-6" />
    </svg>
  );
}
