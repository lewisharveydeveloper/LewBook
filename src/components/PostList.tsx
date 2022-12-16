import { useSelector } from 'react-redux';

import { Post } from './Post';

const selectPosts = (state: any) => state.Posts;

const PostList = () => {
  const posts = useSelector(selectPosts);
  return (
    <>
      {posts.map((post: any, index: any) => {
        return (
          <Post
            key={index}
            fullName={post.fullName}
            postText={post.postText}
            profilePicLink={post.profilePicLink}
            likes={post.likes}
          ></Post>
        );
      })}
    </>
  );
};

export default PostList;
