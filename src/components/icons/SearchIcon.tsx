export default function SearchIcon({
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
      width={size}
      height={size}
      className={className}
    >
      <path
        fill="#2A254B"
        d="m14.5001 13.7929-3.776-3.776c.9073-1.08932 1.3598-2.48652 1.2632-3.90094-.0965-1.41443-.7347-2.73717-1.7816-3.69308A5.50907 5.50907 0 0 0 6.36612.98372a5.5088 5.5088 0 0 0-3.77019 1.61209A5.5088 5.5088 0 0 0 .98385 6.366 5.50874 5.50874 0 0 0 2.423 10.2055c.95591 1.047 2.27865 1.6852 3.69308 1.7817a5.50842 5.50842 0 0 0 3.90092-1.2633L13.7931 14.5l.707-.7071ZM2.00012 6.5a4.49997 4.49997 0 0 1 2.77792-4.15746 4.49998 4.49998 0 0 1 4.90406.97548 4.50081 4.50081 0 0 1 1.2316 2.30407 4.50004 4.50004 0 0 1-1.91352 4.61951A4.49974 4.49974 0 0 1 6.50012 11a4.505 4.505 0 0 1-4.5-4.5Z"
      />
    </svg>
  );
}
