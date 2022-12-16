import PostList from '@/components/PostList';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const HomePageState = {
    Posts: [
      {
        fullName: 'Lewis Harvey',
        postText: 'this is some post text',
        profilePicLink: 'https://placekitten.com/60/60',
        likes: [{ fullName: 'John Smith', href: 'google.com' }],
      },
      {
        fullName: 'John Smith',
        postText: 'hello world!',
        profilePicLink: 'https://placekitten.com/70/70',
        likes: [{ fullName: 'Sammy Samson', href: 'google.com' }],
      },
    ],
  };
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
      <PostList posts={HomePageState.Posts}></PostList>
    </Main>
  );
};

export default Index;
