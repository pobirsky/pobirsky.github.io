import bodyStyles from "../../../styles/body.module.css";

import React from 'react';

const ImgVin = () => {
  return (
    <img className={bodyStyles.imgVinyl} src={require("../../../img/sample.png")} alt="sample" />
  );
};

export default React.memo(ImgVin);
