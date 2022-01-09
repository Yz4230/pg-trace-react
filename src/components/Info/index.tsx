import styled from "@emotion/styled";

import Events from "./Events";
import News from "./News";

import type React from "react";

const Container = styled.div({
  padding: "3em 15%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
  gridTemplateRows: "25em",
  gap: "2em",
  backgroundColor: "#F4F4F4",
});

const Info: React.FC = () => {
  return (
    <Container>
      <News />
      <Events />
    </Container>
  );
};

export default Info;
