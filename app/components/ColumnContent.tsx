import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { CardData, getAllCards, getColumnCards } from '../models/cards';
import { useSelector } from '../store/utilities';
import Card from './Card';

interface Props {
  id: string;
}

const ColumnContent = ({ id }: Props) => {
  const columnCards = useSelector(getColumnCards(id));
  return (
    <Flex flexDirection="column">
      {columnCards.map(([cardId, card]) => (
        <Card key={card.title} id={cardId} card={card} />
      ))}
    </Flex>
  );
};

export default ColumnContent;
