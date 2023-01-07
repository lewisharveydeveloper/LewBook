export type IPostProps = {
  firstName: string;
  lastName: string;
  postText: string;
  likes: Array<IPersonRef>;
  profilePicLink: string;
  createdAt: string;
};

export type IPersonRef = {
  fullName: string;
  href: string;
};

export type RootState = {
  Posts: Array<IPostProps>;
  // other properties lehar
};
