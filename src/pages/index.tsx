import PostList from '@/components/PostList';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
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
      <PostList></PostList>
    </Main>
  );
};

export default Index;
