import * as React from "react";
import "./SleepPage.css";
import { userState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

export default function SleepPage(props) {
  return (
    <div className="sleep-page">
      {props.user.email ? (
        <main>
          <div className="banner">
            <h1>Sleep</h1>
          </div>
        </main>
      ) : (
        <LoginForm user={props.user} setUser={props.setUser}></LoginForm>
      )}
    </div>
  );
}
