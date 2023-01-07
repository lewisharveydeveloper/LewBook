import { useSelector } from 'react-redux';

import PostList from '@/components/PostList';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { IPostProps, RootState } from '@/types';

const selectPosts = (state: RootState): Array<IPostProps> => state.Posts;

const Index = () => {
  const posts: Array<IPostProps> = useSelector(selectPosts);

  return (
    <Main
      meta={
        <Meta
          title="LewBook"
          description="A very original social media website"
        />
      }
    >
      <h1 className="text-3xl">All Recent Posts</h1>
      <PostList posts={posts}></PostList>
    </Main>
  );
};

export default Index;
