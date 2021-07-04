import React, { memo, useState } from "react";
import { Container, Text, Icon } from "./index.css";
import check_icon from "./icon_check.png";

const MultiPartColumnCell = ({ data: { text, isShake, isCompleted }, active }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleClick = () => setIsChecked((currState) => !currState);

  return (
    <Container onClick={handleClick} isShake={isShake} active={active}>
      <Text isChecked={isChecked} active={active}>
        {text}
      </Text>
      {isChecked && <Icon src={check_icon} alt="check_icon" />}
    </Container>
  );
};
export default memo(MultiPartColumnCell);
