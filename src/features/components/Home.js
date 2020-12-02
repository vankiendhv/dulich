import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Login from "../container/login/Login";
import Menu from "../container/trangchu/menu/Menu";
import Trangchu from './Trangchu'
import Admin from './Admin'
import Dangky from '../container/dangky/Dangky'
import Tour from "../container/detailtour/tour/Tour";
import Tintucdetail from "../container/tintuc/tintucdetail/Tintucdetail";
import Listtour from "../container/Listtour/Listtour";
import Dattour from "../container/detailtour/dattour/Dattour";
import Listtintuc from "../container/tintuc/listtintuc/Listtintuc";
import tintucApi from "../../api/tintucApi";
import firebase from 'firebase';
import { useDispatch } from "react-redux";
import { getMe } from "../../app/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyB62z_vI77NAuEAVE5mQ3Uqu3qag8a7Jos',
  authDomain: 'test-8b330.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

function Empty() {
  return ''
}
function menu(ok) {
  console.log(ok);
}

export default function NestingExample() {
  const [tintuc, settintuc] = useState([]);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchTintucList = async () => {
  //     try {
  //       const res = await tintucApi.getAll();
  //       console.log(res);
  //     } catch (error) {
  //       console.log("loix" + error);
  //     }
  //   }
  //   fetchTintucList();
  // }, []);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("log out");
        return;
      }
      const token = await user.getIdToken();
      localStorage.setItem('token', token);
      const actionResult = await dispatch(getMe());
      // const currentUser = unwrapResult(actionResult);
      console.log(actionResult);
      // console.log("user" + user.displayName);
      // console.log("token" + token);
    }
    );
    return () => unregisterAuthObserver();
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dangnhap" component={Empty} />
          <Route path="/dangky" component={Empty} />
          <Route path="/admin" component={Empty} />
          <Route>
            <Menu />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Trangchu hidemenu={menu} />
          </Route>
          <Route path="/admin">
            <Ladmin />
          </Route>
          <Route path="/dangnhap">
            <Ldangnhap />
          </Route>
          <Route path="/dangky">
            <Dangky />
          </Route>
          <Route path="/listtintuc">
            <Listtintuc />
          </Route>
          <Route path="/tour">
            <Tour />
          </Route>
          <Route path="/detail-new">
            <Tintucdetail />
          </Route>
          <Route path="/list-tour">
            <Listtour />
          </Route>
          <Route path='/dat-tour'>
            <Dattour />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Ldangnhap() {
  let { path, url } = useRouteMatch();
  return (
    <Login url={url} />
  );
}
function Ladmin() {
  let { path, url } = useRouteMatch();
  return <Admin path={path} url={url} />
}