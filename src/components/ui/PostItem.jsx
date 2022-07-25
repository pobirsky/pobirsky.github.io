import React from "react";
import styles from "../../styles/ui.module.css";

const PostItem = ({post, remove}) => {
    return(
      <div className={styles.post}>
        <div style={{ padding: "15px" }}>
          <h2 id={post.id}>{post.title}</h2>
          <span id={post.id}>{post.body}</span>
        </div>
        <div className="postBtn">
          <button onClick={() => remove(post)}>Удалить</button>
        </div>
      </div>
    );
};

export default PostItem;
