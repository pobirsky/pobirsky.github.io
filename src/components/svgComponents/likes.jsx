import React, { useState } from "react";
import bodyStyles from "../../styles/body.module.css";
import { LikeIconDefault } from "./main.like2";
import { LikeIconActive } from "./main.likeActive";

export function LikeAction() {
  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={bodyStyles.like} onClick={handleClick}>
      {!isLiked ? <LikeIconDefault /> : <LikeIconActive />}
    </div>
  );
}
