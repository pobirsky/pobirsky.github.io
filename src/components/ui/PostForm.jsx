import React, {useCallback, useState} from "react";
import MyInput from "./MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = useCallback((e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    console.log(newPost)
    create(newPost);
    setPost({ title: "", body: "" });
  },[post, create])

  return (
    <form>
      <MyInput
        value={post.title}
        type="text"
        placeholder="Заголовок поста"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        value={post.body}
        type="text"
        placeholder="Основной текст поста"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <button onClick={addNewPost}>Опубликовать</button>
    </form>
  );
};

export default PostForm;
