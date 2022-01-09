
import {
  ColumnContainer,
  Link,
  LinkContainer,
  RightChevron,
  ScrollContainer,
  SubTopic,
  Topic,
  TopicContainer,
} from "../common";
import NewsSet from "./NewsSet";

import type { NewsAttrs } from "../types";
import type React from "react";

const News: React.FC = () => {
  const news: NewsAttrs[] = Array(10)
    .fill({
      title:
        "Reprehenderit minim mollit occaecat fugiat eiusmod cillum duis laborum.",
      datePublished: "2020.01.01",
    })
    .map((t, i) => ({ title: t.title + i, datePublished: t.datePublished }));

  return (
    <ColumnContainer>
      <TopicContainer>
        <Topic>News</Topic>
        <SubTopic>ニュース</SubTopic>
      </TopicContainer>
      <ScrollContainer>
        <NewsSet news={news} />
      </ScrollContainer>
      <LinkContainer href="#">
        <Link>お知らせ一覧</Link>
        <RightChevron />
      </LinkContainer>
    </ColumnContainer>
  );
};

export default News;
