import styled from "@emotion/styled";


import { SANS_FONT_FAMILY } from "@/cssutils";

import type { NewsAttrs } from "../types";
import type React from "react";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
});

const RowContainer = styled.div({
  backgroundColor: "white",
  padding: "0.8em",
  fontFamily: SANS_FONT_FAMILY,
  borderBottom: "1px solid #D0D0D0",
  "&:last-child": {
    borderBottom: "none",
  },
});

const RowDate = styled.div({
  fontSize: "0.5em",
  color: "#979797",
});

const RowTitle = styled.div({
  fontSize: "0.8em",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
});

const Row: React.FC<{ news: NewsAttrs }> = ({ news }) => {
  return (
    <RowContainer>
      <RowDate>{news.datePublished}</RowDate>
      <RowTitle>{news.title}</RowTitle>
    </RowContainer>
  );
};

const NewsSet: React.FC<{ news: NewsAttrs[] }> = ({ news }) => {
  return (
    <Container>
      {news.map((news) => (
        <Row key={news.title} news={news} />
      ))}
    </Container>
  );
};

export default NewsSet;
