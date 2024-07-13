export default function ChevronDownIcon({
  className,
  size = 8,
}: {
  className?: string;
  size?: string | number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 8 5"
      width={size}
      height={size}
      className={className}
    >
      <path fill="#2A254B" d="M8 0 4 5 0 0h8Z" />
    </svg>
  );
}
