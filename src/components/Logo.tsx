import styled from "@emotion/styled";

const SwitchLogo = styled.h1({
  fontSize: "1.5em",
  letterSpacing: "0.3em",
  color: "white",
  fontWeight: "normal",
});

const Logo = () => <SwitchLogo>Switch</SwitchLogo>;
const LogoBlack = () => (
  <SwitchLogo css={{ color: "black" }}>Switch</SwitchLogo>
);

export default Logo;
export { LogoBlack, SwitchLogo };
