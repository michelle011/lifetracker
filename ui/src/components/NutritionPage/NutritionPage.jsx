import * as React from "react";
import "./NutritionPage.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

export default function NutritionPage(props) {
  return (
    <div className="nutrition-page">
      {props.user.email ? (
        <main>
          <div className="banner">
            <h1>Nutrition</h1>
          </div>
        </main>
      ) : (
        <LoginForm user={props.user} setUser={props.setUser}></LoginForm>
      )}
    </div>
  );
}
