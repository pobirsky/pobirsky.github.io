const style = {
  svg: {
    width: "20",
    height: "30",
    color: "#5181b8",
  },
};

export function VkPay() {
  return (
    <svg
      style={style.svg}
      fill="none"
      height="30"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        cliprule="evenodd"
        d="M10 17a7 7 0 110-14 7 7 0 010 14zm-8.5-7a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0zm7.25-4a.75.75 0 00-.75.75v3h-.25a.75.75 0 000 1.5H8V12h-.25a.75.75 0 000 1.5H8v.5a.75.75 0 001.5 0v-.5H11a.75.75 0 000-1.5H9.5v-.75h1.63a2.63 2.63 0 000-5.25zm2.38 3.75H9.5V7.5h1.63a1.13 1.13 0 010 2.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}
