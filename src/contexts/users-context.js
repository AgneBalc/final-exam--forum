import { createContext, useReducer } from "react";

const UsersContext = createContext();

const initialState = {
  isLoggedIn: false,
  loggedInUser: null,
  users: [],
};

const USERS_ACTIONS = {
  GET: 'get_all_users',
  LOGIN: 'login_user',
  LOGOUT: 'logout_user',
  ADD: 'add_new_user',
}


const UsersProvider = ({ children }) => {
  const [users, dispatchUsers] = useReducer(usersReducer, initialState);

  return (
    <UsersContext.Provider
      value={{
        users,
        dispatchUsers
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export default UsersContext;
export { UsersProvider, USERS_ACTIONS };