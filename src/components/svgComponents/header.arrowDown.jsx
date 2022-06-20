const style = {
  svg: {
    width: '20',
    height: '20',
    color: '#6f7985',
  },
};

export function HeaderArrowDown() {
  return (
    <svg
      style={style.svg}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
    </svg>
  );
}
