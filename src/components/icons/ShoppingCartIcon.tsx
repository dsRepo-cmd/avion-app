export default function ShoppingCartIcon({
  className,
  size = 16,
}: {
  className?: string;
  size?: string | number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      className={className}
    >
      <path
        fill="#2A254B"
        d="M5 15c.55228 0 1-.4477 1-1s-.44772-1-1-1-1 .4477-1 1 .44772 1 1 1ZM12 15c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1ZM14 3.50001H2.91l-.41-2.1a.50003.50003 0 0 0-.5-.4H0v1h1.59L3.5 11.6a.49978.49978 0 0 0 .17757.2905A.49974.49974 0 0 0 4 12h9v-1H4.41L4 9.00001h9a.49971.49971 0 0 0 .3197-.1056.49987.49987 0 0 0 .1803-.2844l1-4.5a.49943.49943 0 0 0-.0011-.22523A.5001.5001 0 0 0 14 3.50001Zm-1.4 4.5H3.81l-.7-3.5h10.265l-.775 3.5Z"
      />
    </svg>
  );
}
