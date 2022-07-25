import React, { useState, useRef } from "react";
import { data } from "./mockData";
import styles from "../../styles/ui.module.css";
import PostItem from "./PostItem";
import MyInput from "./MyInput";

const PostList = () => {
  const [post, setPost] = useState(data);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost  = {
      id: Date.now(),
      title,
      body
    }
    setPost([...post, newPost]);
    setTitle('');
    setBody('');
  }

  return (
    <div>
      {post.map(({ id, title, body }) => {
        return <PostItem key={id} title={title} body={body} />;
      })}
      <div>
        <span className={styles.wrapperPostItem}>Что у вас нового?</span>
        <form>
          <MyInput
            value={title}
            type="text"
            placeholder="Заголовок поста"
            onChange={(e) => setTitle(e.target.value)}
          />
          <MyInput
            value={body}
            type="text"
            placeholder="Основной текст поста"
            onChange={(e) => setBody(e.target.value)}
          />
          <button onClick={addNewPost}>Опубликовать</button>
        </form>
      </div>
    </div>
  );
};

export default PostList;
