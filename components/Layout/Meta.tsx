import Head from 'next/head';
import React from 'react';

const Meta = (props: { title: string }) => {
  return (
    <Head>
      <title>{props.title ? props.title : 'Shopago Store'}</title>
      <meta name='description' content='Shopago Store' />
    </Head>
  );
};

export default Meta;
