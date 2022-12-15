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
      <h1 className="text-2xl">All Recent Posts</h1>
      <p>All Recent Posts</p>
    </Main>
  );
};

export default Index;
