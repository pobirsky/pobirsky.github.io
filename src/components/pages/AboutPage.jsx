import Tabs from "../ui/Tabs";
import React from "react";

const News = () => {
  return (
    <div>
      <h1>Горячие новости</h1>
      <p>Здесь некоторые новости</p>
      <Tabs/>
    </div>
  )
}

export default React.memo(News);
