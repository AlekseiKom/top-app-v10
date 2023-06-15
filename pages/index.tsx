import React, { useState } from 'react';
import { Htag, P } from '../components';
import { Button } from '../components/Button/Button';
import { Tag } from './../components/Tag/Tag';
import { Rating } from './../components/Rating/Rating';

export default function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
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
      <Rating rating={4}></Rating>
    </div >
  );
}
