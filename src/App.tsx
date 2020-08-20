import React, { FC } from "react";
import PasswordInput from "./PasswordInput";

const App: FC = () => {
  // IF PASSWORD IS STRONG

  const password: String = "StrongP@ssw0rd!";
  const onSucces: () => void = () => {
    console.log("Password is correct!");
  };

  return <PasswordInput password={password} onSucces={onSucces} />;
};

export default App;
