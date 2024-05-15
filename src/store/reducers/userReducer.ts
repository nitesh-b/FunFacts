export interface User {
  type: String;
  name: String;
}

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    type: '',
    name: '',
  },
};

const userReducer = (state: UserState = initialState, action: User) => {

  switch(action.type){
    case "CHANGE_NAME":
      return {[...state, action]}

    return 
  }
 return state
};

export default userReducer;
