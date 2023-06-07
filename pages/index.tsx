import React from 'react';
import { Htag, P } from '../components';
import { Button } from '../components/Button/Button';

export default function Home(): JSX.Element {


  return (
    <div>
      <Htag tag='h1'>Teкст</Htag>
      <Button appearance='primary' className='testClass' arrow='right'> ТЕСТ </Button>
      <Button appearance='ghost'> ТЕСТ </Button>
      <P size='l'> Large</P>
      <P size='m'> Middle</P>
      <P size='s'> Small</P>
    </div >
  );
}
