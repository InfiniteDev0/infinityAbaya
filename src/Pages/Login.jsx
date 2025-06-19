import React, { useState } from "react";

const NAVBAR_HEIGHT = "8vh"; // Should match your Navbar

const Login = () => {
  const [state, setState] = useState("LOGIN");
  const changeState = () => {
    state === "LOGIN" ? setState("Create an account") : setState("LOGIN");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // handle login logic
  };
  const handleRegister = (e) => {
    e.preventDefault();
    // handle register logic
  };
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center"
      style={{
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT})`,
        marginTop: NAVBAR_HEIGHT,
      }}
    >
      <form
        onSubmit={state === "LOGIN" ? handleLogin : handleRegister}
        className="flex flex-col gap-[1.5rem] items-center w-[90vw] max-w-[400px]"
      >
        <h1 className="Poiret text-2xl  text-center">{state}</h1>
        <p className="text-center">
          {state === "LOGIN"
            ? "Enter your email and password to login:"
            : "Please fill in the information below:"}
        </p>
        <input
          className={`border outline-none w-full h-[5vh] !p-1 !pl-3 rounded bg-transparent text-white ${
            state === "LOGIN" ? "hidden" : ""
          }`}
          type="text"
          placeholder="Last name"
        />
        <input
          className={`border outline-none w-full h-[5vh] !p-1 !pl-3 rounded  text-white ${
            state === "LOGIN" ? "hidden" : ""
          }`}
          type="text"
          placeholder="First name"
        />
        <input
          className="border border-zinc-950 outline-none w-full h-[5vh] !p-1 !pl-3 rounded bg-transparent text-black"
          type="text"
          placeholder="E-mail"
        />
        <input
          className="border border-zinc-900 outline-none w-full h-[5vh] !p-1 !pl-3 rounded bg-transparent text-black"
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full h-[6vh] bg-white text-black cursor-pointer rounded"
        >
          {state}
        </button>
        <p className="text-sm text-white text-center">
          {state === "LOGIN"
            ? `Don't have an account / `
            : `Already have an account / `}
          <span
            onClick={changeState}
            className="text-white text-[16px] underline cursor-pointer"
          >
            {state === "LOGIN" ? "Sign up" : "Sign in"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
