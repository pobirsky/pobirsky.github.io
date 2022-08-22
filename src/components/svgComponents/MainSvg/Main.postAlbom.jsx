import bodyStyles from "../../../styles/body.module.css";

import React from 'react';

const MainPostAlbom = () => {
  return (
    <img className={bodyStyles.invadis} src={require("../../../img/invadis.png")} alt="post_albm"/>
  );
};

export default React.memo(MainPostAlbom);
