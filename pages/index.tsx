import React, { useState } from 'react';
import { Htag, P, Button, Tag, Rating } from '../components';
import { Layout, withLayout } from './../layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { MenuItem } from '../interfaces/menu.interface';



function Home({ menu }: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(4)
  const [counter, setCounter] = useState<number>(0);


  return (
    <>
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
      {/* <Rating rating={rating} isEditable setRating={setRating}></Rating>
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul> */}
    </>
  );
}

export default withLayout(Home);

export const getStatcProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  }
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}