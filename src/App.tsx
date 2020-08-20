import React, { FC, useState } from "react";
import PasswordInput from "./PasswordInput";

const App: FC = () => {
  // PASSWORD IS STRONG
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);

  const password: String = "StrongP@ssw0rd!";
  // const password: String = "123";
  const onSucces: () => void = () => {
    setIsPasswordCorrect(true);
  };
  return (
    <div className="container">
      {isPasswordCorrect ? (
        <h2>Logged In!</h2>
      ) : (
        <PasswordInput password={password} onSucces={onSucces} />
      )}
    </div>
  );
};

export default App;
