import React from 'react';
import { Htag, P } from '../components';
import { Button } from '../components/Button/Button';
import { Tag } from './../components/Tag/Tag';

export default function Home(): JSX.Element {


  return (
    <div>
      <Htag tag='h1'>Teкст</Htag>
      <Button appearance='primary' className='testClass' arrow='right'> ТЕСТ </Button>
      <Button appearance='ghost'> ТЕСТ </Button>
      <P size='l'> Large</P>
      <P size='m'> Middle</P>
      <P size='s'> Small</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
    </div >
  );
}
