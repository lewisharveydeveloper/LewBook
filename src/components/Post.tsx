import React from 'react';

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

const Post = (props: IPostProps) => {
  // lehar, this needs to be changed to the current users name
  const currentUserName = 'Lewis Harvey';
  return (
    <div key={1} className="mb-4 rounded-lg border-2 border-gray-400 p-5">
      <div className="flex items-center">
        <img
          className="w-10 rounded-full sm:w-14"
          alt="profile pic"
          src={props.profilePicLink}
        ></img>
        <span className="ml-5 text-lg sm:text-2xl">{props.fullName}</span>
      </div>
      <p className="text-xl">{props.postText}</p>
      <div className="flex items-center">
        <img alt="profile pic" className="mr-2 w-6" src="/icon-heart.svg"></img>
        {props.likes.map((like, index) => {
          return (
            <React.Fragment key={index}>
              <a href={like.href}>
                <span className="text-purple-700">
                  {like.fullName === currentUserName && 'You'}
                  {like.fullName !== 'Lewis Harvey' && like.fullName}
                </span>
              </a>
              {index !== props.likes.length - 1 && ', '}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export { Post };
