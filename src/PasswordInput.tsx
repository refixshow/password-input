import React, { useCallback, useState, useRef, FC } from "react";

interface Props {
  password: String;
  onSucces: () => void;
}

const disabledInputs: number[] = [];

const PasswordInput: FC<Props> = ({ password, onSucces }) => {
  const inputsRef: any = useRef([]);
  const [length] = useState(
    Math.floor(Math.random() * 5) + password.length + 2
  );
  // const [isPasswordVisible, togglePasswordVisibility] = useState<boolean>(
  //   false
  // );

  const fillDisabledInputs = useCallback(() => {
    for (let i: number = 0; i < length; i++) {
      const randomNumber: number = Math.floor(Math.random() * password.length);
      if (
        !disabledInputs.includes(randomNumber) &&
        disabledInputs.length < password.length / 3
      )
        disabledInputs.push(randomNumber);

      if (i >= password.length) disabledInputs.push(i);
    }
  }, [password, length]);

  fillDisabledInputs();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();

      const isCharCorrect = (el: HTMLInputElement, idx: number): boolean => {
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
      <div>
        {Array.from({ length }).map((_: any, idx: number) => (
          <input
            name={`password char ${idx}`}
            autoFocus={idx === 0}
            key={idx}
            type="text"
            // type={isPasswordVisible ? "text" : "password"}
            disabled={idx === disabledInputs.find((el: number) => el === idx)}
            ref={(ref: HTMLInputElement) => (inputsRef.current[idx] = ref)}
            minLength={1}
            maxLength={1}
            required
            // value={
            //   idx === disabledInputs.find((el: number) => el === idx)
            //     ? password[idx]
            //     : undefined
            // }
          />
        ))}
      </div>
      <div>
        <input type="submit" value="submit" />
        {/* <input
          type="checkbox"
          onChange={() => {
            togglePasswordVisibility(!isPasswordVisible);
          }}
        /> */}
      </div>
    </form>
  );
};

export default PasswordInput;
