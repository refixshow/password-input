import React, { useCallback, useState, useRef, FC } from "react";

const disabledInputs: number[] = [];

interface Props {
  password: String;
  onSucces: () => void;
}

const PasswordInput: FC<Props> = ({ password, onSucces }) => {
  const inputsRef: any = useRef([]);
  const [length] = useState(
    Math.floor(Math.random() * 5) + password.length + 2
  );

  for (let i: number = 0; i < length; i++) {
    const randomNumb: number = Math.floor(Math.random() * password.length);
    if (
      !disabledInputs.includes(randomNumb) &&
      disabledInputs.length < password.length / 3
    )
      disabledInputs.push(randomNumb);

    if (i >= password.length) disabledInputs.push(i);
  }

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();

      const isCharCorrect = (el: HTMLInputElement, idx: number) => {
        if (!el.disabled) {
          return el.value === password[idx];
        }
        return true;
      };

      if (inputsRef.current.every(isCharCorrect)) onSucces();
      else console.error("Password isn't correct!");
    },
    [password, onSucces]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          type="text"
          disabled={idx === disabledInputs.find((el) => el === idx)}
          ref={(ref) => (inputsRef.current[idx] = ref)}
          minLength={1}
          maxLength={1}
          required
        />
      ))}
      <input type="submit" value="click" />
    </form>
  );
};

export default PasswordInput;
