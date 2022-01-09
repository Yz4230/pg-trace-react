import styled from "@emotion/styled/";


import CafeImage4 from "@/assets/cafe4.jpg";
import CafeImage5 from "@/assets/cafe5.jpg";
import CafeImage6 from "@/assets/cafe6.jpg";

import Card from "./Card";

import type { CardAttrs } from "./types";
import type React from "react";

const Container = styled.div({
  display: "grid",
  gap: "1em",
  gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
});

const cards: CardAttrs[] = [
  {
    imageUrl: CafeImage4,
    section: "concept",
    linkLabel: "コンセプト",
    description:
      "「本屋」でも「自習室」でもない、新しい空間、それがこのカフェ＆コワーキングです。お好きなドリンクを飲みながらゆったりと気兼ねなく勉強や仕事に取り組んでいただけます。",
  },
  {
    imageUrl: CafeImage5,
    section: "service",
    linkLabel: "サービス",
    description:
      "喫茶・軽食を楽しめるカフェスペース。ビジネス所から最新の雑誌まで取りそろえるブックスペース。ブース型のパーソナルワークスペースに、開放感があるコワーキングスペース。",
  },
  {
    imageUrl: CafeImage6,
    section: "floor",
    linkLabel: "フロアー",
    description:
      "カフェ・ブック・コワーキング。各エリアで異なるコンセプトを持つ当店では、目的や気分に合わせてフロア内を移動することで充実した時間をお過ごしいただけます。",
  },
];

const CardSet: React.FC = () => {
  return (
    <Container>
      {cards.map((card) => (
        <Card
          key={card.section}
          imageUrl={card.imageUrl}
          section={card.section}
          linkLabel={card.linkLabel}
          description={card.description}
        />
      ))}
    </Container>
  );
};

export default CardSet;
