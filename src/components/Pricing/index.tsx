import styled from "@emotion/styled";


import { SANS_FONT_FAMILY } from "@/cssutils";

import Card, { CardPrice, CardRow, CardTitle } from "./Card";

import type React from "react";

const Container = styled.div({
  padding: "6em 15%",
});

const CenteredText = styled.div({
  textAlign: "center",
});

const Title = styled.h3({
  lineHeight: 0,
  fontSize: "1.6em",
  color: "#4A2E0C",
  fontWeight: "normal",
});

const Description = styled.p({
  lineHeight: "2em",
  fontSize: "0.6em",
  fontFamily: SANS_FONT_FAMILY,
  marginBottom: "3em",
});

const CardSet = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
  gridGap: "1em",
});

const MoreInfoContainer = styled.div({
  marginTop: "3em",
  display: "flex",
  justifyContent: "center",
});

const MoreInfo = styled.a({
  color: "white",
  fontSize: "0.8em",
  textDecoration: "none",
  fontFamily: SANS_FONT_FAMILY,
  padding: "1em 4em",
  backgroundColor: "black",
  transition: "opacity 0.2s ease-in-out",
  ":hover": {
    opacity: 0.5,
  },
});

const Pricing: React.FC = () => {
  return (
    <Container>
      <CenteredText>
        <Title>ライフスタイルに合わせて選べる多彩なプラン。</Title>
        <Description>
          平日のみのプラン、仕事帰りをコアタイムとした夕方以降が中心のプラン、休日をメインとしたプランなど、
          <br />
          多彩なプランの中からそれぞれのお客様のライフスタイルに合わせてお選びいただけます。
          <br />
          ビジター料金でのご利用も可能ですので、月額会員登録の前に体験をしたいという方も是非ご利用ください。
        </Description>
      </CenteredText>
      <CardSet>
        <Card>
          <CardTitle>デイタイムプラン</CardTitle>
          <CardPrice price={5000} />
          <CardRow>入会金0円</CardRow>
          <CardRow>平日 : 9時〜17時</CardRow>
          <CardRow>土日祝 : 利用ナシ</CardRow>
          <CardRow>コアタイムでの利用に最適なプラン</CardRow>
        </Card>
        <Card css={{ border: "4px solid #442602" }}>
          <CardTitle css={{ backgroundColor: "#442602" }}>
            スタンダードプラン
          </CardTitle>
          <CardPrice price={15000} />
          <CardRow>入会金0円</CardRow>
          <CardRow>平日 : 9時〜23時</CardRow>
          <CardRow>土日祝 : 営業時間全て</CardRow>
          <CardRow>営業時間内で終日ご利用可能なプラン</CardRow>
        </Card>
        <Card>
          <CardTitle>プレミアムプラン</CardTitle>
          <CardPrice price={20000} />
          <CardRow>入会金5000円</CardRow>
          <CardRow>平日 : 営業時間全て</CardRow>
          <CardRow>土日祝 : 営業時間全て</CardRow>
          <CardRow>フルに使いたい方のためのプラン</CardRow>
        </Card>
      </CardSet>
      <MoreInfoContainer>
        <MoreInfo href="#">プラン料金</MoreInfo>
      </MoreInfoContainer>
    </Container>
  );
};

export default Pricing;
