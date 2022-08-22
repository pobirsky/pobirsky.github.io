import React from 'react';

const Ball = () => {
  return (
    <img
      width="64"
      height="64"
      src="https://vk.com/images/gift/19/96.png"
      alt="Футбольный мяч"
    />
  );
};

export default React.memo(Ball);
