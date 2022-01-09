import styled from "@emotion/styled";


import CafeImage from "@/assets/cafe.png";
import { url } from "@/cssutils";

import Header from "./Header";
import PrimaryText from "./PrimaryText";

import type React from "react";

const TopStack = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundImage: url(CafeImage),
  backgroundSize: "cover",
});

const Centered = styled.div({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Top: React.FC = () => (
  <TopStack>
    <Header />
    <Centered>
      <PrimaryText />
    </Centered>
  </TopStack>
);

export default Top;
