export default function LinkedInIcon({
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
        d="M16.65 0H1.35C.6 0 0 .6 0 1.275V16.65c0 .675.6 1.275 1.35 1.275h15.3c.75 0 1.35-.6 1.35-1.275V1.275C18 .6 17.4 0 16.65 0ZM5.325 15.3H2.7V6.75h2.625v8.55ZM4.05 5.55c-.825 0-1.575-.675-1.575-1.575 0-.9.675-1.575 1.575-1.575.825 0 1.575.675 1.575 1.575 0 .9-.75 1.575-1.575 1.575Zm11.325 9.675H12.75v-4.2c0-.975 0-2.325-1.425-2.325S9.75 9.825 9.75 10.875v4.275H7.125v-8.4H9.6v1.125h.075c.375-.675 1.275-1.425 2.55-1.425 2.7 0 3.225 1.8 3.225 4.125v4.65h-.075Z"
      />
    </svg>
  );
}
