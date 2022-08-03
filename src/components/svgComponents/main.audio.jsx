import bodyStyles from "../../styles/body.module.css";


export function MainAudio() {
  return (
    <svg
      className={bodyStyles.play}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M12 24a12 12 0 100-24 12 12 0 000 24zm5.02-11.13c.64-.39.64-1.36 0-1.74l-6.6-4C9.77 6.75 9 7.23 9 8v8c0 .76.78 1.25 1.41.87z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}
