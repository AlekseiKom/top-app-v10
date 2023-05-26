import React from 'react';
import { Htag } from '../components';
import { Button } from '../components/Button/Button';

export default function Home(): JSX.Element {


  return (
    <div>
      <Htag tag='h1'>Teкст</Htag>
      <Button appearance='primary' className='testClass'> ТЕСТ </Button>
      <Button appearance='ghost'> ТЕСТ </Button>
    </div >
  );
}
