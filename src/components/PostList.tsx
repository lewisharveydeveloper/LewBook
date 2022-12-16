import { Post } from './Post';

type IPostProps = {
  fullName: string;
  postText: string;
  likes: Array<IPersonRef>;
  profilePicLink: string;
};

type IPersonRef = {
  fullName: string;
  href: string;
};

type PostListProps = {
  posts: IPostProps[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <>
      {posts.map((post, index) => {
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
