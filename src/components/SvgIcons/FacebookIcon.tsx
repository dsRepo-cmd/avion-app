export default function FacebookIcon({
  className,
  size = 18,
}: {
  className?: string;
  size?: string | number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      width={size}
      height={size}
      className={className}
    >
      <path
        fill="currentColor"
        d="M17.0025 0H.9975A1.005 1.005 0 0 0 0 .9975v16.005c.00196.2639.10769.5165.29433.7032.18664.1866.43922.2923.70317.2943H9.615v-6.96h-2.34V8.3175h2.34V6.315c0-2.325 1.4175-3.5925 3.5025-3.5925.6975 0 1.395 0 2.0925.105V5.25h-1.4325c-1.1325 0-1.35.54-1.35 1.3275V8.31h2.7l-.3525 2.7225h-2.3475V18h4.575c.2639-.002.5165-.1077.7032-.2943.1866-.1867.2923-.4393.2943-.7032V.9975a1.00532 1.00532 0 0 0-.2943-.70317A1.00525 1.00525 0 0 0 17.0025 0Z"
      />
    </svg>
  );
}
