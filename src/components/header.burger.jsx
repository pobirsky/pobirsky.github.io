const style = {
  svg: {
    flex: '1 1 auto',
    color: '#6f7985',
    width: '20',
    height: '20',
    margin: '0 5px'
  }
}


export function HeaderBurger() {
  return (
    <svg
      style={style.svg}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
