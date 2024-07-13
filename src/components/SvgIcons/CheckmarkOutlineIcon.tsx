export default function CheckmarkOutlineIcon({
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
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      <path
        fill="currentColor"
        d="m10.5 16.0605-3.75-3.7508L7.80976 11.25 10.5 13.9395 16.1888 8.25 17.25 9.31125 10.5 16.0605Z"
      />
      <path
        fill="currentColor"
        d="M12 1.5A10.49996 10.49996 0 0 0 1.70176 14.0484a10.49985 10.49985 0 0 0 2.87362 5.3762 10.4993 10.4993 0 0 0 5.37618 2.8736 10.49888 10.49888 0 0 0 6.06664-.5975 10.49957 10.49957 0 0 0 4.7122-3.8672A10.49968 10.49968 0 0 0 22.5 12c0-2.78477-1.1062-5.45549-3.0754-7.42462C17.4555 2.60625 14.7848 1.5 12 1.5ZM12 21c-1.78 0-3.52008-.5278-5.00013-1.5168a8.99983 8.99983 0 0 1-3.82693-9.239 8.99994 8.99994 0 0 1 7.07126-7.07127 9.00033 9.00033 0 0 1 5.2.51215 8.99985 8.99985 0 0 1 4.039 3.31479A8.99955 8.99955 0 0 1 21 12c0 2.3869-.9482 4.6761-2.636 6.364C16.6761 20.0518 14.387 21 12 21Z"
      />
    </svg>
  );
}
