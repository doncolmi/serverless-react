import React, { FC } from "react";
import "./Header.css";

import NormalText from "../../components/common/Text/NormalText";
import LightText from "../../components/common/Text/LightText";

interface Props {
  title: string;
  subtitle: string;
}

const PageHeader: FC<Props> = ({ title, subtitle }: Props) => {
  return (
    <div className="PageHeader">
      <NormalText text={title} />
      <LightText text={subtitle} />
    </div>
  );
};

export default PageHeader;
