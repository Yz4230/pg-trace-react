import styled from "@emotion/styled";

import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Info from "./components/Info";
import Pricing from "./components/Pricing";
import PrimaryDesc from "./components/PrimaryDesc";
import Top from "./components/Top";

import type React from "react";

const Stack = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const App: React.FC = () => {
  return (
    <Stack>
      <Top />
      <PrimaryDesc />
      <Gallery />
      <Info />
      <Pricing />
      <Footer />
    </Stack>
  );
};

export default App;
