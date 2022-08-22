import React from "react";
import styles from "../../styles/ui.module.css";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const PostList = ({create, posts, remove}) => {
  return (
    <div>
      {posts.map((post, index) => {
        return <PostItem key={post.id} post={post} remove={remove}/>;
      })}
      <div>
        <span className={styles.wrapperPostItem}>Что у вас нового?</span>
        <PostForm create={create}/>
      </div>
    </div>
  );
};

export default React.memo(PostList);
