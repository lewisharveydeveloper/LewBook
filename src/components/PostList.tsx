import type { IPostProps } from '@/types';

import { Post } from './Post';

const PostList = ({ posts }: { posts: Array<IPostProps> }) => {
  return (
    <>
      {posts &&
        posts.map((post: IPostProps, index: number) => {
          return (
            <Post
              key={index}
              createdAt={post.createdAt}
              firstName={post.firstName}
              lastName={post.lastName}
              postText={post.postText}
              profilePicLink={post.profilePicLink}
              likes={post.likes}
            ></Post>
          );
        })}
      <span>test</span>
    </>
  );
};

export default PostList;
