export default function EyeIcon({
  className,
  size = 22,
}: {
  className?: string;
  size?: string | number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 22"
      width={size}
      height={size}
      className={className}
    >
      <path
        stroke="currentColor"
        d="M2.93385 11.7191a1.49838 1.49838 0 0 1 .00002-1.4383C4.49167 7.43236 7.51974 5.5 11 5.5c3.4803 0 6.5084 1.93242 8.0661 4.7809.2452.4483.2452.99 0 1.4383C17.5083 14.5676 14.4803 16.5 11 16.5c-3.48025 0-6.50836-1.9324-8.06615-4.7809Z"
      />
      <circle cx="11" cy="11" r="2.75" stroke="currentColor" />
    </svg>
  );
}
