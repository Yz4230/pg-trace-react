import styled from "@emotion/styled";


import Caption from "./Caption";
import ImageSet from "./ImageSet";

import type React from "react";

const VStack = styled.div({
  display: "flex",
  flexDirection: "column",
});

const Intro: React.FC = () => {
  return (
    <VStack>
      <ImageSet />
      <Caption />
    </VStack>
  );
};

export default Intro;
