export interface iUser {
  isLogin: boolean;
  uuid: string;
  name: string;
  createdDate: Date;
  modifiedDate: Date;
  isChangeName: boolean;
  isViewReply: boolean;
}
