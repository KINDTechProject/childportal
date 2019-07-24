import React from "react";
import { CarouselSlide, CarouselSlideTheme } from '@microsoft/fast-components-react-msft';
import { Card } from "./components/card";
import { CardHandledProps } from "./components/card/card.props";

export function createCarouselSlidesFromCards(cards: CardHandledProps[]): CarouselSlide[] {
    let slides: CarouselSlide[] = [];
    for (let i = 0; i < cards.length; i++) {
        slides[i] = {
            content: getContents(cards[i]),
            id: String(i+1),
            theme: CarouselSlideTheme.light
        };
    }
    return slides;
}

export function getContents(cards: CardHandledProps): (className?: string) => React.ReactNode {
    return (className?: string): React.ReactNode => (
        <Card {...cards} />
    )
}