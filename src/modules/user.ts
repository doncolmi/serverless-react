import { iUser } from "./interfaces/iUser";

const SETUSERINFO = "user/SETUSERINFO" as const;

export const setUserInfo = (user: iUser) => ({
  type: SETUSERINFO,
  payload: user,
});

type UserAction = ReturnType<typeof setUserInfo>;

type UserState = iUser;

const initialState: UserState = {
  isLogin: false,
  uuid: "",
  name: "",
  createdDate: new Date(),
  isChangeName: false,
  isViewReply: false,
};

function users(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case SETUSERINFO:
      return action.payload;
    default:
      return state;
  }
}

export default users;
