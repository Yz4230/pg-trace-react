import styled from "@emotion/styled";

import { SANS_FONT_FAMILY } from "@/cssutils";

import type React from "react";


const Conteiner = styled.div({
  padding: "3em",
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
});

const Title = styled.h2({
  fontSize: "1.6em",
  lineHeight: "0",
  fontWeight: "normal",
  marginBottom: "1em",
});

const Sentence = styled.p({
  fontSize: "0.6em",
  lineHeight: "2em",
  fontFamily: SANS_FONT_FAMILY,
});

const PrimaryDesc: React.FC = () => {
  return (
    <Conteiner>
      <Title>カフェで読書＆コワーキング。快適のフロアスペース空間。</Title>
      <Sentence>
        カフェエリアでコーヒーを注文し、ブックエリアでお好みの本を選び、コワーキングスペースでコーヒーと共に読書を楽しむ。
        <br />
        学校・仕事帰りに、平日に日中に、休日にゆっくり…さまざまなライフスタイルに合わせてご利用いただける多彩なプランをご用意しております。
      </Sentence>
    </Conteiner>
  );
};

export default PrimaryDesc;
