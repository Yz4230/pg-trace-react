import styled from "@emotion/styled";


import CardSet from "./CardSet";
import Intro from "./Intro";

import type React from "react";

const Container = styled.div({
  padding: "5em 15%",
  display: "flex",
  flexDirection: "column",
  gap: "5em",
});

const Gallery: React.FC = () => {
  return (
    <Container>
      <Intro />
      <CardSet />
    </Container>
  );
};

export default Gallery;
