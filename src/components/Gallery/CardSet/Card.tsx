import styled from "@emotion/styled";


import { SANS_FONT_FAMILY } from "@/cssutils";

import type { CardAttrs } from "./types";
import type React from "react";

const Container = styled.div({
  fontFamily: SANS_FONT_FAMILY,
  display: "flex",
  flexDirection: "column",
});

const ImageContainer = styled.div({
  position: "relative",
  height: "12em",
});

const Image = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  clipPath: "polygon(7em 0, 0 7em, 0 100%, 100% 100%, 100% 0)",
});

const Section = styled.div({
  position: "absolute",
  top: "0",
  left: "0",
  textTransform: "uppercase",
  fontWeight: "bold",
});

const DescWrapper = styled.div({
  padding: "1.5em",
  backgroundColor: "#F4F4F4",
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

const Desc = styled.p({
  margin: 0,
  marginBottom: "1em",
  fontSize: "0.8em",
  lineHeight: "2.2em",
});

const Bottom = styled.div({
  flex: 1,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
});

const LinkButton = styled.a({
  font: SANS_FONT_FAMILY,
  textDecoration: "none",
  backgroundColor: "black",
  color: "white",
  padding: "1em",
  width: "70%",
  textAlign: "center",
  transition: "opacity 0.2s ease-in-out",
  "&:hover": {
    opacity: 0.5,
  },
});

type Props = CardAttrs;

const Card: React.FC<Props> = (props) => {
  return (
    <Container>
      <ImageContainer>
        <Section>{props.section}</Section>
        <Image src={props.imageUrl} />
      </ImageContainer>
      <DescWrapper>
        <Desc>{props.description}</Desc>
        <Bottom>
          <LinkButton href="#">{props.linkLabel}</LinkButton>
        </Bottom>
      </DescWrapper>
    </Container>
  );
};

export default Card;
