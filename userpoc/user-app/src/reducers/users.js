const initalState = {
  userList: []
}

export function usersReducer(state = initalState, action) {
  let { type } = action;
  switch (type) {
    case 'LOAD_USERS_SUCCESS': {
      let { users } = action;
      return { ...state, userList: users }
    }
    default:
      return state;
  }
}