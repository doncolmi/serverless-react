import { iUser } from "./interfaces/iUser";

const SETUSERINFO = "user/SETUSERINFO" as const;
const LOGOUTUSER = "user/LOGOUTUSER" as const;

export const setUserInfo = (user: iUser) => ({
  type: SETUSERINFO,
  payload: user,
});
export const logoutUser = () => ({ type: LOGOUTUSER });

type UserAction =
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof logoutUser>;

const initialState: iUser = {
  isLogin: false,
  uuid: "",
  name: "",
  createdDate: new Date(),
  modifiedDate: new Date(),
  isChangeName: false,
  isViewReply: false,
};

function users(state: iUser = initialState, action: UserAction): iUser {
  switch (action.type) {
    case SETUSERINFO:
      return action.payload;
    case LOGOUTUSER:
      return state;
    default:
      return state;
  }
}

export default users;
