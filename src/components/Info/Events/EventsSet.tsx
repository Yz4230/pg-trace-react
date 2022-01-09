import styled from "@emotion/styled";


import { SANS_FONT_FAMILY } from "@/cssutils";

import type { EventAttrs } from "../types";
import type React from "react";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
});

const RowContainer = styled.div({
  backgroundColor: "white",
  fontFamily: SANS_FONT_FAMILY,
  borderBottom: "1px solid #D0D0D0",
  "&:last-child": {
    borderBottom: "none",
  },
  display: "grid",
  gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)",
  gridTemplateRows: "6em",
  alignItems: "stretch",
  justifyItems: "stretch",
});

const RowImage = styled.img({
  objectFit: "cover",
});

const RowRight = styled.div({
  padding: "1em",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const RowTitle = styled.div({
  fontSize: "0.8em",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
});

const RowDate = styled.div({
  fontSize: "0.5em",
  color: "#979797",
});

const Row: React.FC<{ event: EventAttrs }> = ({ event }) => {
  return (
    <RowContainer>
      <RowImage src={event.image} />
      <RowRight>
        <RowTitle>{event.title}</RowTitle>
        <RowDate>{event.datePublished}</RowDate>
      </RowRight>
    </RowContainer>
  );
};

const NewsSet: React.FC<{ events: EventAttrs[] }> = ({ events }) => {
  return (
    <Container>
      {events.map((e) => (
        <Row key={e.title} event={e} />
      ))}
    </Container>
  );
};

export default NewsSet;
