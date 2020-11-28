import { createContext } from 'react';

export const initialUser = {
  _id: undefined,
  name: undefined,
  email: undefined,
  token: undefined,
  role: 2,
};

const UserContext = createContext({
  userData: initialUser,
  setUserData: () => {},
});

export default UserContext;
