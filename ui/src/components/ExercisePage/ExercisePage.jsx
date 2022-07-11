import * as React from "react";
import "./ExercisePage.css";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

export default function ExercisePage(props) {
  return (
    <div className="exercise-page">
      {props.user.email ? (
        <main>
          <div className="banner">
            <h1>Exercise</h1>
          </div>
        </main>
      ) : (
        <LoginForm user={props.user} setUser={props.setUser}></LoginForm>
      )}
    </div>
  );
}
