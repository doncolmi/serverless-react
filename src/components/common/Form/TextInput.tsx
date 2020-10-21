import React, { FC } from "react";
import "./Form.css";

interface Props {
  text?: string;
  func: Function;
  btnText: string;
  setValue: Function;
  value: any;
}

const TextInput: FC<Props> = (Props) => {
  const { text, func, btnText, value, setValue } = Props;
  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="textInputWrapper">
      <input
        type="text"
        className="textInput"
        value={value}
        placeholder={text}
        onChange={handleChanges}
      />
      <button className="textInputBtn" onClick={() => func()}>
        {btnText}
      </button>
    </div>
  );
};

export default TextInput;
