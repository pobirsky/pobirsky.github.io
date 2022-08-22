import React, { useCallback, useState } from "react";
import bodyStyles from "../../styles/body.module.css";
import { LikeIconDefault } from "./MainSvg/Main.like2";
import { LikeIconActive } from "./MainSvg/Main.likeActive";

const LikeAction = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handleClick = useCallback(() => {
    setIsLiked(!isLiked);
  }, [isLiked]);

  return (
    <div className={bodyStyles.like} onClick={handleClick}>
      {!isLiked ? <LikeIconDefault /> : <LikeIconActive />}
    </div>
  );
};

export default React.memo(LikeAction);
