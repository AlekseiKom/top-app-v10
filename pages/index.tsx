import React, { useState } from 'react';
import { Htag, P, Button, Tag, Rating } from '../components';
import { Layout } from './../layout/Layout';



export default function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4)

  const [counter, setCounter] = useState<number>(0);


  return (
    <Layout>
      <Htag tag='h1'>{counter}</Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Каунтер +</Button>
      <Button appearance='ghost' arrow='right' onClick={() => setCounter(x => x - 1)}>Каунтер -</Button>
      <Button appearance='ghost'> ТЕСТ </Button>
      <P size='l'> Large</P>
      <P size='m'> Middle</P>
      <P size='s'> Small</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </Layout>
  );
}
