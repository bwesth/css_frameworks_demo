import { useState } from "react";

export default function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `The following sign-in attempt was made: Email=${email}, Password=${password}`
    );
    setPassword("");
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div
      id="container"
      className="
      h-full
      flex
      flex-col
      bg-slate-50
      "
    >
      <img
        src="/pizzafox.png"
        className="
        w-2/5
        mt-4 mr-4 mb-16 ml-4
        self-end
        "
      />
      <form
        className="
        w-3/5
        flex
        flex-col
        self-center
        "
        onSubmit={handleSubmit}
      >
        <h1
          className="text-5xl"
        >
          Sign in
        </h1>
        <p
          className="
          text-lg
          text-slate-600
          "
        >
          Please sign in to continue
        </p>
        <div
          id="email-input-container"
          className="
          flex
          flex-col
          rounded-xl
          mt-4
          border-black
          border
          bg-white
          drop-shadow-lg
          " 
        >
          <label
            id="email-label"
            className="
            mt-1 ml-1
            w-full
            text-base
            "
            htmlFor="email-input"
          >
            ✉️ Email
          </label>
          <input
            id="email-input"
            className="
            text-2xl
            pb-1 pl-1
            rounded-b-xl
            bg-transparent
            "
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="swagger@itu.dk"
          />
        </div>
        <div
          id="password-input-container"
          className="
          flex
          flex-col
          mt-4
          border
          border-slate-50 border-b-black
          "
        >
          <label
            id="password-label"
            className="
            text-base
            w-full
            mt-1 ml-1
            "
            htmlFor="password-input"
          >
            🔒 Password
          </label>
          <input
            id="password-input"
            className="
            text-2xl
            pb-1
            pl-1
            bg-white
            "
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="princessBride1880"
          />
        </div>
        <input
          id="submit-input"
          className="
          w-2/5
          self-end
          mt-4
          bg-sky-800
          text-white
          rounded-xl
          "
          type="submit"
          value="submit ➜"
        />
      </form>
    </div>
  );
}
