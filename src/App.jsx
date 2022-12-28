import React from 'react';
import { Hero, Sales, FlexContent, Stories, Footer } from './components';
import { heroApi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';

const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
       <Hero heroApi={heroApi} />
       <Sales endpoint={popularsales} ifExists />
       <FlexContent endpoint={highlight} ifExists />
       <Sales endpoint={toprateslaes} />
       <FlexContent endpoint={sneaker} />
       <Stories story={story}/>
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;