import styled from "@emotion/styled";

import { ROBOTO_FONT_FAMILY } from "@/cssutils";

import Logo from "../Logo";

import type React from "react";

const Right = styled.div({
  display: "flex",
  flex: 1,
  justifyContent: "flex-end",
});

const Link = styled.a({
  color: "white",
  textDecoration: "none",
  transition: "opacity 0.2s ease-in-out",
  fontFamily: ROBOTO_FONT_FAMILY,
  textTransform: "uppercase",
  marginLeft: "2em",
  fontSize: "0.7em",
  "&:hover": {
    opacity: 0.5,
  },
});

const _Header = styled.header({
  display: "flex",
  alignItems: "center",
  padding: "0.5em 1.5em",
  backgroundColor: "rgba(0,0,0,0.7)",
});

const Header: React.FC = () => {
  const links = [
    "home",
    "consept",
    "service",
    "floors",
    "interview",
    "blog",
    "access",
    "download",
  ];

  return (
    <_Header>
      <Logo />
      <Right>
        {links.map((link) => (
          <Link key={link} href="#">
            {link}
          </Link>
        ))}
      </Right>
    </_Header>
  );
};

export default Header;
