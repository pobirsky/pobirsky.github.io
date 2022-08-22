import React from 'react';

const styles = {
  svg: {
    color: 'gray',
    height: '16'
  },
};


const MainLike = () => {
  return (
    <svg
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <path d="M9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path
          clipRule="evenodd"
          d="M15.5 8c0-1-3-5-7.5-5S.5 7 .5 8s3 5 7.5 5 7.5-4 7.5-5zm-4 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default React.memo(MainLike);
