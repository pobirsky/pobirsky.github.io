const styles = {
  svg: {
    color: "gray",
  },
};

export function Share() {
  return (
    <svg
      style={styles.svg}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M12 3.73c-1.12.07-2 1-2 2.14v2.12h-.02a9.9 9.9 0 00-7.83 10.72.9.9 0 001.61.46l.19-.24a9.08 9.08 0 015.84-3.26l.2-.03.01 2.5a2.15 2.15 0 003.48 1.69l7.82-6.14a2.15 2.15 0 000-3.38l-7.82-6.13c-.38-.3-.85-.46-1.33-.46zm.15 1.79c.08 0 .15.03.22.07l7.82 6.14a.35.35 0 010 .55l-7.82 6.13a.35.35 0 01-.57-.28V14.7a.9.9 0 00-.92-.9h-.23l-.34.02c-2.28.14-4.4.98-6.12 2.36l-.17.15.02-.14a8.1 8.1 0 016.97-6.53.9.9 0 00.79-.9V5.87c0-.2.16-.35.35-.35z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}
