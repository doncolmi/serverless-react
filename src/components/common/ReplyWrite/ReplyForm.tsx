import React, { FC } from "react";
import "./ReplyWrite.css";

interface Props {}

interface Props {
  placeholder: string;
  rows: number;
  setValue: Function;
  value: any;
}

const ReplyForm: FC<Props> = ({ setValue, placeholder, value }: Props) => {
  const handleChanges = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <textarea
      placeholder={placeholder}
      className="ReplyForm"
      rows={1}
      value={value}
      onChange={handleChanges}
    />
  );
};

export default ReplyForm;
