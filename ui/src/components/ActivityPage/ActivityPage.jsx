import * as React from "react";
import "./ActivityPage.css";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

export default function ActivityPage(props) {
  console.log("propsAP", props);
  const navigate = useNavigate();
  return (
    <div className="activie-page">
      {props.user.email ? (
        <></>
      ) : (
        <LoginForm user={props.user} setUser={props.setUser}></LoginForm>
      )}
    </div>
  );
}
