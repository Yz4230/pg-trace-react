import styled from "@emotion/styled";

import { SANS_FONT_FAMILY } from "@/cssutils";

import type React from "react";

const Container = styled.div({
  padding: "2em 0",
  backgroundColor: "#F5F5F5",
  textAlign: "center",
});

const Title = styled.h3({
  fontSize: "1.6em",
  color: "#4A2E0C",
  fontWeight: "normal",
  marginBottom: "0.3em",
});

const Sentence = styled.p({
  lineHeight: "2em",
  fontSize: "0.6em",
  fontFamily: SANS_FONT_FAMILY,
});

const Caption: React.FC = () => {
  return (
    <Container>
      <Title>人と人、人と本が繋がるまったく新しい快適時間。</Title>
      <Sentence>
        月額プラン以外にビジター料金でのご利用も可能です。通いやすい時間や曜日に合わせてプランをお選びください。
        <br />
        ご登録プランは後の変更も可能ですので、資格試験等の目標がある場合など環境の変化に合わせて柔軟に対応しております。Wi-Fiも電源も標準設備しており、
        <br />
        時間を気にせず仕事や勉強に取り組めます。カフェでの長居は気が引けるという方にも心置きなくご利用いただけます。
      </Sentence>
    </Container>
  );
};

export default Caption;
