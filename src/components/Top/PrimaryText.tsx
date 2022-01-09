import styled from "@emotion/styled";

import type React from "react";

const VerticalText = styled.span({
  writingMode: "vertical-rl",
  color: "white",
  fontSize: "1.5em",
});

const PrimaryText: React.FC = () => (
  <VerticalText>
    そうだ。
    <br />
    カフェに行こう。
  </VerticalText>
);

export default PrimaryText;
