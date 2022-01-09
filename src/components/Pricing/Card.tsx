import styled from "@emotion/styled";

import { SANS_FONT_FAMILY } from "@/cssutils";

import type React from "react";

const Card = styled.div({
  border: "1px solid #D0D0D0",
  fontFamily: SANS_FONT_FAMILY,
});
export default Card;

export const CardTitle = styled.div({
  textAlign: "center",
  backgroundColor: "#A19282",
  padding: "1em",
  color: "white",
  fontWeight: "bold",
});

const CardPrice: React.FC<{ price: number }> = ({ price }) => {
  let priceStr = "";
  price
    .toString()
    .split("")
    .reverse()
    .forEach((c, i) => {
      if (i === 0) {
        priceStr += c;
      } else if (i % 3 === 0) {
        priceStr += `,${c}`;
      } else {
        priceStr += c;
      }
    });
  priceStr = priceStr.split("").reverse().join("");

  return (
    <div
      css={{
        backgroundColor: "#EBE8E6",
        color: "#442602",
        padding: "1em",
        textAlign: "center",
      }}
    >
      <div>
        <span css={{ fontSize: "1em" }}>￥</span>
        <span css={{ fontSize: "2em", fontWeight: "bold" }}>{priceStr}</span>
      </div>
      <div>
        <span css={{ fontSize: "0.8em" }}>月額</span>
      </div>
    </div>
  );
};

const CardRow: React.FC = ({ children }) => {
  return (
    <div
      css={{
        padding: "1.2em",
        fontSize: "0.8em",
        textAlign: "center",
        color: "#404040",
        borderTop: "1px solid #D0D0D0",
      }}
    >
      {children}
    </div>
  );
};

export { CardPrice, CardRow };
