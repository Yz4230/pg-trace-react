import styled from "@emotion/styled";
import { FaFacebookF, FaInstagram, FaRss, FaTwitter } from "react-icons/fa";

import { SANS_FONT_FAMILY } from "@/cssutils";

import { SwitchLogo } from "../Logo";

import type React from "react";

const Container = styled.div({
  padding: "4em 0",
  paddingBottom: 0,
  textAlign: "center",
});

const Address = styled.div({
  fontSize: "0.8em",
  fontFamily: SANS_FONT_FAMILY,
  textAlign: "center",
  lineHeight: "2em",
  color: "#404040",
});

const SocialContainer = styled.div({
  marginTop: "1em",
  display: "flex",
  justifyContent: "center",
  gap: "1em",
});

const Links = styled.div({
  marginTop: "3em",
  padding: "1em",
  backgroundColor: "#F5F5F5",
  display: "flex",
  justifyContent: "center",
  alignItems: "baseline",
});

const Link = styled.a({
  margin: "0 1em",
  textDecoration: "none",
  color: "black",
  fontSize: "0.8em",
  fontFamily: SANS_FONT_FAMILY,
  transition: "opacity 0.2s ease-in-out",
  textTransform: "uppercase",
  ":hover": {
    opacity: 0.5,
  },
});

const Footer: React.FC = () => {
  return (
    <Container>
      <SwitchLogo css={{ color: "black", fontSize: "2.5em", margin: 0 }}>
        Switch
      </SwitchLogo>
      <Address>
        〒150-0011 東京都渋谷区神宮前3-1-1 <br />
        TEL: 03-6304-5100 FAX: 03-6304-5102 営業時間: 10:00-18:00 定休日/不定休
      </Address>
      <SocialContainer>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaRss />
      </SocialContainer>
      <Links>
        <Link href="#">home</Link> |<Link href="#">concept</Link> |
        <Link href="#">service</Link> |<Link href="#">floors</Link> |
        <Link href="#">interview</Link> |<Link href="#">blog</Link> |
        <Link href="#">access</Link> |<Link href="#">download</Link>
      </Links>
    </Container>
  );
};

export default Footer;
