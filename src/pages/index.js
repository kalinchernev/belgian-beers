import React from 'react';
import beerImage from './images/belgian-beers.jpg';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>
      Welcome to <strike>your</strike> my new{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby</a> site ;)
    </p>
    <p>It's an extremely topical site about Belgian Beers! :)</p>
    <p>
      <img src={beerImage} alt="Funny image about Belgian Beers" />
    </p>
  </div>
);

export default IndexPage;
