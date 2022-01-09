import styled from "@emotion/styled";

import { SANS_FONT_FAMILY } from "@/cssutils";

export const ColumnContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

export const TopicContainer = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "0.8em",
  fontWeight: "normal",
  color: "#4A2E0C",
  marginBottom: "1em",
});

export const Topic = styled.h3({
  lineHeight: 0,
  fontSize: "2em",
  fontWeight: "normal",
});

export const SubTopic = styled.h4({
  lineHeight: 0,
  fontSize: "0.8em",
  fontWeight: "normal",
  fontFamily: SANS_FONT_FAMILY,
});

export const ScrollContainer = styled.div({
  flex: 1,
  overflow: "scroll",
  border: "1px solid #D0D0D0",
});

export const LinkContainer = styled.a({
  marginTop: "1em",
  textDecoration: "none",
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  fontFamily: SANS_FONT_FAMILY,
  transition: "opaicty 0.2s ease-in-out",
  "&:hover": {
    opacity: 0.5,
  },
});

export const Link = styled.span({
  fontSize: "0.8em",
  marginRight: "0.5em",
});

export const RightChevron = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);
