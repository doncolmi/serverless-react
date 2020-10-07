import React, { FC, useEffect, useState } from "react";
import "./Reply.css";

interface Props {}

interface Props {
  placeholder: string;
  rows: number;
  setValue: Function;
}

const ReplyForm: FC<Props> = ({ setValue, placeholder, rows }: Props) => {
  const handleChanges = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <textarea
      placeholder={placeholder}
      className="ReplyForm"
      rows={1}
      onChange={handleChanges}
    />
  );
};

export default ReplyForm;
