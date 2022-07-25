import React from "react";
import styles from "../../styles/ui.module.css";

const PostItem = (props) => {
  return (
    <div className={styles.post}>
      <div style={{ padding: "25px" }}>
        <h2 id={props.id}>{props.title}</h2>
        <span id={props.id}>{props.body}</span>
      </div>
      <div>
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;
