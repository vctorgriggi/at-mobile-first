import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CircularIndeterminate from "./components/Loading";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const lazyWithDelay = (importFunction, delayTime = 1000) =>
  lazy(() =>
    Promise.all([importFunction(), delay(delayTime)]).then(
      ([moduleExports]) => moduleExports
    )
  );

const SignIn = lazyWithDelay(() => import("./pages/SignIn"));
const SignUp = lazyWithDelay(() => import("./pages/SignUp"));
const Form = lazyWithDelay(() => import("./pages/Form"));
const Home = lazyWithDelay(() => import("./pages/Home"));
const List = lazyWithDelay(() => import("./pages/List"));

export default function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <CircularIndeterminate
            sx={{
              height: "100vh",
              alignItems: "center",
            }}
          />
        }
      >
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
