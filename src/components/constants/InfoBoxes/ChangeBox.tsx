import React, { FC, useEffect, useState } from "react";
import "./InfoBoxes.css";

import InfoName from "../../common/Info/InfoName";
import InfoContents from "../../common/Info/InfoContents";

import TextInput from "../../common/Form/TextInput";

interface Props {
  modifiedDate: Date;
  isChangeName: boolean;
  setValue: Function;
  value: any;
  func: Function;
}

const ChangeBox: FC<Props> = (Props) => {
  const { modifiedDate, isChangeName, setValue, value, func } = Props;
  const [canChange, setCanChange] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const changeTime = isChangeName ? 7889400000 : 259200000;
    console.log(modifiedDate, " => modifiedDate");
    const canChangeTime = new Date(
      modifiedDate.setTime(modifiedDate.getTime() + changeTime)
    );
    console.log(canChangeTime, " => canChangeTime");

    //현재 시간이 canChangeTime보다 작다면
    if (new Date().getTime() - canChangeTime.getTime() < 0) {
      setTime(canChangeTime);
    } else {
      setCanChange(true);
    }
  }, [modifiedDate]);
  return (
    <div className="TextBox">
      <InfoName text="닉네임 변경" />
      {canChange ? (
        <div className="textBox">
          <TextInput
            func={func}
            btnText="변경"
            value={value}
            setValue={setValue}
          />
        </div>
      ) : (
        <InfoContents text={`${time.toLocaleString()} 부터 변경가능`} />
      )}
    </div>
  );
};

export default ChangeBox;
