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
      d-flex
      flex-column
      container-fluid
      h-100
      bg-light
      "
    >
      <img
        src="/pizzafox.png"
        className="
        w-50
        align-self-end
        m-3 mb-5
        "
      />
      <form
        className="
        container
        w-75
        d-flex
        flex-column
        "
        onSubmit={handleSubmit}
      >
        <h1>Sign in</h1>
        <p className="fs-4 text-secondary">Please sign in to continue</p>
        <div class="form-floating mb-3">
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="swagger@itu.dk"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <input
          id="submit-input"
          className="btn btn-primary align-self-end mt-3"
          type="submit"
          value="submit ➜"
        />
      </form>
    </div>
  );
}
