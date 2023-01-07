import type { AnyAction } from '@reduxjs/toolkit';

// lehar this needs to be null, and fetch state
const HomePageState = {
  Posts: [
    {
      createdAt: '2023-01-06T16:25:04.903Z',
      firstName: 'Lewis',
      lastName: 'Harvey',
      postText: 'this is some post text',
      profilePicLink: 'https://placekitten.com/60/60',
      likes: [{ fullName: 'John Smith', href: 'google.com' }],
    },
    {
      createdAt: '2023-01-06T16:25:04.903Z',
      firstName: 'John',
      lastName: 'Smith',
      postText: 'hello world!',
      profilePicLink: 'https://placekitten.com/70/70',
      likes: [{ fullName: 'Sammy Samson', href: 'google.com' }],
    },
  ],
};

// Use the initialState as a default value
// eslint-disable-next-line @typescript-eslint/default-param-last
export default function appReducer(state = HomePageState, action: AnyAction) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
