import { Post } from '@/components/Post';
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
      <Post
        fullName="Lewis Harvey"
        postText="this is the post text"
        profilePicLink="https://placekitten.com/60/60"
        likes={[
          { fullName: 'Lewis Harvey', href: 'google.com' },
          { fullName: 'John Smith', href: 'google.com' },
        ]}
      ></Post>
    </Main>
  );
};

export default Index;
