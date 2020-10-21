import React, { useEffect } from "react";
import "./App.css";

import axios, { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "./modules";

import { useDispatch } from "react-redux";
import { setUserInfo } from "./modules/user";
import { iUser } from "./modules/interfaces/iUser";

import Header from "./systems/Header/Header";
import Main from "./pages/Main";
import NewsList from "./pages/News/NewsList";
import NewsDetail from "./pages/News/NewsDetail";
import Info from "./pages/Info/Info";

function App() {
  const JWT_EXPIRY_TIME = 24 * 3600 * 1000;
  const cName = `${process.env["REACT_APP_COOKIE_NAME"]}`;
  const cId = `${process.env["REACT_APP_CLIENT_ID"]}`;
  const cSecret = `${process.env["REACT_APP_CLIENT_SECRET"]}`;

  const state = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const doSetUserInfo = (user: iUser) => {
    dispatch(setUserInfo(user));
  };

  const [cookies] = useCookies([cName]);

  const refreshUrl = `https://kauth.kakao.com/oauth/token?grant_type=refresh_token&client_id=${cId}&refresh_token=${cookies[cName]}&client_secret=${cSecret}`;
  const loginUrl = `${process.env["REACT_APP_API_SERVER"]}/v1/auth/login`;

  const onLogin = () => {
    axios
      .post(refreshUrl)
      .then(onLoginSuccess)
      .catch((err) => {});
  };

  const onLoginSuccess = async (response: AxiosResponse) => {
    if (response.data.access_token) {
      const access_token = `Bearer ${response.data.access_token}`;
      axios.defaults.headers.common["Authorization"] = access_token;
      const { status, data } = await axios.get(loginUrl);
      if (status === 200) {
        const userData: iUser = {
          isLogin: true,
          uuid: data.uuid,
          name: data.name,
          createdDate: new Date(data.createdDate),
          modifiedDate: new Date(data.modifiedDate),
          isChangeName: data.isChangeName,
          isViewReply: data.isViewReply,
        };
        await doSetUserInfo(userData);
      }
      setTimeout(onLogin, JWT_EXPIRY_TIME - 60000);
    }
  };

  useEffect(() => {
    if (!state.isLogin && cookies[cName]) {
      onLogin();
    }
  });

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/news" component={NewsList} />
          <Route exact path="/news/:newsId" component={NewsDetail} />
          <Route exact path="/info" component={Info} />
        </Switch>
        <footer>
          <p>Copyright 뭐라쓸지고민중. All rights reserved.</p>
          <address>
            Contact webmaster for more information. wowtnnk@gmail.com
          </address>
        </footer>
      </div>
    </Router>
  );
}

export default App;
