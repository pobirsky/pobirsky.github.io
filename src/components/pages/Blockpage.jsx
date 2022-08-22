import React, { useCallback, useState } from "react";
import PostList from "../ui/PostList";
import { data } from "../ui/MockData";

const BlockPage = () => {
  const [posts, setPost] = useState(data);

  const createPost = useCallback((newPost) => {
    setPost([...posts, newPost]);
  }, [posts]);

  const removePost = (post) => {
    setPost(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div>
      <PostList create={createPost} posts={posts} remove={removePost} />
    </div>
  );
};

export default React.memo(BlockPage);
