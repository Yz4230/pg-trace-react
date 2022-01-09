import CageImage8 from "@/assets/cafe8.jpg";

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
import NewsSet from "./EventsSet";

import type { EventAttrs } from "../types";
import type React from "react";

const Events: React.FC = () => {
  const events: EventAttrs[] = Array(10)
    .fill({
      title:
        "Reprehenderit minim mollit occaecat fugiat eiusmod cillum duis laborum.",
      datePublished: "2020.01.01",
      image: CageImage8,
    })
    .map((t, i) => ({ ...t, title: t.title + i }));

  return (
    <ColumnContainer>
      <TopicContainer>
        <Topic>Events</Topic>
        <SubTopic>イベント</SubTopic>
      </TopicContainer>
      <ScrollContainer>
        <NewsSet events={events} />
      </ScrollContainer>
      <LinkContainer href="#">
        <Link>イベント一覧</Link>
        <RightChevron />
      </LinkContainer>
    </ColumnContainer>
  );
};

export default Events;
